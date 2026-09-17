# SEO configuration and launch

All nine public pages have unique titles, descriptions, canonical URLs, Open Graph and Twitter metadata, and JSON-LD. The shared graph describes the person and website; page graphs describe pages, breadcrumbs, and the three services. No review scores, prices, or unsupported business details are invented.

## Deployment configuration

Copy the settings in `seo.env.example` into your hosting environment (or `.env.local` for local checks). Set `SITE_URL` to the preferred public HTTPS origin, including `www` only if that is your preferred hostname. Build again after changing any SEO variables; these pages and metadata routes are prerendered.

Without an HTTPS `SITE_URL`, pages use `noindex, nofollow`, robots disallow crawling, and the sitemap is empty. Set `SEO_NOINDEX=true` on staging. Vercel non-production environments are excluded automatically. This is indexing control, not access control.

Configure permanent redirects at your hosting provider from HTTP to HTTPS and from alternate hostnames to the preferred hostname. Canonicals alone do not redirect visitors. Keep Next.js's default trailing-slash redirects enabled.

## Generated endpoints

- `/sitemap.xml`: all public page URLs; add future routes to `lib/seo.ts` and use `pageMetadata` and `PageStructuredData` in the new page. No fabricated modification dates.
- `/robots.txt`: crawl policy and the absolute sitemap URL on production.
- `/manifest.webmanifest`: site identity, browser display mode, theme, and 192px/512px/maskable icons. This does not claim offline functionality.
- `/opengraph-image.png`: a branded 1200 × 630 social image.
- `/favicon.ico`, `/icons/icon.svg`, and PNG/apple icons: branded SM monogram.

## Search engine verification and submission

1. Deploy to the final domain and confirm public pages return 200 without authentication.
2. Add a domain property in Google Search Console and verify using the DNS TXT record it provides. Alternatively, use a URL-prefix property and set `GOOGLE_SITE_VERIFICATION` to the supplied HTML-tag token, then rebuild.
3. Verify in Bing Webmaster Tools using `BING_SITE_VERIFICATION`, or import the verified Google property.
4. Submit the live `/sitemap.xml` in both consoles. Use Google URL Inspection to check the homepage and service pages and request indexing.
5. Check Search Console's Page Indexing, Core Web Vitals, and enhancement reports after crawling. Validate the deployed JSON-LD with Google's Rich Results Test and Schema.org Validator. Valid markup does not guarantee a rich result.

These account/DNS steps require access to your domain and webmaster accounts; code changes do not submit the site or guarantee indexing/ranking.

## Verification

Run `npm run build`, then `npm run check:seo`. The SEO check inspects generated HTML, sitemap, robots, manifest, icons, JSON-LD, and the social image. It detects both indexable production and intentionally excluded preview builds. Run `npx tsc --noEmit --incremental false` separately: the existing Next.js config skips type-checking and linting during builds.

Current content follow-up: replace placeholder phone numbers and confirm public performance claims and testimonials before launch. Keep the personal social profiles consistent across the homepage, footer, and schema. Add substantive page content and real results over time; metadata alone is not a ranking strategy.

References: [Next.js metadata](https://nextjs.org/docs/14/app/api-reference/functions/generate-metadata), [Google canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).
