"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getDictionary } from "@/lib/get-dictionary"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PaymentSection() {
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
    <section id="tarification" className="w-full bg-primary py-12 md:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-4 md:space-y-6">
            <div>
              <div className="inline-block bg-[#f2b542]/10 rounded-full px-4 py-1.5 md:px-6 md:py-2 mb-3 md:mb-4">
                <h2 className="text-[#f2b542] text-xl md:text-2xl lg:text-3xl font-bold">{dict.payment.title}</h2>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 opacity-90">{dict.payment.subtitle}</h3>
              <p className="text-xs md:text-sm leading-relaxed opacity-80 mb-4 md:mb-6">
                {dict.payment.description.includes("un abonnement symbolique") ? (
                  <>
                    Moyennant{" "}
                    <strong className="font-semibold">un abonnement symbolique</strong>{" "}
                    à la plateforme, vous gardez un contrôle total sur votre budget : aucun deal réussi, aucune commission à payer.
                  </>
                ) : dict.payment.description.includes("symbolic platform subscription") ? (
                  <>
                    With a{" "}
                    <strong className="font-semibold">symbolic platform subscription</strong>, you maintain total control over your budget: no successful deal, no commission to pay.
                  </>
                ) : (
                  dict.payment.description
                )}
              </p>
            </div>

            {/* Features */}
            <div className="space-y-3 md:space-y-4">
              <div className="bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#f2b542] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-black">{dict.payment.step1_title}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {dict.payment.step1_description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-border p-4 md:p-6 shadow-sm">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-[#f2b542] rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-black">{dict.payment.step2_title}</h4>
                    <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                      {dict.payment.step2_description}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button 
                size="lg" 
                className="bg-[#f2b542] text-white hover:bg-[#f2b542]/90 font-semibold border-none flex-1 rounded-full h-12 px-6 py-3 min-h-[48px]"
              >
                {dict.payment.cta1}
              </Button>
              <Button 
                size="lg" 
                className="bg-[#61ce70] text-white hover:bg-[#61ce70]/90 font-semibold border-none flex-1 rounded-full h-12 px-6 py-3 min-h-[48px]"
              >
                {dict.payment.cta2}
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg">
              <Image
                src="/Chart.png"
                alt="Chart showing payment results"
                width={500}
                height={400}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  )
}
