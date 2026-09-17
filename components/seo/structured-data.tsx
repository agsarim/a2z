import { absoluteUrl, pages, siteName, type PagePath } from "@/lib/seo"

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
}

export function SiteStructuredData() {
  return <JsonLd data={{
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": absoluteUrl("/#person"),
        name: siteName,
        url: absoluteUrl("/about"),
        image: absoluteUrl("/images/headshot2-hq.jpg"),
        jobTitle: "Digital Marketer, Publishing Strategist and Trainer",
        description: pages["/about"].description,
        sameAs: [
          "https://www.facebook.com/saqibmumtaz2171",
          "https://www.linkedin.com/in/syed-saqib-mumtaz-hashmi-bookmarketing/",
          "https://www.instagram.com/saqibmumtaz2171",
          "https://www.tiktok.com/@saqibmumtaz2171",
        ],
      },
      {
        "@type": "WebSite",
        "@id": absoluteUrl("/#website"),
        url: absoluteUrl("/"),
        name: siteName,
        description: pages["/"].description,
        inLanguage: "en",
        publisher: { "@id": absoluteUrl("/#person") },
      },
    ],
  }} />
}

export function PageStructuredData({ path }: { path: PagePath }) {
  const page = pages[path]
  const graph: Record<string, unknown>[] = [{
    "@type": path === "/about" ? "AboutPage" : path === "/contact" ? "ContactPage" : "WebPage",
    "@id": absoluteUrl(`${path}#webpage`),
    url: absoluteUrl(path),
    name: page.title,
    description: page.description,
    inLanguage: "en",
    isPartOf: { "@id": absoluteUrl("/#website") },
    about: { "@id": absoluteUrl("/#person") },
    ...(path !== "/" && { breadcrumb: { "@id": absoluteUrl(`${path}#breadcrumb`) } }),
  }]
  if (path !== "/") graph.push({
    "@type": "BreadcrumbList",
    "@id": absoluteUrl(`${path}#breadcrumb`),
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: page.label, item: absoluteUrl(path) },
    ],
  })
  if ("service" in page) graph.push({
    "@type": "Service",
    "@id": absoluteUrl(`${path}#service`),
    name: page.label,
    serviceType: page.service,
    description: page.description,
    url: absoluteUrl(path),
    provider: { "@id": absoluteUrl("/#person") },
    mainEntityOfPage: { "@id": absoluteUrl(`${path}#webpage`) },
  })
  return <JsonLd data={{ "@context": "https://schema.org", "@graph": graph }} />
}
