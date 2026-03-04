"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { gallerySections, type GallerySection } from "@/lib/gallery-data"

function GallerySectionBlock({
  section,
  index,
}: {
  section: GallerySection
  index: number
}) {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  })

  return (
    <section id={section.slug} className="scroll-mt-24">
      <div
        ref={titleRef}
        className={`mb-8 transition-all duration-700 ${
          titleVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
        style={{ transitionDelay: `${index * 50}ms` }}
      >
        <div className="mb-2 flex items-center gap-3">
          <span className="font-mono text-xs text-[#00ffc8]/60">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="h-px flex-1 bg-[#222]" />
        </div>
        <h2 className="text-2xl font-extralight tracking-tight text-white sm:text-3xl">
          {section.title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm font-light leading-relaxed text-[#9ca3af]">
          {section.description}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {section.images.map((image, imgIndex) => (
          <GalleryImage
            key={image.src}
            image={image}
            delay={imgIndex * 100}
          />
        ))}
      </div>
    </section>
  )
}

function GalleryImage({
  image,
  delay,
}: {
  image: { src: string; alt: string }
  delay: number
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.1 })

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-lg transition-all duration-700 ${
        isVisible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-6 opacity-0 scale-95"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <img
        src={image.src}
        alt={image.alt}
        className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        crossOrigin="anonymous"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0b]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 transition-all duration-500 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
        <p className="text-sm font-light text-white">{image.alt}</p>
      </div>
    </div>
  )
}

function SideNav() {
  return (
    <nav className="hidden lg:block fixed top-1/2 right-8 -translate-y-1/2 z-40">
      <div className="flex flex-col gap-3">
        {gallerySections.map((section) => (
          <a
            key={section.slug}
            href={`#${section.slug}`}
            className="group flex items-center gap-3 justify-end"
          >
            <span className="text-xs font-light text-[#555] opacity-0 transition-all duration-300 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#9ca3af]">
              {section.title}
            </span>
            <span className="h-2 w-2 rounded-full border border-[#333] bg-transparent transition-all duration-300 group-hover:border-[#00ffc8] group-hover:bg-[#00ffc8] group-hover:shadow-[0_0_8px_rgba(0,255,200,0.4)]" />
          </a>
        ))}
      </div>
    </nav>
  )
}

export default function GalleryPage() {
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1)
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 100)
      }
    }
  }, [])

  const [heroRef, heroVisible] = useScrollReveal<HTMLDivElement>({
    threshold: 0.1,
  })

  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#222] bg-[#0b0b0b]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link
            href="/#gallery"
            className="flex items-center gap-2 text-sm font-light tracking-wide text-[#9ca3af] transition-colors duration-300 hover:text-[#00ffc8]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
          <span className="text-lg font-light tracking-widest text-white">
            Gallery
          </span>
          <div className="w-[140px]" />
        </div>
      </header>

      {/* Hero */}
      <div className="px-6 pt-32 pb-16">
        <div
          ref={heroRef}
          className={`mx-auto max-w-4xl text-center transition-all duration-700 ${
            heroVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-[#00ffc8]">
            Full Collection
          </p>
          <h1 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl">
            Photo Gallery
          </h1>
          <p className="mt-4 text-base font-light leading-relaxed text-[#9ca3af]">
            A curated collection of moments from hackathons, coding sessions,
            conferences, and the projects that define my journey.
          </p>
        </div>
      </div>

      <SideNav />

      {/* Sections */}
      <div className="mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-32">
        {gallerySections.map((section, i) => (
          <GallerySectionBlock key={section.slug} section={section} index={i} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-[#222] px-6 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <Link
            href="/#gallery"
            className="inline-flex items-center gap-2 rounded-full border border-[#00ffc8]/30 px-6 py-3 text-sm font-light text-[#00ffc8] transition-all duration-300 hover:bg-[#00ffc8]/10 hover:border-[#00ffc8]/60 hover:shadow-[0_0_20px_rgba(0,255,200,0.15)]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>
    </main>
  )
}
