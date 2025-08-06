"use client"

import { motion } from "framer-motion"

export function TrainingContent() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6">
              Beyond Theory: Practical Training That Works
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Knowledge without application remains theoretical. That's why our training programs go beyond surface-level
              tips to provide deep, practical education that transforms how authors approach digital marketing.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 space-y-6">
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're a complete beginner or an experienced marketer looking to master AI-powered strategies, our workshops
              provide the hands-on experience and ongoing support you need to achieve sustainable success.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Our training methodology combines proven marketing principles with cutting-edge AI tools, delivered through
              interactive workshops that ensure you not only learn the concepts but can implement them effectively.
            </p>
            <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
              <p className="text-lg text-slate-700 leading-relaxed font-medium">
                Every participant leaves with actionable strategies, practical tools, and the confidence to execute
                professional-level marketing campaigns.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}