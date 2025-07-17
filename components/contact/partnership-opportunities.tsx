import { Users, GraduationCap, Rss } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PartnershipOpportunities() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Partnership & Collaboration Opportunities
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We believe in the power of collaboration to amplify impact.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-1 lg:grid-cols-3">
          <Card className="p-6 shadow-lg border border-gray-200">
            <CardHeader className="pb-4">
              <Users className="h-10 w-10 text-purple-600 mb-3" />
              <CardTitle className="text-2xl font-bold text-gray-900">For Industry Professionals</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>
                  <span className="font-semibold">Publishing Service Providers:</span> Referral partnerships for
                  complementary services
                </li>
                <li>
                  <span className="font-semibold">Literary Agents:</span> Collaboration on client marketing strategies
                </li>
                <li>
                  <span className="font-semibold">Book Coaches:</span> Joint programs combining writing and marketing
                  expertise
                </li>
                <li>
                  <span className="font-semibold">Speaking Bureaus:</span> Partnership opportunities for conference
                  presentations
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg border border-gray-200">
            <CardHeader className="pb-4">
              <GraduationCap className="h-10 w-10 text-purple-600 mb-3" />
              <CardTitle className="text-2xl font-bold text-gray-900">For Educational Institutions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>
                  <span className="font-semibold">University Partnerships:</span> Guest lectures and curriculum
                  development
                </li>
                <li>
                  <span className="font-semibold">Workshop Hosting:</span> On-campus training programs for students and
                  faculty
                </li>
                <li>
                  <span className="font-semibold">Research Collaboration:</span> Joint studies on digital marketing
                  effectiveness
                </li>
                <li>
                  <span className="font-semibold">Internship Programs:</span> Opportunities for students to gain
                  practical experience
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 shadow-lg border border-gray-200">
            <CardHeader className="pb-4">
              <Rss className="h-10 w-10 text-purple-600 mb-3" />
              <CardTitle className="text-2xl font-bold text-gray-900">For Media & Content Creators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-gray-700">
              <ul className="list-disc pl-6 space-y-1 text-base">
                <li>
                  <span className="font-semibold">Podcast Appearances:</span> Expert interviews on book marketing and AI
                  strategies
                </li>
                <li>
                  <span className="font-semibold">Guest Writing:</span> Articles and content for industry publications
                </li>
                <li>
                  <span className="font-semibold">Joint Ventures:</span> Collaborative content creation and
                  cross-promotion
                </li>
                <li>
                  <span className="font-semibold">Affiliate Programs:</span> Revenue sharing for referrals and
                  partnerships
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
