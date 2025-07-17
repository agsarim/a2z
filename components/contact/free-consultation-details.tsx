export function FreeConsultationDetails() {
  return (
    <section className="w-full py-16 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-8 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
            Free Strategy Consultation
          </h2>
          <p className="max-w-[900px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed leading-relaxed">
            The first step toward bestseller success is understanding exactly where you are now and creating a clear
            roadmap to where you want to be. Our free strategy consultation provides immediate value by analyzing your
            current marketing approach, identifying untapped opportunities, and outlining specific strategies that can
            generate results for your unique situation. During this consultation, you'll receive a customized action
            plan that you can implement immediately, regardless of whether you decide to work with us. This commitment
            to providing value upfront reflects our confidence in our strategies and our dedication to author success.
          </p>
        </div>

        <div className="grid gap-12 py-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900">What to Expect in Your Consultation</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Duration:</span> 60 minutes via Zoom or phone
              </li>
              <li>
                <span className="font-medium">Investment:</span> Completely free, no strings attached
              </li>
              <li>
                <span className="font-medium">Scheduling:</span> Available Monday-Friday, 9 AM - 6 PM EST
              </li>
            </ul>
          </div>

          <div className="space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900">Consultation Agenda</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Current Situation Analysis (15 minutes)</span>
                <ul className="list-circle pl-5 text-sm text-gray-600 mt-1">
                  <li>Review your current book marketing efforts and results</li>
                  <li>Identify immediate opportunities for improvement</li>
                  <li>Assess your goals, timeline, and budget considerations</li>
                  <li>Understand your target audience and market positioning</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Strategy Development (30 minutes)</span>
                <ul className="list-circle pl-5 text-sm text-gray-600 mt-1">
                  <li>Develop customized marketing recommendations based on your specific situation</li>
                  <li>Identify the most profitable marketing channels for your genre and audience</li>
                  <li>Create a prioritized action plan with specific next steps</li>
                  <li>Discuss potential obstacles and how to overcome them</li>
                </ul>
              </li>
              <li>
                <span className="font-medium">Implementation Planning (15 minutes)</span>
                <ul className="list-circle pl-5 text-sm text-gray-600 mt-1">
                  <li>Outline immediate actions you can take to improve results</li>
                  <li>Discuss timeline and resource requirements for recommended strategies</li>
                  <li>Explore how our services might accelerate your success</li>
                  <li>Answer any questions about marketing strategies or our programs</li>
                </ul>
              </li>
            </ul>
          </div>

          <div className="space-y-4 p-6 bg-white rounded-lg shadow-md border border-gray-200">
            <h3 className="text-2xl font-semibold text-gray-900">What You'll Receive</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Customized marketing strategy document</li>
              <li>Specific action items you can implement immediately</li>
              <li>Resource recommendations and tool suggestions</li>
              <li>Follow-up email with consultation summary and next steps</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
