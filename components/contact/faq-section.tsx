import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "How quickly can I expect to see results?",
      answer:
        "Results vary based on genre and current performance, but most clients see initial improvements within 30-60 days. Significant results typically occur within 3-6 months of consistent implementation.",
    },
    {
      question: "Do you work with all genres?",
      answer:
        "Yes, I work with authors across all genres, though I have the strongest track record in business, self-help, and non-fiction. Fiction authors also achieve excellent results with adapted strategies.",
    },
    {
      question: "What's the minimum budget for effective marketing?",
      answer:
        "I recommend a minimum monthly marketing budget of $500-1000 for meaningful results, though we can work with smaller budgets by focusing on the highest-impact strategies first.",
    },
    {
      question: "Do you offer guarantees on results?",
      answer:
        "While I can't guarantee specific sales numbers due to market variables, I do guarantee my effort, expertise, and commitment to your success. Most clients see positive ROI within 90 days.",
    },
    {
      question: "Are training programs suitable for beginners?",
      answer:
        "Absolutely. My programs are designed to take authors from complete beginner to confident marketer, with step-by-step guidance and ongoing support.",
    },
    {
      question: "How involved do I need to be in the process?",
      answer:
        "This depends on your preference and package selection. I offer everything from complete done-for-you services to guided implementation where you maintain control.",
    },
  ]

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">Everything you need to know about working together</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg border border-slate-200"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:text-blue-600 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-slate-700 leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
