"use client"

import { useParallax } from "@/hooks/use-parallax"
import { useEffect, useState } from "react"

export function Hero() {
  const offset = useParallax(0.4)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${offset}px)` }}
      >
        <img
          src="/images/hero-bg.jpg"
          alt=""
          className="h-[120%] w-full object-cover"
          crossOrigin="anonymous"
        />
        <div className="absolute inset-0 bg-[#0b0b0b]/70" />
      </div>

      {/* Glow effect */}
      <div className="absolute bottom-0 left-1/2 z-[1] h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-[#00ffc8]/5 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center">
        <h1
          className={`text-5xl font-extralight tracking-tight text-white transition-all duration-1000 sm:text-7xl lg:text-8xl ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="text-balance">Aadil Badhra</span>
        </h1>
        <p
          className={`max-w-lg text-base font-light tracking-wide text-[#9ca3af] transition-all duration-1000 delay-200 sm:text-lg ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Cybersecurity Enthusiast & Full Stack Developer
        </p>
        <a
          href="#projects"
          className={`mt-4 inline-flex items-center rounded-full bg-[#00ffc8] px-8 py-3 text-sm font-medium text-[#0b0b0b] transition-all duration-500 delay-500 hover:shadow-[0_0_30px_rgba(0,255,200,0.4)] hover:scale-105 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          View Projects
        </a>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          loaded ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-8 w-5 items-start justify-center rounded-full border border-[#333] p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[#00ffc8]" />
        </div>
      </div>
    </section>
  )
}
