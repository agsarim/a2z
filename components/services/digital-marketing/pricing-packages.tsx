"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"
import { CheckCircle, DollarSign } from "lucide-react"

const pricingTiers = [
  {
    name: "Starter Marketing",
    price: "$997",
    period: "/month",
    description: "Ideal for new authors seeking initial visibility and foundational marketing setup.",
    features: [
      "Basic Amazon PPC Campaign Setup",
      "AI-Assisted Book Description Optimization",
      "Initial Keyword Research",
      "Monthly Performance Report",
      "Email Support",
    ],
    buttonText: "Get Started",
    highlight: false,
  },
  {
    name: "Professional Growth",
    price: "$1,997",
    period: "/month",
    description: "For serious authors aiming for sustained growth and bestseller momentum.",
    features: [
      "Advanced Amazon PPC Management",
      "Cross-Platform Social Media Strategy",
      "AI-Powered Content Calendar",
      "Bi-Weekly Optimization Calls",
      "Priority Email & Chat Support",
      "Access to Premium Templates",
    ],
    buttonText: "Choose Plan",
    highlight: true,
  },
  {
    name: "Bestseller Accelerator",
    price: "$3,497",
    period: "/month",
    description: "Comprehensive solution for authors targeting #1 bestseller status and industry leadership.",
    features: [
      "Full Amazon Ecosystem Dominance",
      "Integrated Multi-Platform Campaigns",
      "Dedicated AI Marketing Specialist",
      "Weekly Strategy Sessions",
      "24/7 Direct Support",
      "Exclusive Access to Beta Tools",
      "Media Outreach Guidance",
    ],
    buttonText: "Contact for Enterprise",
    highlight: false,
  },
]

export function PricingPackages() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <DollarSign className="w-4 h-4" />
            Flexible Pricing
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Tailored Digital Marketing
            <span className="text-blue-600"> Packages</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the plan that best fits your author goals and budget, from foundational support to comprehensive
            bestseller acceleration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card
                className={`h-full flex flex-col justify-between border-0 shadow-lg transition-all duration-300 ${
                  tier.highlight ? "bg-blue-600 text-white shadow-xl scale-105" : "bg-white text-slate-900"
                }`}
              >
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h3 className={`text-2xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"} mb-2`}>
                      {tier.name}
                    </h3>
                    <p className={`text-sm ${tier.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      {tier.description}
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className={`text-5xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>
                        {tier.price}
                      </span>
                      <span className={`text-lg ${tier.highlight ? "text-blue-100" : "text-slate-600"}`}>
                        {tier.period}
                      </span>
                    </div>
                    <ul className="space-y-3 text-left mt-6">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 flex-shrink-0 ${tier.highlight ? "text-white" : "text-blue-600"}`}
                          />
                          <span className={`${tier.highlight ? "text-blue-100" : "text-slate-700"}`}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <div className="p-8 pt-0">
                  <Button
                    size="lg"
                    className={`w-full ${
                      tier.highlight
                        ? "bg-white text-blue-600 hover:bg-blue-50"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {tier.buttonText}
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
