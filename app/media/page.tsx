import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mic, Users, MessageSquare, GraduationCap } from "lucide-react"
import { MediaHero } from "@/components/media/hero-section"

type YouTubeItem = {
  type: "youtube"
  title: string
  platform: string
  youtubeId: string
  startSeconds?: number
}

type ExternalItem = {
  type: "external"
  title: string
  platform: string
  url: string
}

export default function MediaPage() {
  const featuredInterviews: Array<YouTubeItem | ExternalItem> = [
    { type: "youtube", title: "Hum News Interview", platform: "Hum News", youtubeId: "rFHzBkM2CpQ" },
    { type: "youtube", title: "Good Vibes Only Podcast", platform: "Podcast", youtubeId: "kcnKGf3IMkE" },
    { type: "youtube", title: "CxO Global Forum Talk", platform: "CxO Global Forum", youtubeId: "4LJT4s6YFQQ" },
    { type: "youtube", title: "GTV Appearance", platform: "GTV", youtubeId: "lg5bHu5DttE" },
    { type: "youtube", title: "ATV Appearance", platform: "ATV", youtubeId: "wK1ptt5Do9E" },
    { type: "youtube", title: "PTV Home Segment", platform: "PTV Home", youtubeId: "hG5VxqlDx-8", startSeconds: 1542 },
    {
      type: "external",
      title: "PTV World Interview",
      platform: "PTV World",
      url: "https://www.facebook.com/Saqibmumtaz/videos/901724221434811",
    },
  ]

  const panelTopics = [
    "AI in Marketing: Practical Adoption for SMEs",
    "Creator-led Growth and Personal Branding",
    "Author Platforms: From Zero to Authority",
    "Data-Driven Advertising for Authors",
  ]

  const workshops = [
    { title: "Amazon PPC Intensive", detail: "Three-day practical bootcamp for campaign optimization" },
    { title: "AI Content Systems", detail: "Build scalable content workflows with modern AI tools" },
    { title: "Listing Optimization", detail: "Keyword research and conversion improvements" },
    { title: "Email Marketing Funnels", detail: "Lead magnets and automated sequences" },
  ]

  const institutions = [
    "National University of Science and Technology, Rawalpindi",
    "National Defence University, Islamabad",
    "Gomal University, Dera Ismail Khan",
    "University of Turbat, Turbat",
    "Iqra University, Islamabad",
    "Cadet College Hasanabdal",
    "Innovista Rawalpindi",
  ]

  return (
    <main className="min-h-screen bg-white">
      <MediaHero />

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Mic className="w-4 h-4" /> Featured Interviews
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Media Appearances</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Insights shared across television, podcasts, and digital platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInterviews.map((item, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-0">
                  {item.type === "youtube" ? (
                    <div className="aspect-video w-full rounded-t-lg overflow-hidden">
                      <iframe
                        width="100%"
                        height="100%"
                        src={`https://www.youtube.com/embed/${item.youtubeId}?modestbranding=1&rel=0${
                          item.startSeconds ? `&start=${item.startSeconds}` : ""
                        }`}
                        title={`${item.platform} - ${item.title}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ) : (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block aspect-video bg-gradient-to-br from-blue-50 to-slate-50 hover:from-blue-100 hover:to-slate-100 rounded-t-lg border-b border-slate-200 flex items-center justify-center transition-colors"
                    >
                      <div className="text-center">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <div className="text-blue-600 font-medium">Watch on Facebook</div>
                      </div>
                    </a>
                  )}
                  <div className="p-6">
                    <div className="text-sm font-semibold text-blue-600 mb-1">{item.platform}</div>
                    <h3 className="font-bold text-slate-900 leading-tight">{item.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://www.youtube.com/watch?v=HBSFFRLZVmI" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-slate-300 hover:bg-slate-50 bg-transparent">
                View More on YouTube
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <MessageSquare className="w-4 h-4" /> Panel Discussions
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Expert Panels</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Moderating discussions on AI adoption, creator growth, and digital marketing strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {panelTopics.map((topic, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-slate-900 text-lg leading-tight">{topic}</h3>
                  <div className="text-sm text-purple-600 font-medium mt-2">Panel Discussion</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Invite to Panel
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <GraduationCap className="w-4 h-4" /> Workshops & Training
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Hands-on Learning</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Practical workshops on digital marketing, AI tools, and publishing strategies
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {workshops.map((workshop, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{workshop.title}</h3>
                  <p className="text-slate-600">{workshop.detail}</p>
                  <div className="text-sm text-green-600 font-medium mt-3">Workshop</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Delivered At</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {institutions.map((institution, index) => (
                <div key={index} className="bg-white rounded-lg p-4 text-sm text-slate-700 shadow-sm">
                  {institution}
                </div>
              ))}
            </div>
            <div className="text-center mt-6 text-sm text-slate-600">
              Regional workshops: <span className="font-medium text-slate-800">Peshawar • Quetta • Islamabad</span>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/contact">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                Request Workshop
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
