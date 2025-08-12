"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Brain, Target, BarChart3, Zap, Shield, Globe } from "lucide-react"

const expertiseAreas = [
  {
    icon: Brain,
    title: "AI-Assisted Marketing",
    description: "ChatGPT, Gemini, MidJourney implementation for content creation and campaign optimization",
    skills: ["Content Generation", "Visual Design", "Campaign Automation", "Performance Analysis"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Target,
    title: "Amazon Algorithm Mastery",
    description: "Deep understanding of A10 algorithm, PPC optimization, and ranking strategies",
    skills: ["PPC Management", "SEO Optimization", "Keyword Research", "Category Strategy"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: BarChart3,
    title: "Data Analysis & ROI",
    description: "Performance tracking, market research, and data-driven decision making",
    skills: ["Analytics Setup", "Performance Tracking", "ROI Optimization", "Market Research"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Cross-Platform Marketing",
    description: "Integrated marketing campaigns across multiple digital platforms",
    skills: ["Social Media Strategy", "Email Marketing", "Content Distribution", "Brand Building"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    icon: Shield,
    title: "Cybersecurity Insights",
    description: "Digital security expertise applied to marketing strategy and platform safety",
    skills: ["Platform Security", "Data Protection", "Risk Assessment", "Compliance"],
    color: "from-slate-500 to-gray-500",
    bgColor: "bg-slate-50",
    iconColor: "text-slate-600",
  },
  {
    icon: Zap,
    title: "Technical Innovation",
    description: "Telecommunications background enabling advanced technical marketing solutions",
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
          Solving Your Biggest             <span className="text-blue-600"> Book Marketing Challenges</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Struggling to get your book noticed or turn clicks into sales? My 20 years of technical expertise and proven marketing strategies work together to cut through the noise, reach the right readers, and drive measurable results in the digital publishing space.          </p>
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
                      <div className="grid grid-cols-2 gap-2">
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
