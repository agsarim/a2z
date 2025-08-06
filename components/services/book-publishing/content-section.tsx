"use client"

import { motion } from "framer-motion"

export function BookPublishingContent() {
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
              Your Publishing Journey Simplified
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              The journey from completed manuscript to published book can feel overwhelming, especially when you're
              navigating the complex landscape of modern publishing options. Traditional publishing routes often involve
              lengthy delays, limited creative control, and reduced profit margins, while self-publishing can seem
              technically daunting for authors who want to focus on writing rather than learning complex publishing
              systems.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Our comprehensive publishing services bridge this gap by providing professional-grade publishing
              support that maintains your creative control and profit margins while ensuring your book meets the highest
              industry standards.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              We've successfully published over <span className="font-semibold text-blue-600">7,500 authors</span> across{" "}
              <span className="font-semibold text-blue-600">91 countries</span>, creating books
              that not only look professional but are strategically positioned for marketplace success from day one.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}