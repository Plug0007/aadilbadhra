import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Achievements } from "@/components/achievements"
import { Gallery } from "@/components/gallery"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0b0b]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Gallery />
      <Footer />
    </main>
  )
}
