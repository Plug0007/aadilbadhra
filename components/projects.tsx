"use client"

import { ArrowUpRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

const projects = [
  {
    title: "NetGuard Pro",
    category: "Cybersecurity",
    description:
      "Real-time network monitoring and intrusion detection system with AI-driven threat analysis.",
    image: "/images/project-1.jpg",
  },
  {
    title: "DevFlow Dashboard",
    category: "Web Development",
    description:
      "A full-stack analytics platform for developer productivity tracking and project management.",
    image: "/images/project-2.jpg",
  },
  {
    title: "SmartNest IoT",
    category: "IoT Systems",
    description:
      "Connected smart home ecosystem with real-time sensor data visualization and automated controls.",
    image: "/images/project-3.jpg",
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0]
  index: number
}) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.15 })

  return (
    <div
      ref={ref}
      className={`group cursor-pointer overflow-hidden rounded-xl border border-[#222] bg-[#111] transition-all duration-700 hover:border-[#00ffc8]/30 hover:shadow-[0_0_50px_rgba(0,255,200,0.08)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      {/* Image Container with zoom on hover */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-[#0b0b0b]/30 transition-opacity duration-500 group-hover:opacity-0" />

        {/* Category badge */}
        <span className="absolute left-4 top-4 rounded-full border border-[#00ffc8]/20 bg-[#0b0b0b]/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[#00ffc8] backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-lg font-medium text-white transition-colors duration-300 group-hover:text-[#00ffc8]">
          {project.title}
        </h3>
        <p className="mb-4 text-sm font-light leading-relaxed text-[#9ca3af]">
          {project.description}
        </p>
        <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-[#00ffc8] transition-all duration-300 group-hover:gap-2">
          View details
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </div>
  )
}

export function Projects() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <section id="projects" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div
          ref={titleRef}
          className={`mb-16 text-center transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#00ffc8]">
            Portfolio
          </p>
          <h2 className="text-3xl font-extralight uppercase tracking-widest text-white sm:text-4xl">
            The Projects
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
