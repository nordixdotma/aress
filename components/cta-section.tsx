"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getDictionary } from "@/lib/get-dictionary"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'
import Image from "next/image"

export default function CtaSection() {
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

  return (
    <section className="py-10 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="relative overflow-hidden rounded-[20px] bg-primary">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center min-h-[250px]">
            {/* Left Content */}
            <div className="p-6 md:p-8 lg:p-12 text-white lg:col-span-1 col-span-1">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                {dict.cta_section.title}
              </h2>

              <p className="text-sm md:text-md mb-6 opacity-90 leading-tight md:leading-relaxed">{dict.cta_section.description}</p>

              <div className="space-y-6">
                <Button
                  size="lg"
                  className="bg-[#f2b542] text-white hover:bg-[#f2b542]/90 border-none px-8 py-4 text-lg rounded-full"
                  onClick={() => window.open("https://calendly.com/client-aress/demo", "_blank")}
                >
                  {dict.cta_section.cta_button}
                </Button>

                <div className="flex items-center space-x-3">
                  <div className="w-6 h-5 md:h-6 rounded-full flex items-center justify-center bg-white">
                    <Check className="w-4 h-4 bg-transparent text-[rgba(242,181,66,1)]" />
                  </div>
                  <span className="text-white/90 text-sm leading-tight md:leading-relaxed">{dict.cta_section.feature_text}</span>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-full min-h-[250px] lg:min-h-[320px] hidden lg:block">
              <Image
                src="/pic-10.png"
                alt="Professional person"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
