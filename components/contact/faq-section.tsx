import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our services, training programs, and working together.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 max-w-6xl mx-auto">
          {/* About Services */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About Services</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: How quickly can I expect to see results from book marketing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: Results vary based on genre, competition, and current book performance, but most clients see
                  initial improvements within 30-60 days. Significant results typically occur within 3-6 months of
                  consistent implementation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: Do you work with authors in all genres?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: Yes, we work with authors across all genres, though our strongest track record is in business,
                  self-help, and non-fiction categories. Fiction authors also achieve excellent results with adapted
                  strategies.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: What's the minimum budget needed for effective book marketing?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: We recommend a minimum monthly marketing budget of $500-1000 for meaningful results, though we can
                  work with smaller budgets by focusing on the highest-impact strategies first.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: Do you offer guarantees on marketing results?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: While we can't guarantee specific sales numbers due to market variables, we do guarantee our
                  effort, expertise, and commitment to your success. Most clients see positive ROI within 90 days.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* About Training Programs */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">About Training Programs</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-5">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: Are the training programs suitable for complete beginners?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: Absolutely. Our programs are designed to take authors from complete beginner to confident marketer,
                  with step-by-step guidance and ongoing support.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: Can I access training materials after the program ends?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: Yes, all recorded materials remain accessible for lifetime access, and you maintain community
                  access for ongoing support and networking.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-7">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: What if I can't attend live sessions?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: All sessions are recorded and available within 24 hours. We also offer makeup sessions and
                  additional support for participants who miss live sessions.
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* About Working Together */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">About Working Together</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-8">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: How involved do I need to be in the marketing process?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: This depends on your preference and package selection. We offer everything from complete
                  done-for-you services to guided implementation where you maintain control.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-9">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: Do you work with traditionally published authors?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: Yes, though our strategies are most effective for self-published authors who have control over
                  their marketing decisions and budgets.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-10">
                <AccordionTrigger className="text-lg font-semibold text-gray-800 hover:text-purple-700">
                  Q: Can you help with books that are already published?
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed pt-2">
                  A: Absolutely. Many of our most successful campaigns involve optimizing and relaunching existing books
                  with improved marketing strategies.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
