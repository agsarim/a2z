import type { MetadataRoute } from "next"
import { absoluteUrl, canIndex, pages } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  if (!canIndex) return []
  // Do not invent last-modified dates: add them when content has tracked revision dates.
  return Object.keys(pages).map((path) => ({ url: absoluteUrl(path) }))
}
