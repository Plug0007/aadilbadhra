"use client"

import { Shield, Code, Cpu } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    description:
      "Specializing in vulnerability assessment, penetration testing, and building secure systems from the ground up.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Creating modern, performant web applications with cutting-edge frameworks and clean architecture.",
  },
  {
    icon: Cpu,
    title: "IoT Systems",
    description:
      "Designing and developing connected device ecosystems with robust communication protocols and security.",
  },
]

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const Icon = service.icon

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl border border-[#222] bg-[#111] p-8 transition-all duration-700 hover:border-[#00ffc8]/30 hover:bg-[#141414] hover:shadow-[0_0_40px_rgba(0,255,200,0.06)] ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      {/* Hover glow corner */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00ffc8]/0 transition-all duration-500 group-hover:bg-[#00ffc8]/5 group-hover:blur-2xl" />

      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#222] bg-[#0b0b0b] transition-all duration-500 group-hover:border-[#00ffc8]/30 group-hover:shadow-[0_0_20px_rgba(0,255,200,0.1)]">
          <Icon className="h-5 w-5 text-[#00ffc8] transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="mb-3 text-lg font-medium text-white">{service.title}</h3>
        <p className="text-sm font-light leading-relaxed text-[#9ca3af]">
          {service.description}
        </p>
      </div>
    </div>
  )
}

export function Services() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`mb-16 text-center transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#00ffc8]">
            What I Do
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl">
            Services & Skills
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
