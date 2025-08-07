"use client"

import { getDictionary } from "@/lib/get-dictionary"
import { useLanguage } from "@/lib/language-context"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import PartnersSection from "@/components/partners-section"
import { ArrowRight } from 'lucide-react'
import Image from "next/image"

export default function HeroSection() {
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
    <section className="relative pt-2.5 md:pt-4 min-h-[100dvh] flex flex-col p-2.5 md:p-4">
      <div className="relative min-h-[calc(100dvh-20px)] md:min-h-[calc(100dvh-32px)] flex flex-col overflow-hidden rounded-[20px] bg-primary">
        {/* Animated gradient blobs - always white */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float-1"></div>
          <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-float-2"></div>
          <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-white/25 rounded-full blur-3xl animate-float-3"></div>
          <div
            className="absolute top-1/4 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-2xl animate-float-1"
            style={{ animationDelay: "-3s" }}
          ></div>
          <div
            className="absolute bottom-1/4 -right-20 w-56 h-56 bg-white/20 rounded-full blur-2xl animate-float-2"
            style={{ animationDelay: "-1s" }}
          ></div>
        </div>

        {/* Content with backdrop blur */}
        <div className="relative z-10 mx-auto max-w-7xl mt-12 px-4 flex-1 flex flex-col justify-between py-4 backdrop-blur-sm">
          <div className="flex-1 flex items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center w-full">
              {/* Left Column: Content */}
              <div className="flex flex-col justify-center max-w-full md:max-w-none">
                <div className="flex items-center mb-4 md:mb-6">
                  <div className="flex items-center space-x-2 md:space-x-3">
                    <div className="flex -space-x-2 md:-space-x-3">
                      <img
                        src="https://images.unsplash.com/photo-1718209881014-83732ea8376d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Customer"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm"
                      />
                      <img
                        src="https://plus.unsplash.com/premium_photo-1708110769673-c97bb8d17453?q=80&w=838&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Customer"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm"
                      />
                      <img
                        src="https://images.unsplash.com/photo-1647436595356-603cea353274?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Customer"
                        className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white shadow-sm"
                      />
                    </div>
                    <div className="text-xs md:text-sm">
                      <span className="font-semibold text-[#f2b542]">600+</span>
                      <span className="text-white/80 ml-1">{dict.hero.closers_available}</span>
                    </div>
                  </div>
                </div>
                <h1 className="mb-3 md:mb-4 text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-white max-w-[85%] md:max-w-none">
                  {dict.hero.main_title || "Augmentez vos ventes sans payer de salaire."}
                </h1>
                <p className="mb-6 md:mb-8 text-xs md:text-lg text-white/90 max-w-[90%] md:max-w-none">{dict.hero.description}</p>
                <div className="flex flex-row gap-2 md:flex-row md:gap-4 items-start max-w-[90%] md:max-w-none">
                  <Button
                    size="sm"
                    onClick={() => window.open("https://app-aress.cloud/inscription/business", "_blank")}
                    className="bg-white hover:bg-white/90 text-primary rounded-full md:flex-1 md:flex-none text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 h-9 md:h-11"
                  >
                    <span className="hidden md:inline">{dict.hero.cta_button || "Inscription"}</span>
                    <span className="md:hidden">Inscription</span>
                    <ArrowRight className="ml-1 md:ml-2 h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => window.open("https://calendly.com/client-aress/demo", "_blank")}
                    className="rounded-full border-white text-white hover:text-primary hover:bg-white bg-transparent md:flex-1 md:flex-none text-xs md:text-sm px-4 py-2 md:px-6 md:py-3 h-9 md:h-11"
                  >
                    <span className="hidden md:inline">Consultation</span>
                    <span className="md:hidden">Consultation</span>
                  </Button>
                </div>
              </div>

              {/* Right Column: Image with Floating Elements */}
              <div className="hidden md:flex justify-center md:justify-end">
                <div className="relative h-[250px] w-full max-w-[650px] md:h-[325px] lg:h-[350px] rounded-lg overflow-hidden shadow-xl border border-white/20">
                  <Image
                    src="/pic-7.jpg"
                    alt="Professional business person"
                    fill
                    className="object-cover"
                    priority
                  />
                  
                  {/* Floating business-related cards */}
                  <div className="absolute inset-0 pointer-events-none">
                    {/* Commission Only Card */}
                    <div 
                      className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 animate-float-1 flex items-center space-x-2"
                      style={{ animationDelay: "0s" }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">%</span>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-gray-800">{dict.hero.commission_only}</div>
                        <div className="text-gray-600 text-xs">Seulement</div>
                      </div>
                    </div>
                    
                    {/* No Fixed Costs Card */}
                    <div 
                      className="absolute top-1/3 left-2 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 animate-float-2 flex items-center space-x-2"
                      style={{ animationDelay: "-1s" }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-[#f2b542] to-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">0€</span>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-gray-800">{dict.hero.no_fixed_costs}</div>
                        <div className="text-gray-600 text-xs">Zéro</div>
                      </div>
                    </div>
                    
                    {/* Active Closers Card */}
                    <div 
                      className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 animate-float-3 flex items-center space-x-2"
                      style={{ animationDelay: "-2s" }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">👨‍💼</span>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-gray-800">600+</div>
                        <div className="text-gray-600 text-xs">{dict.hero.closers_available}</div>
                      </div>
                    </div>
                    
                    {/* Success Rate Card */}
                    <div 
                      className="absolute bottom-6 left-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 animate-float-1 flex items-center space-x-2"
                      style={{ animationDelay: "-3s" }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-gray-800">89%</div>
                        <div className="text-gray-600 text-xs">Taux succès</div>
                      </div>
                    </div>
                    
                    {/* 24/7 Available Card */}
                    <div 
                      className="absolute top-1/2 right-1/4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-xl border border-white/20 animate-float-2 flex items-center space-x-2"
                      style={{ animationDelay: "-1.5s" }}
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">24</span>
                      </div>
                      <div className="text-sm">
                        <div className="font-bold text-gray-800">24/7</div>
                        <div className="text-gray-600 text-xs">Disponible</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section - Fixed at bottom with minimal spacing */}
          <div className="flex-shrink-0">
            <PartnersSection />
          </div>
        </div>
      </div>
    </section>
  )
}
