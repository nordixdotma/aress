"use client"

import { useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import FloatingContact from "@/components/floating-contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import PaymentSection from "@/components/payment-section"
import WhyUsSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import CtaSection from "@/components/cta-section"
import ServicesOverviewSection from "@/components/services-overview-section"
import { Inter } from 'next/font/google'
import Head from "next/head"
import Loader from "@/components/loader"
import { cn } from "@/lib/utils"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function Home() {
  const searchParams = useSearchParams()
  const [showLoader, setShowLoader] = useState(false)
  const [contentReady, setContentReady] = useState(false)

  useEffect(() => {
    // Check if this is the first visit to the website
    const hasVisited = sessionStorage.getItem('hasVisitedWebsite')
    
    if (!hasVisited) {
      // First visit - show loader
      setShowLoader(true)
      sessionStorage.setItem('hasVisitedWebsite', 'true')
    } else {
      // Not first visit - show content immediately
      setContentReady(true)
    }

    const hash = window.location.hash
    if (hash) {
      const elementId = hash.substring(1)
      const element = document.getElementById(elementId)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
    }
  }, [searchParams])

  const handleLoaderAnimationEnd = () => {
    setShowLoader(false)
    setContentReady(true)
  }

  return (
    <>
      <Head>
        <title>Aress - Solutions de Closing International | Paiement au Résultat</title>
        <meta
          name="description"
          content="Augmentez vos ventes sans payer de salaire avec Aress. Accédez à une force commerciale expérimentée sur le terrain et payez uniquement au résultat. +300 closers disponibles dans 15+ pays."
        />
        <meta
          name="keywords"
          content="closing commercial, force de vente, paiement au résultat, commission uniquement, vente terrain, prospection commerciale, lead generation, business development, closers expérimentés, développement commercial international"
        />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <link rel="canonical" href="https://aress.cloud" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Aress - Solutions de Closing International | Paiement au Résultat" />
        <meta
          property="og:description"
          content="Augmentez vos ventes sans payer de salaire avec Aress. Accédez à une force commerciale expérimentée sur le terrain et payez uniquement au résultat. +300 closers disponibles dans 15+ pays."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://aress.cloud" />
        <meta property="og:image" content="https://aress.cloud/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Aress - Solutions de Closing International - Augmentez vos ventes sans payer de salaire" />
        <meta property="og:site_name" content="Aress" />
        <meta property="og:locale" content="fr_FR" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@aress_cloud" />
        <meta name="twitter:creator" content="@aress_cloud" />
        <meta name="twitter:title" content="Aress - Solutions de Closing International | Paiement au Résultat" />
        <meta
          name="twitter:description"
          content="Augmentez vos ventes sans payer de salaire avec Aress. Accédez à une force commerciale expérimentée sur le terrain et payez uniquement au résultat."
        />
        <meta name="twitter:image" content="https://aress.cloud/og-image.jpg" />
        <meta name="twitter:image:alt" content="Aress - Solutions de Closing International" />

        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Aress Technologies" />
        <meta name="publisher" content="Aress Technologies" />
        <meta name="copyright" content="Aress Technologies" />
        <meta name="language" content="French" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="geo.position" content="46.603354;1.888334" />
        <meta name="ICBM" content="46.603354, 1.888334" />

        {/* Preload critical resources */}
        <link rel="preload" href="/whitelogo.png" as="image" type="image/png" />
        <link rel="preload" href="/blacklogo.png" as="image" type="image/png" />
      </Head>

      {showLoader && <Loader onAnimationEnd={handleLoaderAnimationEnd} />}

      <div
        className={cn(
          `min-h-screen bg-background text-foreground overflow-x-hidden ${inter.className}`,
          "transition-opacity duration-500 ease-in-out",
          contentReady ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          showLoader && "overflow-y-hidden h-screen",
        )}
        translate="no"
      >
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Aller au contenu principal
        </a>

        {/* Main content */}
        <div className="relative z-10">
          <Header />
          <main id="main-content">
            <HeroSection />
            <ServicesOverviewSection />
            <PaymentSection />
            <WhyUsSection />
            <CtaSection />
            <TestimonialsSection />
          </main>
          <Footer />
          <FloatingContact />
        </div>
      </div>
    </>
  )
}
