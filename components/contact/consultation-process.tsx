import { CheckCircle, Calendar, Mail, Users, Lightbulb } from "lucide-react"

export function ConsultationProcess() {
  const steps = [
    { icon: CheckCircle, title: "Complete the form", desc: "Share goals, book details, and current efforts." },
    { icon: Calendar, title: "Pick a time", desc: "Choose a slot that fits your time zone." },
    { icon: Mail, title: "Get pre-read", desc: "Receive the invite and prep materials." },
    { icon: Users, title: "Strategy session", desc: "60-minute focused conversation." },
    { icon: Lightbulb, title: "Implement plan", desc: "Start with prioritized next steps." },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">How booking works</h2>
          <p className="mt-2 text-slate-600">Five simple steps to your free strategy session.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((s, i) => (
            <div key={i} className="p-5 rounded-xl border border-slate-200 bg-slate-50">
              <div className="flex items-center justify-center mb-3">
                <s.icon className="w-10 h-10 text-blue-600" />
              </div>
              <div className="text-center">
                <div className="text-base font-semibold text-slate-900">Step {i + 1}</div>
                <div className="text-sm font-medium text-slate-800 mt-1">{s.title}</div>
                <div className="text-xs text-slate-600 mt-1">{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
