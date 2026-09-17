import { pageMetadata } from "@/lib/seo"
import { PageStructuredData } from "@/components/seo/structured-data"

export const metadata = pageMetadata("/success-stories")

import { HeroSection } from "@/components/success-stories/hero-section"
import { MetricsSection } from "@/components/success-stories/metrics-section"
import { CaseStudiesSection } from "@/components/success-stories/case-studies-section"
import { ClientBooksGallery } from "@/components/success-stories/client-books-gallery"
import { VideoTestimonialsSection } from "@/components/success-stories/video-testimonials-section"
import { CtaSection } from "@/components/services/digital-marketing/cta-section" // Reusing existing CTA
import {TestimonialsCarousel} from "@/components/testimonials-carousel"

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen">
      <PageStructuredData path="/success-stories" />
      <HeroSection />
            <VideoTestimonialsSection />

    
      <CaseStudiesSection />
      <TestimonialsCarousel />
      <ClientBooksGallery />
        <MetricsSection />
      <CtaSection />
    </main>
  )
}
