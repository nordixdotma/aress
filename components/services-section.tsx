"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getDictionary } from "@/lib/get-dictionary"

interface SectionTitleProps {
  title: string
  subtitle?: string
}

function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="inline-block bg-primary/10 rounded-full px-4 py-1.5 md:px-6 md:py-2 mb-3 md:mb-4">
        <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">{title}</h2>
      </div>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl mx-auto mt-3 md:mt-4 text-sm md:text-base px-2">{subtitle}</p>
      )}
    </div>
  )
}

const ServiceIcon = ({ pathD, viewBox }: { pathD: string; viewBox: string }) => (
  <svg
    aria-hidden="true"
    className="w-6 h-6 md:w-8 md:h-8 text-primary group-hover:text-[#f2b542] transition-colors duration-300"
    viewBox={viewBox}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d={pathD}></path>
  </svg>
)

export default function WhyUsSection() {
  const { language } = useLanguage()
  const [dict, setDict] = useState<any>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(language)
      setDict(loadedDict)
    }
    loadDictionary()
  }, [language])

  const services = [
    {
      title: "Contrôle total du budget",
      description: "Maîtrisez vos coûts avec un modèle basé sur les résultats. Simple, efficace et sans risque.",
      icon: {
        pathD:
          "M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z",
        viewBox: "0 0 544 512",
      },
    },
    {
      title: "Closers qualifiés",
      description: "Un réseau de commerciaux experts prêts à convertir vos prospects en clients avec succès.",
      icon: {
        pathD:
          "M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z",
        viewBox: "0 0 576 512",
      },
    },
    {
      title: "Accès Immédiat",
      description: "Trouvez rapidement les profils qualifiés pour répondre à vos besoins urgents.",
      icon: {
        pathD:
          "M640 264v-16c0-8.84-7.16-16-16-16H344v-40h72c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32H224c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h72v40H16c-8.84 0-16 7.16-16 16v16c0 8.84 7.16 16 16 16h104v40H64c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h304v40h-56c-17.67 0-32 14.33-32 32v128c0 17.67 14.33 32 32 32h160c17.67 0 32-14.33 32-32V352c0-17.67-14.33-32-32-32h-56v-40h104c8.84 0 16-7.16 16-16zM256 128V64h128v64H256zm-64 320H96v-64h96v64zm352 0h-96v-64h96v64z",
        viewBox: "0 0 640 512",
      },
    },
    {
      title: "Réseau national & local",
      description: "Étendez votre présence sur des marchés locaux et à travers le pays facilement.",
      icon: {
        pathD:
          "M368 32h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zM208 88h-84.75C113.75 64.56 90.84 48 64 48 28.66 48 0 76.65 0 112s28.66 64 64 64c26.84 0 49.75-16.56 59.25-40h79.73c-55.37 32.52-95.86 87.32-109.54 152h49.4c11.3-41.61 36.77-77.21 71.04-101.56-3.7-8.08-5.88-16.99-5.88-26.44V88zm-48 232H64c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32zM576 48c-26.84 0-49.75 16.56-59.25 40H432v72c0 9.45-2.19 18.36-5.88 26.44 34.27 24.35 59.74 59.95 71.04 101.56h49.4c-13.68-64.68-54.17-119.48-109.54-152h79.73c9.5 23.44 32.41 40 59.25 40 35.34 0 64-28.65 64-64s-28.66-64-64-64zm0 272h-96c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h96c17.67 0 32-14.33 32-32v-96c0-17.67-14.33-32-32-32z",
        viewBox: "0 0 640 512",
      },
    },
    {
      title: "Sans engagement",
      description: "Collaborez sans contraintes, selon vos besoins, avec une totale flexibilité.",
      icon: {
        pathD:
          "M496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zM464 96H345.94c-21.38 0-32.09 25.85-16.97 40.97l32.4 32.4L288 242.75l-73.37-73.37c-12.5-12.5-32.76-12.5-45.25 0l-68.69 68.69c-6.25 6.25-6.25 16.38 0 22.63l22.62 22.62c6.25 6.25 16.38 6.25 22.63 0L192 237.25l73.37 73.37c12.5 12.5 32.76 12.5 45.25 0l96-96 32.4 32.4c15.12 15.12 40.97 4.41 40.97-16.97V112c.01-8.84-7.15-16-15.99-16z",
        viewBox: "0 0 512 512",
      },
    },
    {
      title: "Flexibilité Totale",
      description: "Adaptez vos projets à tout moment grâce à une solution modulable et pratique.",
      icon: {
        pathD:
          "M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z",
        viewBox: "0 0 640 512",
      },
    },
  ]

  if (!dict) {
    return null
  }

  return (
    <section id="why-us" className="py-8 md:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <SectionTitle title={dict.services.why_aress_title} subtitle={dict.services.why_aress_subtitle} />

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

const ServiceCard = ({ service }: { service: any }) => {
  const { title, description, icon } = service

  return (
    <div className="group relative rounded-xl bg-card border border-border p-3 md:p-8 shadow-sm w-full h-full flex flex-col transition-all duration-300 ease-out hover:scale-[1.02] cursor-pointer overflow-hidden hover:shadow-lg hover:shadow-[#f2b542]/20 hover:border-[#f2b542]">
      {/* Animated background blur effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out rounded-xl bg-gradient-radial from-[#f2b542]/5 via-[#f2b542]/2 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon and Title */}
        <div className="flex flex-col items-center text-center mb-4 md:mb-6">
          {/* Icon container with primary color background */}
          <div className="w-12 h-12 md:w-16 md:h-16 mb-3 md:mb-4 flex items-center justify-center bg-primary/10 rounded-full group-hover:bg-[#f2b542]/10 transition-colors duration-300">
            {icon && <ServiceIcon pathD={icon.pathD} viewBox={icon.viewBox} />}
          </div>
          <h3 className="font-bold text-card-foreground text-sm md:text-lg lg:text-xl leading-tight">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-xs md:text-sm lg:text-base leading-relaxed text-center flex-1">
          {description}
        </p>
      </div>

      {/* Hover border glow effect */}
      <div className="absolute inset-0 rounded-xl pointer-events-none transition-opacity duration-500 ease-out opacity-0 group-hover:opacity-100 border border-[#f2b542]/50 shadow-[inset_0_0_20px_rgba(242,181,66,0.1),0_0_20px_rgba(242,181,66,0.2)]" />
    </div>
  )
}
