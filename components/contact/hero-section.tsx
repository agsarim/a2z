import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Calendar, MessageSquare } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-10" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Let's Work Together
              </h1>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Ready to transform your book into a business asset? Schedule a free consultation to discuss your goals
                and create a custom strategy.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 text-slate-300">
                <Calendar className="h-5 w-5 text-blue-400" />
                <span>Free 60-minute session</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <MessageSquare className="h-5 w-5 text-blue-400" />
                <span>Custom action plan</span>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-white mb-2">Get Started</h2>
                <p className="text-slate-300">Fill out the form below to schedule your consultation</p>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white text-sm font-medium">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm font-medium">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="book" className="text-white text-sm font-medium">
                    Book Title & Genre
                  </Label>
                  <Input
                    id="book"
                    placeholder="e.g., The Great Novel, Fiction"
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="goals" className="text-white text-sm font-medium">
                    Your Goals
                  </Label>
                  <Textarea
                    id="goals"
                    placeholder="What would you like to achieve with your book?"
                    rows={3}
                    className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-blue-400/20 resize-none"
                  />
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 transition-colors">
                  <Mail className="h-4 w-4 mr-2" />
                  Schedule Consultation
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
