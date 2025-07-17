"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge, Award, CheckCircle, Star } from "lucide-react"

const certifications = [
  {
    title: "AI Marketing Specialist",
    description: "Master AI-powered marketing tools and strategies for book promotion",
    requirements: [
      "Complete AI-Powered Book Marketing Masterclass",
      "Submit final marketing strategy project",
      "Achieve 80% score on practical assessments",
      "Participate in all live sessions",
    ],
    badge: "/placeholder.svg?height=120&width=120",
    color: "bg-blue-100 text-blue-600",
  },
  {
    title: "Amazon PPC Expert",
    description: "Demonstrate proficiency in Amazon advertising campaign management",
    requirements: [
      "Complete Amazon PPC Intensive Workshop",
      "Launch and optimize live PPC campaign",
      "Achieve target ACOS improvement",
      "Pass technical assessment exam",
    ],
    badge: "/placeholder.svg?height=120&width=120",
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Digital Marketing Strategist",
    description: "Comprehensive certification covering all aspects of book marketing",
    requirements: [
      "Complete both Masterclass and PPC Workshop",
      "Demonstrate multi-channel campaign success",
      "Mentor new program participants",
      "Present case study to peer group",
    ],
    badge: "/placeholder.svg?height=120&width=120",
    color: "bg-purple-100 text-purple-600",
  },
]

export function CertificationPrograms() {
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
            <Award className="w-4 h-4" />
            Certification Programs
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Earn Your <span className="text-purple-600">Professional Credentials</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Validate your expertise with industry-recognized certifications that demonstrate your mastery of AI-powered
            book marketing strategies.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="space-y-6">
                    {/* Badge Display */}
                    <div className="relative">
                      <div
                        className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-4 ${cert.color}`}
                      >
                        <Badge className="w-12 h-12" />
                      </div>
                      <div className="absolute -top-2 -right-2">
                        <Star className="w-6 h-6 text-yellow-500 fill-current" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{cert.description}</p>
                    </div>

                    {/* Requirements */}
                    <div className="text-left">
                      <h4 className="text-lg font-semibold text-slate-800 mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {cert.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
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
