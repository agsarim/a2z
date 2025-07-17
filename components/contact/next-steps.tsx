import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Users, Download, BookOpen, Lightbulb, MessageSquare } from "lucide-react"

export function NextSteps() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Ready to Get Started?
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Take the next step towards transforming your book into a bestselling business asset.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* For Immediate Action */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For Immediate Action:</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <Calendar className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Schedule Your Free Consultation</h4>
                <p className="text-sm text-gray-700 mb-4">Book your strategy session using the calendar below.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="#hero-section-form">Book Now</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <Mail className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Join Our Email List</h4>
                <p className="text-sm text-gray-700 mb-4">Receive weekly marketing tips and industry insights.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="#">Subscribe</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <Users className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Follow on Social Media</h4>
                <p className="text-sm text-gray-700 mb-4">Stay updated with latest strategies and success stories.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="#">Follow Us</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <Download className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Download Free Resources</h4>
                <p className="text-sm text-gray-700 mb-4">Access our library of templates and guides.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="#">Get Resources</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* For More Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">For More Information:</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <BookOpen className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Browse Success Stories</h4>
                <p className="text-sm text-gray-700 mb-4">Read detailed case studies of client achievements.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/success-stories">View Stories</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <Lightbulb className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Explore Training Options</h4>
                <p className="text-sm text-gray-700 mb-4">Review our comprehensive education programs.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/training">Learn More</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <MessageSquare className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Read Client Testimonials</h4>
                <p className="text-sm text-gray-700 mb-4">Hear directly from authors we've helped succeed.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/success-stories#testimonials">Read Testimonials</Link>
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm border border-gray-200">
                <BookOpen className="h-10 w-10 text-purple-600 mb-3" />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Check Out Blog Content</h4>
                <p className="text-sm text-gray-700 mb-4">Access hundreds of free marketing articles and guides.</p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="#">Read Blog</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
