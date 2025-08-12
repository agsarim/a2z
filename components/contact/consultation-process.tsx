import { CheckCircle, Calendar, Mail, Users, Lightbulb } from "lucide-react"

export function ConsultationProcess() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Submit Form",
      desc: "Share your book details and goals",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      desc: "Pick a time that works for you",
    },
    {
      icon: Mail,
      title: "Preparation",
      desc: "Receive agenda and prep materials",
    },
    {
      icon: Users,
      title: "Strategy Session",
      desc: "60-minute focused consultation",
    },
    {
      icon: Lightbulb,
      title: "Action Plan",
      desc: "Get your custom roadmap",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">How It Works</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Five simple steps to get your personalized book marketing strategy
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {index + 1}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-sm text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
