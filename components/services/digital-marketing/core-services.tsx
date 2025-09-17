"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Target, Share2, CheckCircle } from "lucide-react"

const services = [
  {
    id: "ai-content",
    title: "AI-Assisted Content Creation & Optimization",
    icon: Bot,
    tagline: "Launch copy that sounds like you and ships on schedule.",
    overview:
      "We combine thoughtful AI prompts, editorial QA, and automation to deliver publish-ready assets across every channel without the busywork.",
    included: [
      "Structured prompts for ChatGPT and Gemini that lock in your brand voice",
      "AI-assisted visuals via MidJourney plus curated design templates",
      "SEO playbooks with keyword maps and on-page optimization",
      "Automated editorial calendar populated with ready-to-post deliverables",
    ],
    results: [
      "3x faster content production without sacrificing quality",
      "150% lift in social engagement inside 60 days",
      "200% improvement in organic visibility",
      "Several hours reclaimed every single week",
    ],
  },
  {
    id: "amazon-ppc",
    title: "Amazon PPC Management & Optimization",
    icon: Target,
    tagline: "Turn ad spend into predictable bestseller momentum.",
    overview:
      "We engineer Amazon PPC structures that surface your titles, defend rankings, and scale profitably with total clarity on what to do next.",
    included: [
      "Deep keyword intelligence with ongoing competitor mirroring",
      "Campaign architecture tuned for discovery, defense, and scaling",
      "Automated bid management with human overrides on high-value terms",
      "Weekly analytics recaps complete with action steps",
    ],
    results: [
      "$1M+ revenue driven for independent authors",
      "40-60% ACOS improvement within the first 90 days",
      "Title rankings that hold steady against aggressive competitors",
    ],
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Digital Marketing",
    icon: Share2,
    tagline: "Build an audience that stretches far beyond Amazon.",
    overview:
      "We orchestrate full-funnel campaigns across paid, organic, and community channels so eager readers can meet you everywhere they spend time.",
    included: [
      "Google search and display funnels that capture intent at every stage",
      "Paid social blueprints for Facebook, Instagram, and TikTok",
      "LinkedIn positioning that amplifies authority and B2B reach",
      "YouTube editorial calendars with repurposing systems",
      "Short-form video frameworks engineered for consistent virality",
    ],
    results: [
      "Stronger brand recall across every major platform",
      "Multiple revenue streams beyond Amazon royalties",
      "Communities that convert with higher lifetime value",
      "Authority positioning that sparks media and speaking invites",
    ],
  },
]

export function CoreDigitalMarketingServices() {
  return (
    <section className="bg-gradient-to-b from-slate-50 via-white to-white py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-4 py-2 text-sm font-medium text-blue-700">
            <Bot className="h-4 w-4" />
            Our Core Services
          </div>
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Your Engine for
            <span className="text-blue-600"> Digital Dominance</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 lg:text-xl">
            Explore the three signature programs we lean on most. Each card lays out the promise, the hands-on deliverables, and the outcomes you can bank on.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {services.map((service, index) => {
            const deliverablesHeading =
              service.id === "ai-content"
                ? "What We Deliver"
                : service.id === "amazon-ppc"
                  ? "How We Manage"
                  : "Where We Show Up"
            const resultsHeading = service.id === "ai-content" ? "Impact You'll Feel" : "Results You'll See"
            const [headlineResult, ...supportingResults] = service.results

            return (
              <motion.article
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="h-full"
              >
                <Card className="flex h-full flex-col border border-slate-200/60 bg-white/90 shadow-lg shadow-slate-900/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-2xl">
                  <CardContent className="flex h-full flex-col gap-10 p-8">
                    <header className="space-y-5">
                      <div className="flex items-start gap-4">
                        <span className="rounded-lg border border-blue-200/60 bg-gradient-to-br from-blue-100 to-blue-50 p-3 text-blue-600">
                          <service.icon className="h-6 w-6" aria-hidden="true" />
                        </span>
                        <div className="space-y-3 text-left">
                          
                          <h3 className="text-xl font-semibold text-slate-900 lg:text-2xl">{service.title}</h3>
                          <p className="text-sm leading-relaxed text-slate-600 lg:text-base">{service.overview}</p>
                        </div>
                      </div>
                    </header>

                    <div className="space-y-8">
                      <section aria-labelledby={`${service.id}-deliverables`} className="space-y-4">
                        <h4 id={`${service.id}-deliverables`} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                          {deliverablesHeading}
                        </h4>
                        <ul className="space-y-3 text-sm text-slate-700">
                          {service.included.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-3 rounded-lg bg-white/70 p-3 shadow-sm ring-1 ring-slate-200"
                            >
                              <span className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                                <CheckCircle className="h-4 w-4" aria-hidden="true" />
                              </span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </section>

                      <section aria-labelledby={`${service.id}-results`} className="space-y-4">
                        <h4 id={`${service.id}-results`} className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                          {resultsHeading}
                        </h4>
                        <div className="rounded-lg border border-blue-100 bg-blue-50/70 p-4 text-left text-sm text-blue-900 shadow-inner">
                          <p className="font-semibold leading-snug">{headlineResult}</p>
                        </div>
                        {supportingResults.length > 0 && (
                          <ul className="space-y-2 text-sm text-slate-700">
                            {supportingResults.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                className="flex items-start gap-3 rounded-md border border-blue-100/70 bg-white/80 p-3"
                              >
                                <span className="mt-1 rounded-full bg-blue-100 p-1 text-blue-700">
                                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                                </span>
                                <span className="font-medium leading-snug">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
              </section>
                    </div>
                  </CardContent>
                </Card>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
