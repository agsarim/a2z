"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion" // Changed from Tabs to Accordion
import { Card, CardContent } from "@/components/ui/card"
import { Bot, Target, Share2, CheckCircle } from "lucide-react"
import Image from "next/image"

const services = [
  {
    id: "ai-content",
    title: "AI-Assisted Content Creation & Optimization",
    icon: Bot,
    overview:
      "Transform your marketing efforts with artificial intelligence that creates compelling content, optimizes messaging for maximum engagement, and automates repetitive tasks so you can focus on writing your next bestseller.",
    included: [
      "AI-Powered Copywriting: Utilize ChatGPT and Gemini to create compelling book descriptions, social media content, email campaigns, and advertising copy that resonates with your target audience",
      "Visual Content Generation: Leverage MidJourney and other AI tools to create stunning graphics, social media visuals, and marketing materials that capture attention and drive engagement",
      "SEO Optimization: Implement AI-driven keyword research and content optimization strategies that improve your discoverability across all digital platforms",
      "Content Calendar Automation: Develop and automate content distribution schedules that maintain consistent audience engagement without overwhelming your schedule",
    ],
    results: [
      "300% improvement in content creation speed",
      "150% increase in social media engagement rates",
      "200% boost in organic search visibility",
      "Significant reduction in marketing time investment",
    ],
  },
  {
    id: "amazon-ppc",
    title: "Amazon PPC Management & Optimization",
    icon: Target,
    overview:
      "Master Amazon's complex advertising ecosystem with data-driven PPC strategies that maximize your return on investment while building sustainable bestseller momentum.",
    included: [
      "Keyword Research & Analysis: Deep-dive competitor analysis and keyword opportunity identification using proprietary research methodologies",
      "Campaign Structure Optimization: Strategic campaign architecture that maximizes ad spend efficiency and minimizes wasted budget",
      "Bid Management: Dynamic bidding strategies that adapt to market conditions and competition levels",
      "Performance Tracking: Comprehensive analytics and reporting that provide actionable insights for continuous improvement",
    ],
    results: [
      "Generated over $1 million in sales for authors across diverse genres",
      "Average ACOS (Advertising Cost of Sales) improvements of 40-60% within the first 90 days of optimization",
    ],
  },
  {
    id: "cross-platform",
    title: "Cross-Platform Digital Marketing",
    icon: Share2,
    overview:
      "Expand your reach beyond Amazon with integrated marketing campaigns that leverage multiple digital platforms to build a comprehensive author brand and diversified revenue streams.",
    included: [
      "Google Ads: Strategic search and display advertising that captures readers at every stage of the buying journey",
      "Facebook & Instagram Marketing: Targeted social media campaigns that build engaged communities and drive book sales",
      "LinkedIn Advertising: Professional networking strategies that position you as a thought leader in your industry",
      "YouTube Marketing: Video content strategies that showcase your expertise and create additional revenue opportunities",
      "TikTok & Instagram Reels: Short-form content that reaches younger demographics and viral marketing potential",
    ],
    results: [
      "Increased brand visibility across major platforms",
      "Diversified revenue streams beyond Amazon",
      "Stronger author-reader relationships and community building",
      "Enhanced thought leadership and industry influence",
    ],
  },
]

export function CoreDigitalMarketingServices() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Bot className="w-4 h-4" />
            Our Core Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Strategies for
            <span className="text-blue-600"> Digital Dominance</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From leveraging cutting-edge AI to mastering Amazon's algorithm and expanding your reach across all digital
            platforms, we cover every aspect of modern book marketing.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem value={service.id} className="mb-4 border-b-0">
                <AccordionTrigger className="flex items-center gap-4 p-6 bg-slate-100 rounded-xl shadow-sm hover:bg-slate-200 transition-all duration-300 text-left">
                  <service.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900 flex-1">{service.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 mt-4">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid lg:grid-cols-2 gap-12">
                        {/* Overview & Included */}
                        <div className="space-y-8">
                          <p className="text-lg text-slate-700 leading-relaxed">{service.overview}</p>

                          <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-slate-800">
                              {service.id === "ai-content"
                                ? "What's Included:"
                                : service.id === "amazon-ppc"
                                  ? "Advanced PPC Strategies:"
                                  : "Platform Integration:"}
                            </h4>
                            <ul className="space-y-3">
                              {service.included.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                  <span className="text-slate-600">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Results */}
                        <div className="space-y-8 bg-white rounded-xl p-8 shadow-md border border-slate-200">
                          <h4 className="text-xl font-semibold text-slate-800">
                            {service.id === "ai-content" ? "Results You Can Expect:" : "Proven Results:"}
                          </h4>
                          <ul className="space-y-3">
                            {service.results.map((item, index) => (
                              <li key={index} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
                                <span className="text-slate-700 font-medium">{item}</span>
                              </li>
                            ))}
                          </ul>
                          {/* Image Suggestion for this section */}
                          <div className="mt-8">
                            <Image
                              src="/placeholder.svg?height=300&width=500"
                              alt={`Visualization for ${service.title}`}
                              width={500}
                              height={300}
                              className="w-full h-auto rounded-lg object-cover"
                              unoptimized
                            />
                            <p className="text-center text-slate-500 text-sm mt-2">
                              {service.id === "ai-content" && "AI-generated content examples and optimization metrics."}
                              {service.id === "amazon-ppc" && "Amazon PPC dashboard with sales and ACOS improvements."}
                              {service.id === "cross-platform" && "Cross-platform analytics showing audience growth."}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
