"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { AppleIcon as Amazon, Facebook, Mail, CheckCircle, TrendingUp } from "lucide-react"
import type { LucideIcon } from "lucide-react"

// Define a type for nested list items
type NestedListItem = string | { heading: string; points: string[] }

type Strategy = {
  id: string
  title: string
  icon: LucideIcon
  tagline: string
  overview: string
  headline: string
  subSections: Array<{
    title: string
    description?: string
    items: NestedListItem[]
  }>
}

const marketingStrategies: Strategy[] = [
  {
    id: "amazon-mastery",
    title: "Amazon Ecosystem Mastery",
    icon: Amazon,
    tagline: "Keep the A10 algorithm working in your favor.",
    overview:
      "We orchestrate every Amazon lever: keywords, creatives, and PPC so your titles stay discoverable and profitable while the algorithm warms up to your catalog.",
    headline: "45% average ACOS improvement and compounding organic rank gains within 90 days.",
    subSections: [
      {
        title: "A10 Algorithm Playbook",
        items: [
          "Weekly keyword maps that mirror the exact language readers are using right now.",
          "Smart category placement so your books win and hold meaningful bestseller badges.",
          "Review flows that grow genuine social proof without grey-area tactics.",
        ],
      },
      {
        title: "PPC Architecture That Scales",
        description: "Structured campaigns make it obvious what to dial up, pause, or test next.",
        items: [
          {
            heading: "Sponsored Products",
            points: [
              "Always-on auto campaigns to surface fresh demand pockets.",
              "Exact and phrase ad groups engineered for profitable scaling.",
              "Broad match exploration to uncover high-intent long-tail terms.",
            ],
          },
          {
            heading: "Sponsored Brands & Display",
            points: [
              "Headline units that reinforce your brand across the entire backlist.",
              "Defensive targeting that keeps competitors off your product pages.",
              "Remarketing sequences that rescue warm shoppers before they drift.",
            ],
          },
          "Performance scorecards tracking 50+ signals so optimizations never stall.",
        ],
      },
      {
        title: "Growth Rituals",
        items: [
          "Weekly readouts with the next three moves mapped out for your team.",
          "Listing creative refreshes tied to seasonality, reviews, and new formats.",
        ],
      },
    ],
  },
  {
    id: "multi-platform",
    title: "Multi-Platform Marketing Integration",
    icon: Facebook,
    tagline: "Meet readers where they scroll, listen, and learn.",
    overview:
      "Your audience doesn't live in one feed. We keep visibility high across social, video, and partnerships while pointing the momentum back to your books.",
    headline: "3-5x channel reach growth while funneling demand back to Amazon.",
    subSections: [
      {
        title: "Social Fuel",
        items: [
          {
            heading: "Instagram & Facebook",
            points: [
              "Narrative-driven content pillars that humanize your author brand.",
              "Paid segments tuned for reader interests, lookalikes, and funnel stage.",
              "Launch sprints that blend organic excitement with perfectly timed ads.",
            ],
          },
          {
            heading: "LinkedIn Authority",
            points: [
              "Thought leadership cadence that sparks podcast and media invites.",
              "Connection playbooks for partnerships, events, and bulk sales.",
              "Newsletter and article templates that keep your voice consistent.",
            ],
          },
        ],
      },
      {
        title: "Video & Community Flywheel",
        items: [
          {
            heading: "YouTube + Podcasts",
            points: [
              "Evergreen explainers that stack SEO value over time.",
              "Interview swaps that grow audiences on both sides.",
              "Repurposing systems that turn one recording into weeks of content.",
            ],
          },
          {
            heading: "TikTok & Reels",
            points: [
              "Short-form hooks designed for discoverability without feeling salesy.",
              "Trend adaption frameworks so you can act fast without starting from scratch.",
              "Community prompts that spark comment threads and saves.",
            ],
          },
        ],
      },
      {
        title: "Partnership Engine",
        items: [
          "Influencer and micro-affiliate outreach sequences with clear deliverables.",
          "Cross-promotions with authors, podcasts, and newsletters in your niche.",
          "Analytics that show which channels and collaborators move the sales needle.",
        ],
      },
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Reader Relationship Building",
    icon: Mail,
    tagline: "Build a direct line to readers that you own.",
    overview:
      "Email remains the highest ROI channel for authors. We build segments, automations, and copy that feel personal while still scalable.",
    headline: "Subscribers convert 3x higher than cold traffic and keep buying future launches.",
    subSections: [
      {
        title: "List Growth Foundations",
        description: "Give readers a compelling reason to join and stay.",
        items: [
          {
            heading: "Lead Magnets & Incentives",
            points: [
              "Sample chapters, checklists, and bonus lessons tailored to each audience segment.",
              "Exclusive Q&As, workshops, or office hours for loyal subscribers.",
              "Launch waitlists that create urgency and capture intent early.",
            ],
          },
        ],
      },
      {
        title: "Lifecycle Campaigns",
        items: [
          "Five-email welcome journeys that introduce your world and prime the first purchase.",
          "Launch sequences timed to pre-order, release week, and post-launch tailwinds.",
          "Evergreen nurture themes that mix storytelling, value, and subtle offers.",
          "Promo bursts with smart scarcity that never overwhelm your list.",
        ],
      },
      {
        title: "Automation & Segmentation",
        items: [
          "Behavior-based tagging that reacts to opens, clicks, and purchase signals.",
          "Automations that deliver the right resource the moment a reader needs it.",
          "Reporting dashboards that tie campaign performance directly to sales.",
        ],
      },
    ],
  },
]

export function MarketingStrategies() {
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
            <TrendingUp className="h-4 w-4" />
            Comprehensive Strategies
          </div>
          <h2 className="text-4xl font-bold text-slate-900 lg:text-5xl">
            Proven Marketing Frameworks for
            <span className="text-blue-600"> Bestseller Success</span>
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600 lg:text-xl">
            Every playbook is built to be skimmed quickly and executed with confidence, from Amazon dominance to multi-channel visibility and reader retention.
          </p>
        </motion.div>

        <motion.div
          className="mx-auto flex max-w-6xl flex-col gap-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.12,
              },
            },
          }}
        >
          {marketingStrategies.map((strategy, index) => {
            const sectionNumber = String(index + 1).padStart(2, "0")

            return (
              <motion.article
                key={strategy.id}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.55, delay: index * 0.05 }}
                className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white/95 shadow-xl shadow-slate-900/5"
              >
                <div className="h-1 w-full bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" aria-hidden="true" />
                <Card className="border-0 bg-transparent">
                  <CardContent className="flex flex-col gap-10 p-8 lg:p-12">
                    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] lg:items-start lg:gap-12">
                      <header className="space-y-6">
                        <div className="flex items-start gap-4">
                          <span className="rounded-2xl border border-blue-200/60 bg-blue-50 p-4 text-blue-600">
                            <strategy.icon className="h-8 w-8" aria-hidden="true" />
                          </span>
                          <div className="space-y-3 text-left">
                            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100/80 px-3 py-1 text-sm font-semibold text-blue-700">
                              {sectionNumber}
                              <span className="text-blue-600/80">{strategy.tagline}</span>
                            </span>
                            <h3 className="text-2xl font-bold text-slate-900 lg:text-3xl">{strategy.title}</h3>
                            <p className="text-sm leading-relaxed text-slate-600 lg:text-base">{strategy.overview}</p>
                          </div>
                        </div>
                        <div className="rounded-2xl border border-blue-100 bg-blue-50/80 p-5 text-sm font-semibold text-blue-800 shadow-inner">
                          {strategy.headline}
                        </div>
                      </header>

                      <div className="space-y-8">
                        {strategy.subSections.map((sub, subIndex) => (
                          <section
                            key={`${strategy.id}-${subIndex}`}
                            className="rounded-2xl border border-slate-200/70 bg-slate-50/70 p-6 shadow-sm"
                          >
                            <h4 className="text-lg font-semibold text-slate-900 lg:text-xl">{sub.title}</h4>
                            {sub.description && (
                              <p className="mt-3 text-sm leading-relaxed text-slate-600 lg:text-base">{sub.description}</p>
                            )}

                            <div className="mt-5 space-y-4">
                              {sub.items.map((item, itemIndex) => (
                                <div key={itemIndex} className="rounded-xl bg-white/90 p-4 ring-1 ring-slate-200/70">
                                  {typeof item === "string" ? (
                                    <div className="flex items-start gap-3 text-sm text-slate-700 lg:text-base">
                                      <span className="mt-1 rounded-full bg-green-100 p-1 text-green-600">
                                        <CheckCircle className="h-4 w-4" aria-hidden="true" />
                                      </span>
                                      <span className="leading-relaxed">{item}</span>
                                    </div>
                                  ) : (
                                    <div className="space-y-3 text-sm text-slate-700 lg:text-base">
                                      <p className="font-semibold text-slate-800">{item.heading}</p>
                                      <ul className="space-y-2">
                                        {item.points.map((point, pointIndex) => (
                                          <li key={pointIndex} className="flex items-start gap-3">
                                            <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-blue-500" aria-hidden="true" />
                                            <span className="leading-relaxed">{point}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </section>
                        ))}
                      </div>
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
