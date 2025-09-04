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
Publishing Made Simple, Profitable, and Professional            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Finishing a manuscript is hard enough — turning it into a published book shouldn’t feel overwhelming.
              Traditional publishing can mean <span className="font-semibold text-slate-700">long delays, less creative control, and lower profits</span>, while
              self-publishing often demands{" "}
              <span className="font-semibold text-slate-700">time-consuming technical work</span> authors shouldn’t
              have to struggle with.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              That’s where we come in. Our{" "}
              <span className="font-semibold text-blue-600">end-to-end publishing services</span> give you the best of
              both worlds —{" "}
              <span className="font-semibold text-blue-600">
                professional quality, full creative control, and higher profit margins
              </span>{" "}
              — without the stress of managing complex systems on your own.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              With over <span className="font-semibold text-blue-600">300+ authors published across the globe</span>,
              we’ve helped writers transform manuscripts into books that not only look world-class but are also{" "}
              <span className="font-semibold text-blue-600">
                strategically positioned for marketplace success from day one
              </span>
              .
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}