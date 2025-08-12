"use client"

import { motion } from "framer-motion"
import { Building, GraduationCap, Rocket, TrendingUp } from "lucide-react"

const timelineEvents = [
  {
    period: "2002-2022",
    title: "Technical Foundation",
    subtitle: "IT and Telecom Systems Specialist",
    icon: Building,
    color: "bg-blue-500",
    description:
      "Led major infrastructure projects across government and private sectors, developing expertise in digital transformation and system optimization that would later revolutionize book marketing approaches.",
    achievements: [
      "Led major infrastructure projects across government and private sectors",
      "Developed expertise in digital transformation and system optimization",
      "Built analytical skills that would later revolutionize book marketing approaches",
    ],
  },
  
   
  {
    period: "2022-Present",
    title: "A2ZPublishing Founder & CEO",
    subtitle: "Democratizing Bestseller Success",
    icon: Rocket,
    color: "bg-purple-500",
    description:
      "Founded A2ZPublishing to help authors achieve marketplace success through proprietary AI-assisted marketing methodologies.",
    achievements: [
      "Founded A2ZPublishing to help authors achieve marketplace success",
      "Developed proprietary AI-assisted marketing methodologies",
      "Created systems that have generated over $1 million in client revenue",
    ],
  },
  {
    period: "2025-Present",
    title: "Senior Digital Marketing Consultant",
    subtitle: "Elysian Innovations",
    icon: TrendingUp,
    color: "bg-orange-500",
    description:
      "Leading Digital Marketing Division for enterprise clients, implementing AI-powered marketing solutions across industries.",
    achievements: [
      "Leading Digital Marketing Division for enterprise clients",
      "Implementing AI-powered marketing solutions across industries",
      "Expanding proven book marketing strategies to broader business applications",
    ],
  },
]

export function JourneyTimeline() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Professional Journey
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          Two Decades Focused on 
            <span className="text-purple-600"> Driving Your Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          From building large-scale digital systems to mastering AI-powered marketing, my journey has been about one thing—developing the skills and strategies that help authors and brands launch faster, grow bigger, and win consistently.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-slate-300 hidden lg:block"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-16 h-16 ${event.color} rounded-full flex items-center justify-center text-white shadow-lg`}
                    >
                      <event.icon className="w-8 h-8" />
                    </div>
                    {/* Timeline dot connector */}
                    <div className="absolute top-8 left-8 w-0.5 h-12 bg-slate-300 hidden lg:block"></div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                    <div className="space-y-6">
                      {/* Header */}
                      <div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-3">
                          <span className="text-sm font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                            {event.period}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{event.title}</h3>
                        <p className="text-lg font-medium text-blue-600 mb-4">{event.subtitle}</p>
                        <p className="text-slate-600 leading-relaxed">{event.description}</p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-slate-900">Key Achievements:</h4>
                        <div className="space-y-2">
                          {event.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-slate-600">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
