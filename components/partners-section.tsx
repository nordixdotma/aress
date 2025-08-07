"use client"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

const partnerLogos = [
  {
    src: "/logo-retina-1.png",
    alt: "Partner 1",
    width: 120,
    height: 60,
  },
  {
    src: "/logo_dijon.png",
    alt: "Partner 2",
    width: 120,
    height: 60,
  },
  {
    src: "/X4.png",
    alt: "Partner 3",
    width: 120,
    height: 60,
  },
  {
    src: "/logo_marocexpress_008100361_3350@2x.webp",
    alt: "Partner 4",
    width: 120,
    height: 60,
  },
  {
    src: "/1617186700logo-dark.png",
    alt: "Partner 5",
    width: 120,
    height: 60,
  },
]

export default function PartnersSection() {
  return (
    <section className="pb-4">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="w-full">
          <Marquee>
            {partnerLogos.map((logo, index) => (
              <div key={index} className="relative h-full w-fit mx-[3rem] flex items-center justify-start group">
                <div className="relative overflow-hidden rounded-lg transition-all duration-300">
                  <Image
                    src={logo.src || "/placeholder.svg"}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain transition-all duration-300 filter brightness-0 invert group-hover:filter-none"
                    style={{
                      maxWidth: "100px",
                      height: "auto",
                    }}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  )
}
