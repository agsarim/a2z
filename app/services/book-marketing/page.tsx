import { BookMarketingHero } from "@/components/services/book-marketing/hero"
import { MarketingStrategies } from "@/components/services/book-marketing/marketing-strategies"
import { MarketingCaseStudies } from "@/components/services/book-marketing/case-studies"
import { MarketingPerformanceMetrics } from "@/components/services/book-marketing/performance-metrics"
import { CtaSection } from "@/components/services/digital-marketing/cta-section" // Reusing the generic CTA

export default function BookMarketingPage() {
  return (
    <main className="min-h-screen">
      <BookMarketingHero />
      <MarketingStrategies />
      <MarketingCaseStudies />
      <MarketingPerformanceMetrics />
      <CtaSection />
    </main>
  )
}
