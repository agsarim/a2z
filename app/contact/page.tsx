import { HeroSection } from "@/components/contact/hero-section"
import { FreeConsultationDetails } from "@/components/contact/free-consultation-details"
import { ConsultationProcess } from "@/components/contact/consultation-process"
import { ContactMethods } from "@/components/contact/contact-methods"
import { OfficeInformation } from "@/components/contact/office-information"
import { PartnershipOpportunities } from "@/components/contact/partnership-opportunities"
import { NextSteps } from "@/components/contact/next-steps"
import { FAQSection } from "@/components/contact/faq-section"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FreeConsultationDetails />
      <ConsultationProcess />
      <ContactMethods />
      <FAQSection />
      <PartnershipOpportunities />
      <NextSteps />
    </main>
  )
}
