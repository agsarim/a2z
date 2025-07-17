"use client"

import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Mic, Users, Tv, BookOpen, Globe } from "lucide-react"

const speakingEngagements = [
  {
    institution: "National University of Science and Technology (NUST)",
    topic: "Digital Publishing in the AI Era",
    audience: "Engineering and business students",
    takeaway: "How technical professionals can leverage their analytical skills for publishing success",
    type: "University",
  },
  {
    institution: "National Defence University",
    topic: "AI-Powered Marketing for Authors & Coaches",
    audience: "Graduate students and faculty",
    takeaway: "Strategic applications of AI in professional development and thought leadership",
    type: "University",
  },
  {
    institution: "Creative Leadership Conference",
    topic: "Building Profitable Book Funnels with Automation",
    audience: "Entrepreneurs and creative professionals",
    takeaway: "Systematic approaches to monetizing expertise through book publishing",
    type: "Conference",
  },
  {
    institution: "Youth Leadership Conference",
    topic: "Personal Branding for Thought Leaders",
    audience: "Young professionals and students",
    takeaway: "Establishing authority and influence through strategic content creation",
    type: "Conference",
  },
]

const mediaAppearances = ["PTV World", "PTV Home", "ATV", "Roze TV", "Hum News", "GTV", "Kay2TV"]

const podcastAppearances = [
  {
    name: "Good Vibes Only Podcast",
    topic: "Secrets of eBook Success",
    description: "Deep dive into proven strategies for digital book marketing success",
  },
  {
    name: "CxO Global Forum",
    topic: "The Impact of AI on Digital Marketing",
    description: "Expert insights on AI transformation in marketing strategies",
  },
]

const universities = [
  "National University of Science and Technology",
  "National Defence University",
  "National University of Pakistan",
  "Iqra University",
  "University of Turbat",
]

export function MediaPresence() {
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
            <Mic className="w-4 h-4" />
            Speaking & Media Presence
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Recognized Industry
            <span className="text-purple-600"> Thought Leader</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sharing expertise through keynote presentations, media appearances, and educational initiatives across
            leading institutions and industry platforms.
          </p>
        </motion.div>

        {/* Speaking Engagements */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Keynote Speaking Engagements</h3>
            <p className="text-lg text-slate-600">
              Transformative presentations at leading educational institutions and industry conferences
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {speakingEngagements.map((engagement, index) => (
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
                          className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            engagement.type === "University"
                              ? "bg-blue-100 text-blue-600"
                              : "bg-green-100 text-green-600"
                          }`}
                        >
                          {engagement.type === "University" ? (
                            <BookOpen className="w-6 h-6" />
                          ) : (
                            <Users className="w-6 h-6" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-slate-900 mb-2">{engagement.institution}</h4>
                          <div className="text-sm font-medium text-blue-600 mb-3">"{engagement.topic}"</div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Audience: </span>
                          <span className="text-sm text-slate-600">{engagement.audience}</span>
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-slate-700">Key Takeaways: </span>
                          <span className="text-sm text-slate-600">{engagement.takeaway}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Media Appearances */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* TV Networks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                      <Tv className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Television Networks</h3>
                      <p className="text-slate-600">Regular expert commentary on digital marketing trends</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {mediaAppearances.map((network, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="bg-slate-50 rounded-lg p-4 text-center"
                      >
                        <div className="font-semibold text-slate-900">{network}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Podcast Appearances */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                      <Mic className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900">Podcast Appearances</h3>
                      <p className="text-slate-600">In-depth discussions on publishing and marketing</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {podcastAppearances.map((podcast, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        className="bg-slate-50 rounded-lg p-4"
                      >
                        <div className="font-semibold text-slate-900 mb-1">{podcast.name}</div>
                        <div className="text-sm font-medium text-blue-600 mb-2">"{podcast.topic}"</div>
                        <div className="text-sm text-slate-600">{podcast.description}</div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Universities Served */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Educational Institutions Served</h3>
                </div>

                <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                  Delivering valuable insights and practical knowledge to students and faculty across Pakistan's leading
                  universities
                </p>

                <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {universities.map((university, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-4 text-center shadow-sm"
                    >
                      <div className="text-sm font-medium text-slate-900">{university}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
