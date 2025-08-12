"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Award, BookOpen, Shield, Star, CheckCircle, Trophy } from "lucide-react"

const technicalCertifications = [
  {
    icon: Award,
    title: "LinkedIn Certified Marketing Professional",
    issuer: "LinkedIn Learning",
    year: "2023",
    description: "Advanced digital marketing certification covering strategy, analytics, and campaign optimization",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    icon: BookOpen,
    title: "BE Telecommunications Engineering",
    issuer: "National University of Science and Technology (NUST)",
    year: "2002",
    description: "Premier engineering degree from Pakistan's top-ranked technical university",
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
 
  {
    icon: Star,
    title: "Top Rated Plus Freelancer",
    issuer: "Upwork Platform",
    year: "2023",
    description: "Elite freelancer status with 100% job success rate and exceptional client feedback",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
  },
]

const specializedSkills = [
  {
    category: "AI-Assisted Marketing",
    skills: [
      "ChatGPT & Gemini Implementation",
      "MidJourney Visual Content Creation",
      "AI-Powered Copywriting",
      "Automated Campaign Management",
    ],
  },
  {
    category: "Amazon Expertise",
    skills: [
      "A10 Algorithm Optimization",
      "Advanced PPC Management",
      "Keyword Research & Analysis",
      "Category Strategy Development",
    ],
  },
  {
    category: "Data & Analytics",
    skills: [
      "Performance Tracking Systems",
      "ROI Optimization",
      "Market Research & Analysis",
      "Conversion Rate Optimization",
    ],
  },
  {
    category: "Technical Foundation",
    skills: [
      "Digital Systems Architecture",
      "Cybersecurity Principles",
      "Platform Integration",
      "Automation Development",
    ],
  },
]

export function CredentialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Trophy className="w-4 h-4" />
            Credentials & Expertise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
          The Skills That Drive Your Results          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Backed by formal education, professional certifications, and specialized training, I bring the technical precision and marketing expertise needed to help your book or brand stand out, sell more, and scale faster.
          </p>
        </motion.div>

        {/* Technical Certifications */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Technical Certifications</h3>
            <p className="text-lg text-slate-600">Recognized qualifications that ensure your campaigns are built on proven, reliable, and results-driven strategies.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technicalCertifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl ${cert.bgColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <cert.icon className={`w-8 h-8 ${cert.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{cert.title}</h4>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-medium text-slate-600">{cert.issuer}</span>
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                              {cert.year}
                            </span>
                          </div>
                          <p className="text-slate-600 leading-relaxed">{cert.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialized Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Specialized Skills</h3>
            <p className="text-lg text-slate-600">Advanced competencies that deliver exceptional marketing results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedSkills.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h4 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3">
                        {category.category}
                      </h4>
                      <div className="space-y-3">
                        {category.skills.map((skill, skillIndex) => (
                          <div key={skillIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-slate-600">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
