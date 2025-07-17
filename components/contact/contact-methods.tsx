import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactMethods() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Primary Contact Methods
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Reach out to us through your preferred channel.
          </p>
        </div>
        <div className="mx-auto grid max-w-6xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <Mail className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-bold text-gray-900">Email</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p className="font-medium">saqib@a2zpublishing.com</p>
              <p className="text-sm">
                <span className="font-semibold">Response Time:</span> Within 24 hours during business days
              </p>
              <p className="text-sm">
                <span className="font-semibold">Best For:</span> Detailed questions, project inquiries, partnership
                discussions
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <Phone className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-bold text-gray-900">Phone</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p className="font-medium">+92-XXX-XXXXXXX (Pakistan Time Zone)</p>
              <p className="text-sm">
                <span className="font-semibold">Available:</span> Monday-Friday, 9 AM - 6 PM PKT
              </p>
              <p className="text-sm">
                <span className="font-semibold">Best For:</span> Urgent questions, consultation scheduling, immediate
                support
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <MessageCircle className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-bold text-gray-900">WhatsApp</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p className="font-medium">+92-XXX-XXXXXXX</p>
              <p className="text-sm">
                <span className="font-semibold">Available:</span> 24/7 for quick questions
              </p>
              <p className="text-sm">
                <span className="font-semibold">Best For:</span> Quick questions, file sharing, international
                communication
              </p>
            </CardContent>
          </Card>
          <Card className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <Linkedin className="h-12 w-12 text-purple-600 mb-4" />
              <CardTitle className="text-xl font-bold text-gray-900">LinkedIn</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-gray-700">
              <p className="font-medium">linkedin.com/in/syed-saqib-mumtaz-hashmi-bookmarketing</p>
              <p className="text-sm">
                <span className="font-semibold">Best For:</span> Professional networking, industry discussions,
                referrals
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
