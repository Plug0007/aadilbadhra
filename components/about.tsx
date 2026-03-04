"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { Shield, Code, Cpu, Globe, Lock, Database, Wifi, Brain, Search, FileCode, Server, Terminal } from "lucide-react"

const skills = [
  { icon: Shield, label: "Penetration Testing" },
  { icon: Lock, label: "Vulnerability Assessment" },
  { icon: Code, label: "Full Stack Development" },
  { icon: Cpu, label: "IoT Systems" },
  { icon: Database, label: "Database Design" },
  { icon: Globe, label: "Network Security" },
]

const technologies = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "C/C++",
  "Linux",
  "Wireshark",
  "Burp Suite",
  "Docker",
  "AWS",
  "MongoDB",
  "PostgreSQL",
  "Raspberry Pi",
  "Arduino",
]

const researchAreas = [
  {
    icon: Search,
    title: "Threat Intelligence",
    description: "Analyzing emerging cyber threats and developing proactive defense strategies for modern attack vectors.",
  },
  {
    icon: Wifi,
    title: "IoT Security",
    description: "Researching vulnerabilities in connected devices and building secure communication protocols for IoT ecosystems.",
  },
  {
    icon: Brain,
    title: "AI in Cybersecurity",
    description: "Exploring machine learning applications for intrusion detection, malware analysis, and automated threat response.",
  },
  {
    icon: FileCode,
    title: "Secure Software Development",
    description: "Studying best practices for building applications with security baked in from architecture to deployment.",
  },
]

function SkillBadge({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const Icon = skill.icon

  return (
    <div
      ref={ref}
      className={`group flex items-center gap-3 rounded-xl border border-[#222] bg-[#111] px-5 py-4 transition-all duration-500 hover:border-[#00ffc8]/30 hover:bg-[#141414] hover:shadow-[0_0_30px_rgba(0,255,200,0.06)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Icon className="h-5 w-5 text-[#00ffc8] transition-transform duration-500 group-hover:scale-110" />
      <span className="text-sm font-light text-white">{skill.label}</span>
    </div>
  )
}

function TechTag({ tech, index }: { tech: string; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLSpanElement>({ threshold: 0.2 })

  return (
    <span
      ref={ref}
      className={`inline-block rounded-full border border-[#222] bg-[#0b0b0b] px-4 py-2 text-xs font-light tracking-wide text-[#9ca3af] transition-all duration-500 hover:border-[#00ffc8]/40 hover:text-[#00ffc8] hover:shadow-[0_0_20px_rgba(0,255,200,0.08)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {tech}
    </span>
  )
}

function ResearchCard({ area, index }: { area: (typeof researchAreas)[0]; index: number }) {
  const [ref, isVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const Icon = area.icon

  return (
    <div
      ref={ref}
      className={`group relative overflow-hidden rounded-xl border border-[#222] bg-[#111] p-8 transition-all duration-700 hover:border-[#00ffc8]/30 hover:bg-[#141414] hover:shadow-[0_0_40px_rgba(0,255,200,0.06)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00ffc8]/0 transition-all duration-500 group-hover:bg-[#00ffc8]/5 group-hover:blur-2xl" />

      <div className="relative z-10">
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg border border-[#222] bg-[#0b0b0b] transition-all duration-500 group-hover:border-[#00ffc8]/30 group-hover:shadow-[0_0_20px_rgba(0,255,200,0.1)]">
          <Icon className="h-5 w-5 text-[#00ffc8] transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="mb-3 text-lg font-medium text-white">{area.title}</h3>
        <p className="text-sm font-light leading-relaxed text-[#9ca3af]">
          {area.description}
        </p>
      </div>
    </div>
  )
}

export function About() {
  const [titleRef, titleVisible] = useScrollReveal<HTMLDivElement>()
  const [bioRef, bioVisible] = useScrollReveal<HTMLDivElement>({ threshold: 0.2 })
  const [skillsTitleRef, skillsTitleVisible] = useScrollReveal<HTMLDivElement>()
  const [techTitleRef, techTitleVisible] = useScrollReveal<HTMLDivElement>()
  const [researchTitleRef, researchTitleVisible] = useScrollReveal<HTMLDivElement>()

  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div
          ref={titleRef}
          className={`mb-16 text-center transition-all duration-700 ${
            titleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.3em] text-[#00ffc8]">
            About Me
          </p>
          <h2 className="text-3xl font-extralight tracking-tight text-white sm:text-4xl text-balance">
            Cybersecurity Enthusiast & Builder
          </h2>
        </div>

        {/* Bio */}
        <div
          ref={bioRef}
          className={`mx-auto mb-24 max-w-3xl text-center transition-all duration-700 ${
            bioVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <p className="text-base font-light leading-relaxed text-[#9ca3af]">
            {
              "I'm a cybersecurity enthusiast and full stack developer with a passion for building secure, innovative digital experiences. From penetration testing and vulnerability assessment to crafting modern web applications and IoT systems, I thrive at the intersection of security and development. I believe in learning by doing, breaking things to understand how they work, and building them back stronger."
            }
          </p>
        </div>

        {/* Skills */}
        <div className="mb-24">
          <div
            ref={skillsTitleRef}
            className={`mb-10 transition-all duration-700 ${
              skillsTitleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-xl font-light tracking-tight text-white">
              <span className="mr-3 text-[#00ffc8]">//</span>Skills
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, i) => (
              <SkillBadge key={skill.label} skill={skill} index={i} />
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-24">
          <div
            ref={techTitleRef}
            className={`mb-10 transition-all duration-700 ${
              techTitleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-xl font-light tracking-tight text-white">
              <span className="mr-3 text-[#00ffc8]">//</span>Technologies
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech, i) => (
              <TechTag key={tech} tech={tech} index={i} />
            ))}
          </div>
        </div>

        {/* Research Areas */}
        <div>
          <div
            ref={researchTitleRef}
            className={`mb-10 transition-all duration-700 ${
              researchTitleVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h3 className="text-xl font-light tracking-tight text-white">
              <span className="mr-3 text-[#00ffc8]">//</span>Research Areas
            </h3>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {researchAreas.map((area, i) => (
              <ResearchCard key={area.title} area={area} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
