import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Mic2, Sparkles } from "lucide-react"

const photos = [
  {
    src: "business-leaders-summit-stage.jpeg",
    alt: "Wide view of Syed Saqib Mumtaz at the lectern with the summit stage behind him",
    caption: "On stage at Serena",
    width: 1200,
    height: 1600,
  },
  {
    src: "saqib-mumtaz-keynote.jpeg",
    alt: "Syed Saqib Mumtaz delivering his address at the Pakistan Business Leaders Summit",
    caption: "At the lectern",
    width: 1200,
    height: 1600,
  },
  {
    src: "saqib-mumtaz-speaking.jpeg",
    alt: "Syed Saqib Mumtaz gesturing while speaking to the summit audience",
    caption: "A moment from the talk",
    width: 1200,
    height: 1600,
  },
  {
    src: "saqib-mumtaz-portrait.jpeg",
    alt: "Portrait of Syed Saqib Mumtaz seated at the Serena event",
    caption: "Beyond the stage",
    width: 2296,
    height: 4080,
  },
]

export function SerenaGallery() {
  const leadPhoto = photos[0]
  const featurePhotos = photos.slice(1)

  return (
    <section className="py-24 bg-white" aria-labelledby="serena-gallery-title">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-end mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <Sparkles className="h-4 w-4" />
              Featured appearance
            </div>
            <h2 id="serena-gallery-title" className="mt-5 text-4xl md:text-5xl font-bold tracking-tight text-slate-950">
              Pakistan Business Leaders Summit at Serena
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-slate-600">
            <p>
              A polished look at Saqib's keynote presence, from the summit stage to the moments around the room.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                <MapPin className="h-5 w-5 text-blue-600" />
                Serena, Islamabad
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700">
                <Mic2 className="h-5 w-5 text-blue-600" />
                Business leadership keynote
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1.35fr_0.65fr] gap-6 items-stretch">
          <a
            href={`/images/serena/${leadPhoto.src}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View full photo: ${leadPhoto.caption} (opens in a new tab)`}
            className="group relative min-h-[420px] overflow-hidden rounded-[2rem] bg-slate-900 shadow-2xl shadow-slate-900/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
          >
            <Image
              src={`/images/serena/${leadPhoto.src}`}
              alt={leadPhoto.alt}
              width={leadPhoto.width}
              height={leadPhoto.height}
              sizes="(min-width: 1024px) 760px, 92vw"
              className="absolute inset-0 h-full w-full object-cover object-[center_28%] transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/15 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-200">Event highlight</p>
              <p className="mt-2 max-w-xl text-2xl font-bold leading-tight text-white">On stage with business leaders, founders, and decision makers.</p>
            </div>
          </a>

          <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-6">
            {featurePhotos.map((photo, index) => (
              <a
                key={photo.src}
                href={`/images/serena/${photo.src}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full photo: ${photo.caption} (opens in a new tab)`}
                className="group relative min-h-[210px] overflow-hidden rounded-3xl bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <Image
                  src={`/images/serena/${photo.src}`}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 320px, (min-width: 640px) 30vw, 92vw"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  style={{ objectPosition: index === 2 ? "center 35%" : "center 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 right-4 text-sm font-semibold text-white">{photo.caption}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:flex-row md:items-center md:justify-between">
          <p className="max-w-3xl text-slate-600">
            These images now live with the speaking and media assets, giving visitors a clearer visual proof point for
            conference appearances and leadership events.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 font-semibold text-blue-600 hover:text-blue-700">
            Book a speaking engagement
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
