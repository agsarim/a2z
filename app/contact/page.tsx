import { HeroSection } from "@/components/contact/hero-section"
import { FreeConsultationDetails } from "@/components/contact/free-consultation-details" // New import
import { ConsultationProcess } from "@/components/contact/consultation-process"
import { ContactMethods } from "@/components/contact/contact-methods"
import { OfficeInformation } from "@/components/contact/office-information"
import { FAQSection } from "@/components/contact/faq-section"
import { PartnershipOpportunities } from "@/components/contact/partnership-opportunities"
import { NextSteps } from "@/components/contact/next-steps"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <HeroSection />
        <FreeConsultationDetails /> {/* New component */}
        <ConsultationProcess />
        <ContactMethods />
        <OfficeInformation />
        <FAQSection />
        <PartnershipOpportunities />
        <NextSteps />
      </main>
    </div>
  )
}
