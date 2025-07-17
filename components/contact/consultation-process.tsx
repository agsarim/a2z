import { CheckCircle, Calendar, Mail, Users, Lightbulb } from "lucide-react"

export function ConsultationProcess() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Consultation Booking Process
            </h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Follow these simple steps to schedule your free strategy session.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-10 py-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="grid gap-3 text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-14 w-14 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Step 1</h3>
            <p className="text-base font-semibold text-gray-700">Complete Pre-Consultation Form</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Provide basic information about your book, current marketing efforts, and goals so we can prepare a more
              valuable consultation experience.
            </p>
          </div>
          <div className="grid gap-3 text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="h-14 w-14 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Step 2</h3>
            <p className="text-base font-semibold text-gray-700">Schedule Your Preferred Time</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Choose from available time slots that work with your schedule. We accommodate different time zones and
              offer evening appointments when needed.
            </p>
          </div>
          <div className="grid gap-3 text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <Mail className="h-14 w-14 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Step 3</h3>
            <p className="text-base font-semibold text-gray-700">Receive Confirmation & Preparation Materials</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Get calendar invitation with Zoom link and preparation materials to help you maximize the consultation
              value.
            </p>
          </div>
          <div className="grid gap-3 text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <Users className="h-14 w-14 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Step 4</h3>
            <p className="text-base font-semibold text-gray-700">Attend Your Strategy Session</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Participate in focused, valuable discussion that provides immediate insights and actionable
              recommendations.
            </p>
          </div>
          <div className="grid gap-3 text-center p-4 bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center justify-center mb-4">
              <Lightbulb className="h-14 w-14 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold">Step 5</h3>
            <p className="text-base font-semibold text-gray-700">Implement Recommendations</p>
            <p className="text-sm text-gray-500 leading-relaxed">
              Begin implementing suggested strategies with optional follow-up support and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
