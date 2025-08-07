import { Mail, Phone, MessageCircle, Linkedin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function ContactMethods() {
  const methods = [
    {
      icon: Mail,
      title: "Email",
      value: "saqib@a2zpublishing.com",
      meta: "Within 24h on business days",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+92-XXX-XXXXXXX",
      meta: "Mon–Fri, 9 AM–6 PM PKT",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "+92-XXX-XXXXXXX",
      meta: "Quick questions, 24/7",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/syed-saqib-mumtaz-hashmi-bookmarketing",
      meta: "Networking and referrals",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Primary contact methods</h2>
          <p className="mt-2 text-slate-600">Choose the channel that works best for you.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m, i) => (
            <Card key={i} className="text-center">
              <CardHeader className="pb-2 flex items-center justify-center">
                <m.icon className="h-10 w-10 text-blue-600" />
                <CardTitle className="text-lg font-bold text-slate-900 mt-3">{m.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-1 text-slate-700">
                <p className="font-medium break-words">{m.value}</p>
                <p className="text-xs text-slate-500">{m.meta}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
