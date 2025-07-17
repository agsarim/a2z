"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, DollarSign, Eye, Users, CheckCircle } from "lucide-react"
import Image from "next/image"

const kpis = [
  {
    category: "Sales Metrics",
    icon: DollarSign,
    color: "text-green-600",
    items: [
      "Total Revenue Generated: Track overall financial impact of marketing efforts",
      "Return on Ad Spend (ROAS): Measure efficiency of paid advertising campaigns",
      "Organic Sales Growth: Monitor improvement in non-advertising sales",
      "Average Order Value: Track reader purchasing behavior and upselling success",
    ],
  },
  {
    category: "Visibility Metrics",
    icon: Eye,
    color: "text-blue-600",
    items: [
      "Amazon Best Seller Rank (BSR): Monitor ranking performance across categories",
      "Keyword Rankings: Track visibility for target search terms",
      "Social Media Reach: Measure audience growth and engagement across platforms",
      "Email List Growth: Monitor subscriber acquisition and engagement rates",
    ],
  },
  {
    category: "Engagement Metrics",
    icon: Users,
    color: "text-purple-600",
    items: [
      "Review Acquisition Rate: Track authentic review generation",
      "Social Media Engagement: Monitor likes, shares, comments, and saves",
      "Email Open and Click Rates: Measure email campaign effectiveness",
      "Website Traffic and Conversion: Track author website performance",
    ],
  },
  {
    category: "Brand Building Metrics",
    icon: TrendingUp,
    color: "text-yellow-600",
    items: [
      "Brand Search Volume: Monitor searches for author name and book titles",
      "Media Mentions: Track earned media and publicity opportunities",
      "Speaking Opportunities: Measure authority building and platform expansion",
      "Partnership Opportunities: Track collaboration and cross-promotion success",
    ],
  },
]

export function MarketingPerformanceMetrics() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <TrendingUp className="w-4 h-4" />
            Performance Tracking
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Measurable Success:
            <span className="text-purple-600"> Key Performance Indicators</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We believe in transparent, data-driven results. Our comprehensive KPIs provide a clear picture of your
            marketing campaign's effectiveness and impact on your author business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((category, index) => (
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
                        className={`w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center flex-shrink-0`}
                      >
                        <category.icon className={`w-8 h-8 ${category.color}`} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{category.category}</h3>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                          <span className="text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Interactive Dashboard & Reporting</h3>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
                Gain real-time insights into your campaign performance with custom dashboards and detailed reports,
                allowing you to track progress and make informed decisions.
              </p>
              <Image
                src="/placeholder.svg?height=400&width=800"
                alt="Interactive dashboard showing real-time campaign performance"
                width={800}
                height={400}
                className="w-full h-auto rounded-lg object-cover shadow-md"
                unoptimized
              />
              <p className="text-center text-slate-500 text-sm mt-4">
                Interactive dashboard showing real-time campaign performance.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
