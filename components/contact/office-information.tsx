import { MapPin, Globe } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function OfficeInformation() {
  const processBlocks = [
    {
      title: "For Marketing Services",
      items: [
        "Free 60-minute strategy session",
        "Custom proposal within 48 hours",
        "Streamlined onboarding",
        "Launch in 1–2 weeks",
      ],
    },
    {
      title: "For Publishing Services",
      items: [
        "Manuscript review (3–5 days)",
        "Package recommendation",
        "Timeline planning with milestones",
        "Immediate kickoff on contract",
      ],
    },
    {
      title: "For Training & Workshops",
      items: [
        "Detailed curriculum and schedule",
        "Simple online enrollment",
        "Pre-program materials provided",
        "Community & support",
      ],
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Office & processes</h2>
          <p className="mt-2 text-slate-600">Global reach with simple, transparent steps.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Map/info */}
          <Card className="p-6">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3">
                <MapPin className="h-8 w-8 text-blue-600" />
                <CardTitle className="text-xl font-bold text-slate-900">A2ZPublishing HQ — Islamabad, Pakistan</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-700">
              <div className="h-64 w-full rounded-md bg-slate-200 flex items-center justify-center text-slate-600 text-center p-4">
                Map integration here
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Globe className="h-5 w-5" />
                <span className="font-semibold">Serving clients worldwide</span>
              </div>
              <ul className="list-disc pl-6 text-sm space-y-1 text-slate-600">
                <li>North America ~40%</li>
                <li>Europe ~25%</li>
                <li>Asia-Pacific ~20%</li>
                <li>Other regions ~15%</li>
              </ul>
              <p className="text-sm">Flexible scheduling for international time zones.</p>
            </CardContent>
          </Card>

          {/* Processes */}
          <div className="grid gap-6">
            {processBlocks.map((block) => (
              <Card key={block.title} className="p-6">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl font-bold text-slate-900">{block.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 text-slate-700 space-y-1">
                    {block.items.map((it) => (
                      <li key={it}>{it}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
