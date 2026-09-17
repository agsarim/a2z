import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/seo/structured-data"

export const metadata = pageMetadata("/services/book-marketing")

import { BookMarketingHero } from "@/components/services/book-marketing/hero"
import { BookMarketingContent } from "@/components/services/book-marketing/content-section"
import { MarketingStrategies } from "@/components/services/book-marketing/marketing-strategies"
import { MarketingCaseStudies } from "@/components/services/book-marketing/case-studies"
import { MarketingPerformanceMetrics } from "@/components/services/book-marketing/performance-metrics"
import { CtaSection } from "@/components/services/digital-marketing/cta-section" // Reusing the generic CTA

export default function BookMarketingPage() {
  return (
    <main className="min-h-screen">
      <PageStructuredData path="/services/book-marketing" />
      <BookMarketingHero />
      <BookMarketingContent />
      <MarketingStrategies />
      <MarketingCaseStudies />
      <MarketingPerformanceMetrics />
      <CtaSection />
    </main>
  )
}
