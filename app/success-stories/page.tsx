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
      <HeroSection />
      <MetricsSection />
      <CaseStudiesSection />
      <TestimonialsCarousel />
      <ClientBooksGallery />
      <VideoTestimonialsSection />
      <CtaSection />
    </main>
  )
}
