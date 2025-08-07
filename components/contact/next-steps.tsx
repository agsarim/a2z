import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, Users, Download, BookOpen, Lightbulb, MessageSquare } from "lucide-react"

export function NextSteps() {
  const primary = [
    {
      icon: Calendar,
      title: "Schedule your consultation",
      desc: "Book your strategy session now.",
      href: "#hero-section-form",
      cta: "Book now",
    },
    {
      icon: Mail,
      title: "Join the newsletter",
      desc: "Weekly tips and insights.",
      href: "#",
      cta: "Subscribe",
    },
  ]

  const more = [
    { icon: BookOpen, title: "Browse success stories", desc: "See detailed case studies.", href: "/success-stories", cta: "View stories" },
    { icon: Lightbulb, title: "Explore training", desc: "Programs and workshops.", href: "/training", cta: "Learn more" },
    { icon: MessageSquare, title: "Read testimonials", desc: "Hear from clients.", href: "/success-stories#testimonials", cta: "Read" },
    { icon: Download, title: "Free resources", desc: "Templates and guides.", href: "#", cta: "Get resources" },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Ready to get started?</h2>
          <p className="mt-2 text-slate-600">Pick the next step that fits where you are.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">For immediate action</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {primary.map((c, i) => (
                <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <c.icon className="h-10 w-10 text-blue-600 mb-3 mx-auto" />
                  <h4 className="text-lg font-semibold text-slate-900">{c.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{c.desc}</p>
                  <Button asChild variant="outline" className="bg-white">
                    <Link href={c.href}>{c.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">For more information</h3>
            <div className="grid gap-6 sm:grid-cols-2">
              {more.map((c, i) => (
                <div key={i} className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <c.icon className="h-10 w-10 text-blue-600 mb-3 mx-auto" />
                  <h4 className="text-lg font-semibold text-slate-900">{c.title}</h4>
                  <p className="text-sm text-slate-600 mb-4">{c.desc}</p>
                  <Button asChild variant="outline" className="bg-white">
                    <Link href={c.href}>{c.cta}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
