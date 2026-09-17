import Image from "next/image"

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
  return (
    <section className="py-20 bg-slate-50" aria-labelledby="serena-gallery-title">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold text-blue-600 mb-3">Serena · 2026</p>
          <h2 id="serena-gallery-title" className="text-3xl md:text-4xl font-bold text-slate-900">
            Pakistan Business Leaders Summit
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Moments from the stage and around the event with Syed Saqib Mumtaz.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {photos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm">
              <a
                href={`/images/serena/${photo.src}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View full photo: ${photo.caption} (opens in a new tab)`}
                className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600"
              >
                <Image
                  src={`/images/serena/${photo.src}`}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  sizes="(min-width: 1024px) 260px, (min-width: 640px) 45vw, 90vw"
                  className="w-full h-auto"
                />
              </a>
              <figcaption className="p-4 text-sm font-medium text-slate-700">{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
