import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/seo/structured-data"

export const metadata = pageMetadata("/services/book-publishing")

import { BookPublishingHero } from "@/components/services/book-publishing/hero"
import { BookPublishingContent } from "@/components/services/book-publishing/content-section"
import { PublishingPricingPackages } from "@/components/services/book-publishing/pricing-packages"
import { PublishingProcessWorkflow } from "@/components/services/book-publishing/publishing-workflow"
import { QualityShowcase } from "@/components/services/book-publishing/quality-showcase"
import { PublishingPartners } from "@/components/services/book-publishing/publishing-partners"
import { CtaSection } from "@/components/services/digital-marketing/cta-section" // Reusing the generic CTA

export default function BookPublishingPage() {
  return (
    <main className="min-h-screen">
      <PageStructuredData path="/services/book-publishing" />
      <BookPublishingHero />
      <BookPublishingContent />
      <PublishingPricingPackages />
      <PublishingProcessWorkflow />
      {/* <QualityShowcase />
      <PublishingPartners /> */}
      <CtaSection />
    </main>
  )
}
