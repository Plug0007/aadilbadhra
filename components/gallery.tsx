"use client"

import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { galleryPreviewImages } from "@/lib/gallery-data"

function GalleryItem({
  image,
  index,
}: {
  image: (typeof galleryPreviewImages)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-8 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link
        href={`/gallery#${image.slug}`}
        className="group relative block overflow-hidden rounded-lg"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-[#0b0b0b]/0 transition-all duration-500 group-hover:bg-[#0b0b0b]/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <p className="text-sm font-light tracking-wide text-white">
            {image.alt}
          </p>
          <span className="rounded-full border border-[#00ffc8]/40 px-3 py-1 text-xs font-light text-[#00ffc8] transition-colors duration-300 group-hover:bg-[#00ffc8]/10">
            View All
          </span>
        </div>
      </Link>
    </div>
  )
}

export function Gallery() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <section id="gallery" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`mb-16 text-center transition-all duration-700 ${
            titleVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#00ffc8]">
            Snapshots
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
            Gallery
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {galleryPreviewImages.map((image, i) => (
            <GalleryItem key={image.src} image={image} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
