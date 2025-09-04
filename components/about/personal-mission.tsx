"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Heart, Target, Users, Lightbulb, ArrowRight, Calendar } from "lucide-react"


const coreValues = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly evolving strategies to stay ahead of platform changes and market dynamics",
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: Target,
    title: "Results",
    description: "Measuring success through client achievements, not just vanity metrics",
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: Users,
    title: "Education",
    description: "Empowering authors with knowledge and skills for long-term sustainable success",
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: Heart,
    title: "Integrity",
    description: "Transparent communication and realistic expectation setting in all partnerships",
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
]

export function PersonalMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Personal Mission
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Democratizing
            <span className="text-blue-400"> Bestseller Success</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Mission Statement */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
              <div className="text-xl leading-relaxed text-slate-200 mb-6 space-y-6">
                <p>
                  My mission is to make publishing success and powerful digital marketing accessible to everyone.
                  Whether it’s turning a book into a bestseller, building a personal brand, or scaling a business
                  through smart campaigns, we believe advanced strategies should not be limited by budget or technical
                  expertise.
                </p>
                <p>
                  By combining AI-powered tools, proven publishing methods, and data-driven marketing, every author,
                  professional, and brand with a valuable message deserves the chance to reach the right audience, grow
                  their influence, and achieve lasting marketplace success.
                </p>
              </div>
              <div className="text-right">
                <div className="text-blue-400 font-semibold">Syed Saqib Mumtaz</div>
                <div className="text-slate-400 text-sm">— Founder & CEO, <em>A2ZPublishing</em></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Calendar className="mr-2 w-4 h-4" />
                Schedule a Consultation
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-600 text-slate-300 hover:bg-slate-800 bg-transparent"
              >
                Learn About Our Process
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-center mb-8">Core Values</h3>

            <div className="grid gap-6">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-slate-800/50 backdrop-blur-xl border-slate-700 hover:bg-slate-800/70 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div
                          className={`w-12 h-12 rounded-xl ${value.bgColor} flex items-center justify-center flex-shrink-0`}
                        >
                          <value.icon className={`w-6 h-6 ${value.color}`} />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white mb-2">{value.title}</h4>
                          <p className="text-slate-300 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-slate-700 rounded-2xl p-8">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Author Journey?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join thousands of authors who have achieved bestseller status through strategic digital marketing. Let's
              discuss how we can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100">
                Schedule Free Strategy Session
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                View Success Stories
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
