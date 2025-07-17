import { MapPin, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OfficeInformation() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Office Information & Service Inquiry Process
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Learn about our global reach and how we streamline our service processes.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* Left side: Office Info & Map */}
          <div className="space-y-8">
            <Card className="p-6 shadow-lg border border-gray-200">
              <CardHeader className="pb-4">
                <MapPin className="h-10 w-10 text-purple-600 mb-3" />
                <CardTitle className="text-2xl font-bold text-gray-900">A2ZPublishing Headquarters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p className="text-lg font-medium">Islamabad, Pakistan</p>
                <div className="h-64 w-full rounded-md bg-gray-300 flex items-center justify-center text-gray-600 text-center p-4">
                  {"{ Embedded map integration with location details }"}
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Globe className="h-5 w-5" />
                  <p className="text-base font-semibold">Serving Clients Globally:</p>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm text-gray-600">
                  <li>North America: 40% of client base</li>
                  <li>Europe: 25% of client base</li>
                  <li>Asia-Pacific: 20% of client base</li>
                  <li>Other Regions: 15% of client base</li>
                </ul>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Time Zone Accommodation:</span> We regularly work with clients across
                  multiple time zones and offer flexible scheduling to accommodate international partnerships.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right side: Service Inquiry Processes */}
          <div className="space-y-8">
            <Card className="p-6 shadow-lg border border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">For Marketing Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <ul className="list-disc pl-6 space-y-1 text-base">
                  <li>
                    <span className="font-semibold">Initial Consultation:</span> Free 60-minute strategy session
                  </li>
                  <li>
                    <span className="font-semibold">Proposal Development:</span> Custom proposal within 48 hours
                  </li>
                  <li>
                    <span className="font-semibold">Contract & Onboarding:</span> Streamlined process with clear
                    expectations
                  </li>
                  <li>
                    <span className="font-semibold">Campaign Launch:</span> Typically within 1-2 weeks of contract
                    signing
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg border border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">For Publishing Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <ul className="list-disc pl-6 space-y-1 text-base">
                  <li>
                    <span className="font-semibold">Manuscript Review:</span> Initial assessment within 3-5 business
                    days
                  </li>
                  <li>
                    <span className="font-semibold">Service Recommendation:</span> Customized package suggestion based
                    on goals
                  </li>
                  <li>
                    <span className="font-semibold">Timeline Planning:</span> Clear project timeline with milestone
                    dates
                  </li>
                  <li>
                    <span className="font-semibold">Project Kickoff:</span> Immediate start upon contract execution
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg border border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900">For Training & Workshops</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-gray-700">
                <ul className="list-disc pl-6 space-y-1 text-base">
                  <li>
                    <span className="font-semibold">Program Information:</span> Detailed curriculum and schedule
                    information
                  </li>
                  <li>
                    <span className="font-semibold">Enrollment Process:</span> Simple online registration with immediate
                    access
                  </li>
                  <li>
                    <span className="font-semibold">Pre-Program Preparation:</span> Materials and setup instructions
                    provided
                  </li>
                  <li>
                    <span className="font-semibold">Ongoing Support:</span> Community access and continued guidance
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
