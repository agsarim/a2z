"use client"

import { motion } from "framer-motion"

export function BookMarketingContent() {
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
              The Reality of Modern Book Marketing
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The harsh reality of modern publishing is that even the most brilliantly written books can languish in
              obscurity without strategic marketing. With over <span className="font-semibold text-teal-600">4 million books</span> published annually, standing out requires
              more than great content - it demands sophisticated marketing strategies that understand platform
              algorithms, reader psychology, and the complex dynamics of digital book discovery.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our book marketing services have generated over <span className="font-semibold text-teal-600">$1 million in sales</span> for authors across diverse genres, turning unknown
              writers into recognized authorities in their fields.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We don't just run ads; we build comprehensive marketing ecosystems that create sustainable, long-term success for serious authors who are ready to treat
              their writing as a business.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}