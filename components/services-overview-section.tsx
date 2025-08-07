"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getDictionary } from "@/lib/get-dictionary"
import Image from "next/image"
import { Check } from 'lucide-react'

export default function ServicesOverviewSection() {
  const { language } = useLanguage()
  const [dict, setDict] = useState<any>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(language)
      setDict(loadedDict)
    }
    loadDictionary()
  }, [language])

  if (!dict) {
    return null
  }

  const servicesList = [
    dict.services_overview?.direct_sales || "Vente directe",
    dict.services_overview?.door_to_door || "Porte à porte",
    dict.services_overview?.lead_generation || "Génération de leads",
    dict.services_overview?.product_demo || "Démonstration de produits",
    dict.services_overview?.sample_distribution || "Distribution d'échantillons",
    dict.services_overview?.partner_identification || "Identification de partenaires",
  ]

  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* Left Image - Order 2 on mobile, 1 on desktop */}
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/Chart-1.jpg"
                alt="Services Analytics Chart"
                width={600}
                height={400}
                className="w-full h-auto object-contain rounded-lg"
                priority
              />
            </div>
          </div>

          {/* Right Content - Order 1 on mobile, 2 on desktop */}
          <div className="space-y-4 order-1 lg:order-2">
            {/* Section Title */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-primary/10 rounded-full px-4 py-1.5 md:px-6 md:py-2 mb-3 md:mb-4">
                <h2 className="text-primary text-xl md:text-2xl lg:text-3xl font-bold">
                  {dict.services_overview?.title || "SERVICES"}
                </h2>
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-foreground">
                {dict.services_overview?.main_title || "Ce que vous pouvez faire avec Aress"}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                {dict.services_overview?.description ||
                  "Accédez à des centaines de closers (commerciaux) pour diverses missions adaptées aux besoins de votre entreprise."}
              </p>
            </div>

            {/* Services List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3">
              {servicesList.map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-xs md:text-sm">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
