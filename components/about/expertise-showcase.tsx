"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Target, BarChart3, Zap, Shield, Globe } from "lucide-react"

const expertiseAreas = [
  {
    icon: Brain,
    title: "Smarter, AI-Assisted Marketing",
    description:
      "By leveraging tools like ChatGPT, MAUNS, Gemini, and MidJourney, Saqib ensures faster, more effective, campaign optimization, and visual branding.",
    skills: [
      "Personal Branding & Thought Leadership (LinkedIn, Websites)",
      "Content Calender Generation & Visual Design",
      "Campaign Automation & Performance Analysis",
    ],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Target,
    title: "PPC & Growth Strategies That Deliver",
    description:
      "From Amazon PPC ads that create bestsellers to Google, LinkedIn, and Facebook campaigns that drive qualified leads, Saqib specializes in maximizing ROI and minimizing wasted spend.",
    skills: [
      "PPC Management (Amazon, Google, LinkedIn, Facebook)",
      "SEO Optimization & Keyword Research for Books",
      "Category Strategy & Positioning",
      "Lead Generation Funnels & Email Marketing",
    ],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & ROI",
    description: "Performance tracking, market research, and data-driven decision making to ensure every campaign delivers measurable results.",
    skills: ["Analytics Setup", "Performance Tracking", "ROI Optimization", "Market Research"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Cross-Platform Marketing",
    description: "Integrated marketing campaigns across Amazon, Google, LinkedIn, Facebook, and email to maximize visibility and lead generation.",
    skills: ["Social Media Strategy", "Email Marketing", "Content Distribution", "Brand Building"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Zap,
    title: "Technical Innovation",
    description: "A strong technical background applied to modern marketing — using automation, system integration, and innovative strategies to scale results.",
    skills: ["System Integration", "Automation", "Technical Strategy", "Innovation"],
    color: "from-yellow-500 to-amber-500",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
]

export function ExpertiseShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Core Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Solving <span className="text-blue-600">Marketing & Branding Challenges</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Authors, entrepreneurs, and professionals often face the same struggle — getting noticed, standing out in
            competitive markets, and turning clicks into real sales or clients. Too often, time and money are lost on
            campaigns that fail to deliver.<br /><br />
            Syed Saqib Mumtaz provides the solution. With over 20 years of technical expertise and digital
            marketing experience, he helps clients cut through the noise, connect with their audience, and achieve
            measurable growth.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg group">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="space-y-4">
                      <div
                        className={`w-16 h-16 rounded-2xl ${area.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <area.icon className={`w-8 h-8 ${area.iconColor}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{area.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{area.description}</p>
                      </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-3">
                      <div className="text-sm font-semibold text-slate-700">Key Skills:</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {area.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                            <span className="text-sm text-slate-600">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
