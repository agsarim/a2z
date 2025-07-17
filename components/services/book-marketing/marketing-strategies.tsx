"use client"

import { motion } from "framer-motion"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { AppleIcon as Amazon, Facebook, Mail, CheckCircle, TrendingUp } from "lucide-react"

// Define a type for nested list items
type NestedListItem = string | { heading: string; points: string[] }

const marketingStrategies = [
  {
    id: "amazon-mastery",
    title: "Amazon Ecosystem Mastery",
    icon: Amazon,
    overview:
      "The Amazon A10 algorithm determines which books get discovered by readers, making algorithm optimization crucial for sustainable success. Our proprietary approach to Amazon marketing goes far beyond basic keyword optimization.",
    subSections: [
      {
        title: "Amazon Algorithm Optimization",
        items: [
          "Advanced Keyword Strategy: We conduct comprehensive keyword research that identifies not just high-volume search terms, but the specific phrases your ideal readers use when searching for books like yours. This includes long-tail keywords, seasonal variations, and emerging trends that your competitors haven't discovered yet.",
          "Category Optimization: Strategic category selection can mean the difference between ranking #1 in a relevant subcategory versus being lost in a massive, competitive category. We analyze category performance, competition levels, and reader behavior to position your book where it has the best chance of achieving and maintaining bestseller status.",
          "Review Generation Strategy: Authentic reviews are crucial for Amazon's algorithm and reader trust. We implement ethical review generation strategies that encourage genuine reader feedback while building social proof that drives additional sales.",
        ],
      },
      {
        title: "Amazon PPC Advertising Excellence",
        description:
          "Our PPC campaigns are built on sophisticated architecture that maximizes ad spend efficiency while minimizing wasted budget on irrelevant clicks.",
        items: [
          {
            heading: "Sponsored Products Campaigns:",
            points: [
              "Auto Campaigns: Broad discovery campaigns that identify new keyword opportunities",
              "Manual Exact Campaigns: Precision targeting for high-converting keywords",
              "Manual Phrase Campaigns: Balanced approach for moderate competition keywords",
              "Manual Broad Campaigns: Expanded reach for brand awareness and discovery",
            ],
          },
          {
            heading: "Sponsored Brands Campaigns:",
            points: [
              "Brand Awareness: Build recognition for your author name and book series",
              "Competitive Targeting: Capture readers from similar authors in your genre",
              "Defensive Campaigns: Protect your brand from competitor advertising",
            ],
          },
          {
            heading: "Sponsored Display Campaigns:",
            points: [
              "Product Targeting: Reach readers browsing similar books",
              "Interest Targeting: Connect with readers based on their browsing behavior",
              "Remarketing: Re-engage visitors who viewed your book but didn't purchase",
            ],
          },
          "Performance Optimization: Continuous monitoring and optimization ensure your campaigns improve over time rather than stagnating. We track over 50 different metrics to identify optimization opportunities that most marketers miss.",
        ],
      },
    ],
  },
  {
    id: "multi-platform",
    title: "Multi-Platform Marketing Integration",
    icon: Facebook,
    overview:
      "Building an author platform requires strategic presence across multiple social media platforms, each serving different purposes in your overall marketing ecosystem.",
    subSections: [
      {
        title: "Social Media Marketing Strategy",
        items: [
          {
            heading: "Facebook & Instagram Marketing:",
            points: [
              "Community Building: Create engaged reader communities that become loyal fans",
              "Content Marketing: Share behind-the-scenes content that builds personal connection",
              "Targeted Advertising: Reach potential readers based on detailed demographic and interest data",
              "Event Promotion: Promote book launches, virtual events, and speaking engagements",
            ],
          },
          {
            heading: "LinkedIn Professional Networking:",
            points: [
              "Thought Leadership: Establish authority in your subject matter area",
              "Professional Networking: Connect with industry influencers and potential collaborators",
              "Content Distribution: Share valuable insights that demonstrate your expertise",
              "B2B Opportunities: Develop speaking, consulting, and partnership opportunities",
            ],
          },
          {
            heading: "YouTube Content Strategy:",
            points: [
              "Educational Content: Create valuable content that showcases your expertise",
              "Book Trailers: Professional video content that promotes your books",
              "Author Interviews: Participate in and host interviews that build credibility",
              "Live Streaming: Real-time engagement with your audience",
            ],
          },
          {
            heading: "TikTok & Instagram Reels:",
            points: [
              "Viral Content Creation: Develop short-form content with viral potential",
              "BookTok Community: Engage with the rapidly growing book community on TikTok",
              "Behind-the-Scenes Content: Show your writing process and author journey",
              "Trend Participation: Leverage trending hashtags and challenges for increased visibility",
            ],
          },
        ],
      },
    ],
  },
  {
    id: "email-marketing",
    title: "Email Marketing & Reader Relationship Building",
    icon: Mail,
    overview:
      "Building a direct relationship with your readers through email marketing provides the highest ROI of any marketing channel and creates a sustainable foundation for long-term success.",
    subSections: [
      {
        title: "Email List Development",
        description:
          "Building a direct relationship with your readers through email marketing provides the highest ROI of any marketing channel and creates a sustainable foundation for long-term success.",
        items: [
          {
            heading: "Lead Magnets & Reader Incentives:",
            points: [
              "Free Chapter Downloads: Offer sample content to capture email addresses",
              "Exclusive Content: Provide bonus materials available only to subscribers",
              "Early Access: Give subscribers first access to new releases and special offers",
              "Educational Resources: Share valuable information related to your book's topic",
            ],
          },
        ],
      },
      {
        title: "Email Campaign Strategies",
        items: [
          "Welcome Series: Nurture new subscribers with valuable content and soft promotion",
          "Launch Sequences: Coordinate email campaigns with book releases for maximum impact",
          "Engagement Campaigns: Maintain regular contact with valuable, non-promotional content",
          "Sales Campaigns: Strategic promotional emails that drive purchases without overwhelming subscribers",
        ],
      },
      {
        title: "Automation & Segmentation",
        items: [
          "Advanced email automation ensures the right message reaches the right reader at the optimal time, while segmentation allows for personalized communication that increases engagement and conversion rates.",
        ],
      },
    ],
  },
]

export function MarketingStrategies() {
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
            <TrendingUp className="w-4 h-4" />
            Comprehensive Strategies
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Proven Marketing Frameworks for
            <span className="text-blue-600"> Bestseller Success</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our multi-faceted approach covers every essential aspect of modern book marketing, from mastering Amazon's
            algorithm to building engaged communities across all digital platforms.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full max-w-5xl mx-auto">
          {marketingStrategies.map((strategy, index) => (
            <motion.div
              key={strategy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AccordionItem value={strategy.id} className="mb-4 border-b-0">
                <AccordionTrigger className="flex items-center gap-4 p-6 bg-slate-100 rounded-xl shadow-sm hover:bg-slate-200 transition-all duration-300 text-left">
                  <strategy.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                  <h3 className="text-xl font-bold text-slate-900 flex-1">{strategy.title}</h3>
                </AccordionTrigger>
                <AccordionContent>
                  <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 mt-4">
                    <CardContent className="p-8 lg:p-12">
                      <p className="text-lg text-slate-700 leading-relaxed mb-8">{strategy.overview}</p>

                      {strategy.subSections.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          className="mb-8 last:mb-0 p-6 bg-white rounded-xl shadow-sm border border-slate-200"
                        >
                          <h4 className="text-xl font-semibold text-slate-800 mb-4">{sub.title}</h4>
                          {sub.description && <p className="text-slate-600 leading-relaxed mb-4">{sub.description}</p>}
                          <ul className="space-y-3">
                            {sub.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                {typeof item === "string" ? (
                                  <div className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                                    <span className="text-slate-600">{item}</span>
                                  </div>
                                ) : (
                                  <div className="space-y-2">
                                    <h5 className="font-semibold text-slate-700">{item.heading}</h5>
                                    <ul className="ml-6 space-y-2">
                                      {item.points.map((point, pointIndex) => (
                                        <li key={pointIndex} className="flex items-start gap-3">
                                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                                          <span className="text-slate-600">{point}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
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
