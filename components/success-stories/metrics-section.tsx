"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { DollarSign, TrendingUp, Award, Users, CheckCircle } from "lucide-react"
import { useRef, useEffect, useState } from "react"

interface AnimatedCounterProps {
  from: number
  to: number
  duration: number
  suffix?: string
  prefix?: string
}

const AnimatedCounter = ({ from, to, duration, suffix = "", prefix = "" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(from)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      let start: number | null = null
      const animate = (currentTime: number) => {
        if (!start) start = currentTime
        const progress = Math.min((currentTime - start) / duration, 1)
        setCount(Math.floor(progress * (to - from) + from))
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, from, to, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

const overallStats = [
  {
    icon: DollarSign,
    title: "Revenue Generation",
    color: "text-green-600",
    metrics: [
      { label: "Total Client Revenue Generated", value: "1,000,000", suffix: "+" },
      { label: "Average ROI for Clients", value: "300", suffix: "-500%" },
      { label: "Client Retention Rate", value: "85", suffix: "%" },
      { label: "Average Campaign Duration", value: "18", suffix: " months" },
    ],
  },
  {
    icon: Award,
    title: "Bestseller Achievements",
    color: "text-yellow-600",
    metrics: [
      { label: "#1 Bestsellers Created", value: "30", suffix: "+" },
      { label: "Top 10 Rankings Achieved", value: "150", suffix: "+" },
      { label: "Categories Dominated", value: "25", suffix: "+" },
      { label: "International Success", value: "15", suffix: "+" },
    ],
  },
  {
    icon: Users,
    title: "Client Satisfaction",
    color: "text-blue-600",
    metrics: [
      { label: "Client Satisfaction Rate", value: "95", suffix: "%" },
      { label: "Repeat Client Rate", value: "80", suffix: "%" },
      { label: "Referral Rate", value: "60", suffix: "%" },
      { label: "Long-term Partnerships", value: "3", suffix: "+ years" },
    ],
  },
]

const genreSuccess = [
  {
    genre: "Business & Leadership",
    percentage: "40%",
    time: "3-6 months",
    roi: "400-600%",
    benefits: ["Speaking opportunities", "Consulting leads"],
  },
  {
    genre: "Self-Help & Personal Development",
    percentage: "25%",
    time: "2-4 months",
    roi: "300-500%",
    benefits: ["Coaching opportunities", "Course sales"],
  },
  {
    genre: "Health & Fitness",
    percentage: "15%",
    time: "4-8 months",
    roi: "250-400%",
    benefits: ["Product sales", "Affiliate opportunities"],
  },
  {
    genre: "Fiction & Creative",
    percentage: "10%",
    time: "6-12 months",
    roi: "200-350%",
    benefits: ["Series sales", "Movie/TV interest"],
  },
  {
    genre: "Technical & Educational",
    percentage: "10%",
    time: "8-12 months",
    roi: "300-450%",
    benefits: ["Training opportunities", "Corporate sales"],
  },
]

export function MetricsSection() {
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
            Client Success Metrics
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Quantifiable Results Across <span className="text-purple-600">Every Dimension</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our data-driven approach delivers measurable impact, from revenue generation and bestseller rankings to
            client satisfaction and long-term partnerships.
          </p>
        </motion.div>

        {/* Overall Performance Statistics */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Overall Performance Statistics</h3>
            <p className="text-lg text-slate-600">Key indicators of our consistent success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {overallStats.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-slate-100 flex items-center justify-center flex-shrink-0`}
                        >
                          <category.icon className={`w-8 h-8 ${category.color}`} />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900">{category.title}</h4>
                      </div>
                      <ul className="space-y-4">
                        {category.metrics.map((metric, metricIndex) => (
                          <li key={metricIndex} className="flex flex-col items-start">
                            <span className="text-sm text-slate-600">{metric.label}:</span>
                            <span className={`text-3xl font-bold ${category.color}`}>
                              <AnimatedCounter
                                from={0}
                                to={Number.parseInt(metric.value.replace(/,/g, ""))}
                                duration={2000}
                                suffix={metric.suffix}
                                prefix={metric.label.includes("Revenue") ? "$" : ""}
                              />
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Success Across Genres */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Success Across Genres</h3>
            <p className="text-lg text-slate-600">Tailored strategies for diverse literary categories</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genreSuccess.map((genre, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full border-0 shadow-lg bg-white">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{genre.genre}</h4>
                      <p className="text-sm font-medium text-blue-600 mb-3">{genre.percentage} of clients</p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-600">Average time to bestseller: {genre.time}</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-600">Typical ROI: {genre.roi}</span>
                        </li>
                      </ul>
                      <div className="mt-4">
                        <h5 className="text-md font-semibold text-slate-800 mb-2">Common Additional Benefits:</h5>
                        <ul className="space-y-1">
                          {genre.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-slate-600">{benefit}</span>
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
      </div>
    </section>
  )
}
