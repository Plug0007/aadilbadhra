"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const achievements = [
  {
    year: "2026",
    title: "Won College Tech Fest Competition",
    description:
      "First place in the national-level cybersecurity challenge, demonstrating advanced penetration testing skills.",
  },
  {
    year: "2025",
    title: "Published Security Research Paper",
    description:
      "Co-authored a paper on IoT vulnerability analysis, published in a peer-reviewed journal.",
  },
  {
    year: "2024",
    title: "Launched SmartNest IoT Platform",
    description:
      "Successfully deployed a smart home platform serving 200+ early adopters with real-time device management.",
  },
  {
    year: "2023",
    title: "Open Source Contributor Award",
    description:
      "Recognized as a top contributor to several cybersecurity tools and frameworks on GitHub.",
  },
]

function TimelineItem({
  item,
  index,
}: {
  item: (typeof achievements)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const isLeft = index % 2 === 0

  return (
    <div
      ref={ref}
      className={`relative flex w-full transition-all duration-700 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Desktop: alternating sides */}
      <div className={`hidden w-full items-center md:flex ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
        {/* Content */}
        <div className="w-5/12">
          <div
            className={`group rounded-xl border border-[#222] bg-[#111] p-6 transition-all duration-500 hover:border-[#00ffc8]/30 hover:bg-[#141414] ${
              isLeft ? "text-right" : "text-left"
            }`}
          >
            <span className="text-xs font-medium tracking-widest text-[#00ffc8]">
              {item.year}
            </span>
            <h3 className="mt-2 text-base font-medium text-white">{item.title}</h3>
            <p className="mt-2 text-sm font-light leading-relaxed text-[#9ca3af]">
              {item.description}
            </p>
          </div>
        </div>

        {/* Center dot */}
        <div className="flex w-2/12 justify-center">
          <div className="relative flex h-4 w-4 items-center justify-center">
            <div className="absolute h-4 w-4 rounded-full bg-[#00ffc8]/20 transition-transform duration-500 group-hover:scale-150" />
            <div className="h-2 w-2 rounded-full bg-[#00ffc8]" />
          </div>
        </div>

        {/* Spacer */}
        <div className="w-5/12" />
      </div>

      {/* Mobile: left-aligned */}
      <div className="flex items-start gap-4 md:hidden">
        <div className="flex flex-col items-center">
          <div className="h-3 w-3 rounded-full bg-[#00ffc8]" />
          <div className="w-[1px] grow bg-[#222]" />
        </div>
        <div className="pb-8">
          <span className="text-xs font-medium tracking-widest text-[#00ffc8]">
            {item.year}
          </span>
          <h3 className="mt-1 text-base font-medium text-white">{item.title}</h3>
          <p className="mt-1 text-sm font-light leading-relaxed text-[#9ca3af]">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  )
}

export function Achievements() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div
          ref={titleRef}
          className={`mb-16 text-center transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#00ffc8]">
            Milestones
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
            Achievements
          </h2>
        </div>

        {/* Timeline line (desktop) */}
        <div className="relative">
          <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-[#00ffc8]/40 via-[#00ffc8]/20 to-transparent md:block" />
          <div className="flex flex-col gap-8">
            {achievements.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
