import assert from "node:assert/strict"
import { readFileSync, readdirSync, existsSync } from "node:fs"
import path from "node:path"

const output = ".next/server/app"
const read = (file) => readFileSync(file, "utf8")
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/g)].map((m) => [m[1], m[2]]))
const routes = []
function discover(directory, prefix = "") {
  if (existsSync(path.join(directory, "page.tsx"))) routes.push(prefix || "/")
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    if (entry.isDirectory()) discover(path.join(directory, entry.name), `${prefix}/${entry.name}`)
  }
}
discover("app")
const titles = new Set()
const descriptions = new Set()
const canonicalUrls = []
let indexable
for (const route of routes) {
  const html = read(path.join(output, route === "/" ? "index.html" : `${route.slice(1)}.html`))
  const metadata = [...html.matchAll(/<meta\s[^>]+>/g)].map(([tag]) => attrs(tag))
  const links = [...html.matchAll(/<link\s[^>]+>/g)].map(([tag]) => attrs(tag))
  const meta = (name) => metadata.find((item) => item.name === name || item.property === name)?.content
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
  assert(title && !titles.has(title), `${route}: missing or duplicate title`)
  titles.add(title)
  const description = meta("description")
  assert(description && !descriptions.has(description), `${route}: missing or duplicate description`)
  descriptions.add(description)
  const canonicals = links.filter((item) => item.rel === "canonical")
  assert.equal(canonicals.length, 1, `${route}: one canonical required`)
  const canonical = new URL(canonicals[0].href)
  assert.equal(canonical.pathname, route, `${route}: canonical path`)
  assert.equal(new URL(meta("og:url")).href, canonical.href, `${route}: Open Graph URL`)
  canonicalUrls.push(canonical.href)
  for (const field of ["og:title", "og:description", "og:image", "twitter:title", "twitter:description", "twitter:image"]) assert(meta(field), `${route}: ${field}`)
  assert.equal(meta("twitter:card"), "summary_large_image")
  assert.equal(new URL(meta("og:image")).origin, canonical.origin)
  assert(links.some((item) => item.rel === "manifest" && item.href === "/manifest.webmanifest"))
  assert(links.some((item) => item.rel === "apple-touch-icon"))
  assert(meta("robots"), `${route}: robots missing`)
  const pageIndexable = !meta("robots").includes("noindex")
  if (indexable === undefined) indexable = pageIndexable
  assert.equal(pageIndexable, indexable, `${route}: inconsistent indexing policy`)
  assert.equal((html.match(/<main[\s>]/g) || []).length, 1, `${route}: one main landmark`)
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: one H1`)
  const graphs = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].flatMap((m) => {
    const schema = JSON.parse(m[1])
    assert.equal(schema["@context"], "https://schema.org")
    return schema["@graph"] || [schema]
  })
  assert(graphs.some((item) => item["@type"] === "Person"))
  assert(graphs.some((item) => item["@type"] === "WebSite"))
  assert(graphs.some((item) => item.url === canonical.href && /Page$/.test(item["@type"])))
  if (route !== "/") assert(graphs.some((item) => item["@type"] === "BreadcrumbList"))
  if (route.startsWith("/services/")) assert(graphs.some((item) => item["@type"] === "Service"))
  for (const [tag] of html.matchAll(/<a\s[^>]+>/g)) {
    const href = attrs(tag).href
    if (href?.startsWith("/") && !href.startsWith("//")) {
      const target = href.split(/[?#]/)[0]
      assert(routes.includes(target) || existsSync(`public${target}`), `${route}: broken internal link ${href}`)
    }
  }
}
assert.equal(new Set(canonicalUrls.map((url) => new URL(url).origin)).size, 1)
const sitemap = read(`${output}/sitemap.xml.body`)
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
assert.deepEqual(urls.sort(), indexable ? canonicalUrls.sort() : [])
const robots = read(`${output}/robots.txt.body`)
assert(robots.includes(indexable ? "Allow: /" : "Disallow: /"))
if (indexable) assert(robots.includes(`Sitemap: ${new URL('/sitemap.xml', canonicalUrls[0]).href}`))
const manifest = JSON.parse(read(`${output}/manifest.webmanifest.body`))
assert.equal(manifest.start_url, "/")
assert(manifest.name && manifest.short_name && manifest.theme_color)
for (const icon of manifest.icons) {
  const bytes = readFileSync(`public${icon.src}`)
  assert.equal(bytes.subarray(1, 4).toString(), "PNG")
  assert.equal(`${bytes.readUInt32BE(16)}x${bytes.readUInt32BE(20)}`, icon.sizes)
}
const social = readFileSync("app/opengraph-image.png")
assert.equal(social.readUInt32BE(16), 1200)
assert.equal(social.readUInt32BE(20), 630)
console.log(`SEO checks passed for ${routes.length} pages (${indexable ? 'indexable production' : 'noindex preview/unconfigured'}): metadata, canonicals, internal links, landmarks, structured data, sitemap, robots, manifest, icons, social image.`)
