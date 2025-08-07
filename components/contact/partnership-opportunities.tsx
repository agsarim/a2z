import { Users, GraduationCap, Rss } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function PartnershipOpportunities() {
  const cards = [
    {
      icon: Users,
      title: "For Industry Professionals",
      items: [
        "Publishing providers — referral partnerships",
        "Literary agents — co-create client strategy",
        "Book coaches — joint programs",
        "Speaking bureaus — conference talks",
      ],
    },
    {
      icon: GraduationCap,
      title: "For Educational Institutions",
      items: [
        "Guest lectures & curriculum design",
        "On-campus workshops",
        "Research collaboration",
        "Internship programs",
      ],
    },
    {
      icon: Rss,
      title: "For Media & Creators",
      items: [
        "Podcast interviews",
        "Guest writing",
        "Joint ventures",
        "Affiliate programs",
      ],
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Partnerships & collaboration</h2>
          <p className="mt-2 text-slate-600">Let’s amplify impact together.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => (
            <Card key={i} className="p-6">
              <CardHeader className="pb-3 flex items-center gap-3">
                <c.icon className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-lg font-bold text-slate-900">{c.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 text-slate-700 space-y-1">
                  {c.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
