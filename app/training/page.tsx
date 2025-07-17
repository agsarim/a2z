import { HeroSection } from "@/components/training/hero-section"
import { TrainingPrograms } from "@/components/training/training-programs"
import { WorkshopCalendar } from "@/components/training/workshop-calendar"
import { LearningOutcomes } from "@/components/training/learning-outcomes"
import { StudentSuccess } from "@/components/training/student-success"
import { CertificationPrograms } from "@/components/training/certification-programs"
import { CorporateTraining } from "@/components/training/corporate-training"
import { ConsultationMentorship } from "@/components/training/consultation-mentorship"
import { SpeakingEngagements } from "@/components/training/speaking-engagements"
import { CtaSection } from "@/components/services/digital-marketing/cta-section"

export default function TrainingPage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrainingPrograms />
      <WorkshopCalendar />
      <LearningOutcomes />
      <StudentSuccess />
      <CertificationPrograms />
      <CorporateTraining />
      <ConsultationMentorship />
      <SpeakingEngagements />
      <CtaSection />
    </main>
  )
}
