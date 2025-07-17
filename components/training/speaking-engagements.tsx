"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, GraduationCap, Briefcase, BookOpen, CheckCircle } from "lucide-react"

const recentEngagements = [
  {
    university: "National University of Science and Technology (NUST)",
    topic: "Digital Publishing in the AI Era",
    audience: "Engineering and business students",
    takeaways: "How technical professionals can leverage their analytical skills for publishing success",
  },
  {
    university: "National Defence University",
    topic: "AI-Powered Marketing for Authors & Coaches",
    audience: "Graduate students and faculty",
    takeaways: "Strategic applications of AI in professional development and thought leadership",
  },
  {
    university: "Creative Leadership Conference",
    topic: "Building Profitable Book Funnels with Automation",
    audience: "Entrepreneurs and creative professionals",
    takeaways: "Systematic approaches to monetizing expertise through book publishing",
  },
  {
    university: "Youth Leadership Conference",
    topic: "Personal Branding for Thought Leaders",
    audience: "Young professionals and students",
    takeaways: "Establishing authority and influence through strategic content creation",
  },
]

const availableTopics = {
  universities: [
    "Digital Entrepreneurship Through Book Publishing",
    "AI Applications in Modern Marketing",
    "Building Personal Brands in the Digital Age",
    "Freelancing and Digital Service Businesses",
  ],
  businessConferences: [
    "AI-Powered Marketing Strategies for Small Businesses",
    "Content Marketing That Converts",
    "Building Authority Through Thought Leadership",
    "Digital Transformation for Traditional Businesses",
  ],
  authorEvents: [
    "Mastering Amazon's Algorithm for Bestseller Success",
    "AI Tools That Transform Author Marketing",
    "Building Sustainable Author Businesses",
    "From Self-Published to Six-Figure Author",
  ],
}

export function SpeakingEngagements() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Mic className="w-4 h-4" />
            University & Conference Speaking
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Inspiring the Next Generation of <span className="text-purple-400">Digital Entrepreneurs</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Sharing insights on digital marketing, AI applications, and entrepreneurship with students, professionals,
            and industry leaders across various platforms.
          </p>
        </motion.div>

        {/* Recent Speaking Engagements */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">Recent Speaking Engagements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {recentEngagements.map((engagement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
                  <CardContent className="p-8">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-300">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <h4 className="text-xl font-bold text-white">{engagement.university}</h4>
                      </div>
                      <div className="space-y-2">
                        <p className="text-lg font-semibold text-purple-300">Topic: {engagement.topic}</p>
                        <p className="text-slate-300">
                          <span className="font-medium">Audience:</span> {engagement.audience}
                        </p>
                        <div className="pt-2">
                          <p className="text-sm font-medium text-slate-300 mb-2">Key Takeaways:</p>
                          <p className="text-slate-400 text-sm leading-relaxed">{engagement.takeaways}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Available Speaking Topics */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Available Speaking Topics</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 flex items-center justify-center text-blue-300 mb-4">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">For Universities & Educational Institutions</h4>
                  </div>
                  <ul className="space-y-3">
                    {availableTopics.universities.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-green-600/20 flex items-center justify-center text-green-300 mb-4">
                      <Briefcase className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">For Business Conferences</h4>
                  </div>
                  <ul className="space-y-3">
                    {availableTopics.businessConferences.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full border-0 shadow-lg bg-slate-800/50 backdrop-blur-xl border-slate-700 text-white">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 mx-auto rounded-2xl bg-purple-600/20 flex items-center justify-center text-purple-300 mb-4">
                      <BookOpen className="w-8 h-8" />
                    </div>
                    <h4 className="text-xl font-bold text-white">For Author & Publishing Events</h4>
                  </div>
                  <ul className="space-y-3">
                    {availableTopics.authorEvents.map((topic, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-300 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
