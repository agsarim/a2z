import type { Metadata } from "next"

const configuredUrl = process.env.SITE_URL?.trim()
const parsedUrl = new URL(configuredUrl || "http://localhost:3000")
if (!['http:', 'https:'].includes(parsedUrl.protocol) || parsedUrl.username || parsedUrl.password || parsedUrl.pathname !== '/' || parsedUrl.search || parsedUrl.hash) {
  throw new Error("SITE_URL must be an absolute site origin, such as https://your-domain.com")
}

export const siteUrl = parsedUrl.origin
export const siteName = "Syed Saqib Mumtaz"
export const canIndex = Boolean(configuredUrl) && parsedUrl.protocol === "https:" &&
  !["localhost", "127.0.0.1", "[::1]"].includes(parsedUrl.hostname) &&
  process.env.SEO_NOINDEX !== "true" &&
  (!process.env.VERCEL_ENV || process.env.VERCEL_ENV === "production")

export const pages = {
  "/": {
    title: "Saqib Mumtaz | Book Marketing & Digital Strategy",
    label: "Home",
    description: "Grow your author brand with Syed Saqib Mumtaz. Explore book marketing, publishing, digital strategy, and practical AI marketing training.",
  },
  "/about": {
    title: "About Syed Saqib Mumtaz | Marketing & Publishing Expert",
    label: "About",
    description: "Meet Syed Saqib Mumtaz, a digital marketer, publishing strategist, and trainer helping authors and businesses build authority and grow their reach.",
  },
  "/services/digital-marketing": {
    title: "Digital Marketing Services | Saqib Mumtaz",
    label: "Digital Marketing",
    description: "Build your brand with digital marketing strategy, paid advertising, LinkedIn branding, email campaigns, and AI-powered content from Saqib Mumtaz.",
    service: "Digital marketing consulting",
  },
  "/services/book-publishing": {
    title: "Book Publishing Services | Saqib Mumtaz",
    label: "Book Publishing",
    description: "Bring your manuscript to market with professional book publishing support. Explore editing, cover design, formatting, and distribution with Saqib Mumtaz.",
    service: "Book publishing services",
  },
  "/services/book-marketing": {
    title: "Book Marketing & Amazon Ads | Saqib Mumtaz",
    label: "Book Marketing",
    description: "Reach more readers with tailored book marketing, Amazon advertising, author branding, and launch strategies. Explore Saqib Mumtaz's marketing services.",
    service: "Book marketing services",
  },
  "/training": {
    title: "Marketing Workshops & AI Training | Saqib Mumtaz",
    label: "Workshops & Training",
    description: "Explore practical workshops, corporate training, and mentorship in digital marketing, AI tools, and book publishing with Syed Saqib Mumtaz.",
  },
  "/success-stories": {
    title: "Author Success Stories & Case Studies | Saqib Mumtaz",
    label: "Success Stories",
    description: "Explore author testimonials, book marketing case studies, and publishing results from clients who have worked with Syed Saqib Mumtaz.",
  },
  "/media": {
    title: "Speaking, Interviews & Media | Saqib Mumtaz",
    label: "Speaking & Media",
    description: "Watch Syed Saqib Mumtaz's interviews and speaking appearances. Explore insights on marketing, publishing, and AI, plus highlights from Serena.",
  },
  "/contact": {
    title: "Contact Saqib Mumtaz | Book a Free Consultation",
    label: "Contact",
    description: "Discuss your book, brand, or next event with Syed Saqib Mumtaz. Book a free consultation for marketing, publishing, training, or speaking engagements.",
  },
} as const

export type PagePath = keyof typeof pages
export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString()
}

export function pageMetadata(path: PagePath): Metadata {
  const page = pages[path]
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName,
      title: page.title,
      description: page.description,
      url: absoluteUrl(path),
      images: [{ url: absoluteUrl("/opengraph-image.png"), width: 1200, height: 630, alt: `${siteName} — Marketing, Publishing & Training` }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [absoluteUrl("/opengraph-image.png")],
    },
  }
}
