export interface GalleryImage {
  src: string
  alt: string
}

export interface GallerySection {
  slug: string
  title: string
  description: string
  images: GalleryImage[]
}

export const gallerySections: GallerySection[] = [
  {
    slug: "hackathon-events",
    title: "Hackathon Events",
    description:
      "Competing, collaborating, and building innovative solutions under pressure at various hackathons and coding competitions.",
    images: [
      { src: "/images/gallery-1.jpg", alt: "Hackathon team collaborating" },
      { src: "/images/hackathon-2.jpg", alt: "Brainstorming session" },
      { src: "/images/hackathon-3.jpg", alt: "Project presentation to judges" },
    ],
  },
  {
    slug: "coding-sessions",
    title: "Coding Sessions",
    description:
      "Late-night coding sessions, debugging marathons, and crafting clean code in focused development environments.",
    images: [
      { src: "/images/gallery-2.jpg", alt: "Deep focus coding session" },
      { src: "/images/coding-2.jpg", alt: "Multi-monitor development setup" },
      { src: "/images/coding-3.jpg", alt: "Code on display" },
    ],
  },
  {
    slug: "award-ceremonies",
    title: "Award Ceremonies",
    description:
      "Celebrating achievements and recognition at tech competitions, academic events, and industry award ceremonies.",
    images: [
      { src: "/images/gallery-3.jpg", alt: "Receiving award on stage" },
      { src: "/images/awards-2.jpg", alt: "Trophies and certificates" },
      { src: "/images/awards-3.jpg", alt: "Award handshake moment" },
    ],
  },
  {
    slug: "iot-projects",
    title: "IoT Projects",
    description:
      "Hands-on hardware work with Raspberry Pi, Arduino, sensors, and building connected smart systems from scratch.",
    images: [
      { src: "/images/gallery-4.jpg", alt: "Raspberry Pi project setup" },
      { src: "/images/iot-2.jpg", alt: "Arduino sensor prototype" },
      { src: "/images/iot-3.jpg", alt: "Smart home dashboard" },
    ],
  },
  {
    slug: "infrastructure",
    title: "Infrastructure & Servers",
    description:
      "Exploring data centers, configuring servers, and working with enterprise-grade infrastructure and networking equipment.",
    images: [
      { src: "/images/gallery-5.jpg", alt: "Server room walkthrough" },
      { src: "/images/server-2.jpg", alt: "Network rack close-up" },
    ],
  },
  {
    slug: "tech-conferences",
    title: "Tech Conferences",
    description:
      "Attending and presenting at technology conferences, learning from industry leaders, and networking with the community.",
    images: [
      { src: "/images/gallery-6.jpg", alt: "Conference presentation" },
      { src: "/images/conference-2.jpg", alt: "Conference audience" },
    ],
  },
]

/** Flat list used on homepage preview grid — one representative image per section */
export const galleryPreviewImages = gallerySections.map((section) => ({
  src: section.images[0].src,
  alt: section.title,
  slug: section.slug,
}))
