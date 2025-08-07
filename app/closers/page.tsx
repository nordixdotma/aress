"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import { useLanguage } from "@/lib/language-context"
import { getDictionary } from "@/lib/get-dictionary"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import Head from "next/head"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

// Counter animation hook
function useCountUp(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const startCount = 0

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(startCount + (end - startCount) * easeOutQuart)
      
      setCount(currentCount)
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, isVisible])

  return { count, setIsVisible }
}

// Stats component
function StatsSection() {
  const { language } = useLanguage()
  const [dict, setDict] = useState<any>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(language)
      setDict(loadedDict)
    }
    loadDictionary()
  }, [language])

  const { count: closersCount, setIsVisible: setClosersVisible } = useCountUp(300)
  const { count: projectsCount, setIsVisible: setProjectsVisible } = useCountUp(25)
  const { count: commissionsCount, setIsVisible: setCommissionsVisible } = useCountUp(80)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setClosersVisible(true)
            setProjectsVisible(true)
            setCommissionsVisible(true)
          }
        })
      },
      { threshold: 0.3 }
    )

    // Use a timeout to ensure the DOM is ready
    const timer = setTimeout(() => {
      const statsElement = document.getElementById('stats-section')
      if (statsElement) {
        observer.observe(statsElement)
      }
    }, 100)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [setClosersVisible, setProjectsVisible, setCommissionsVisible])

  if (!dict) return null

  return (
    <section id="stats-section" className="py-16 md:py-24" aria-labelledby="stats-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center mb-12">
          <h2 id="stats-title" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 inline-block bg-primary/5 px-6 py-3 rounded-full text-primary">
            {dict.closers?.stats_title || "Aress en chiffres"}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto">
            {dict.closers?.stats_description || "Rejoignez la révolution, choisissez les projets qui vous passionnent, réalisez des transactions et gagnez des commissions."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" role="list" aria-label="Statistiques Aress">
          <div className="text-center" role="listitem">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2" aria-label={`Plus de ${closersCount} closers inscrits`}>
              +{closersCount}
            </div>
            <div className="text-base md:text-lg text-muted-foreground">
              {dict.closers?.closers_registered || "Closers inscrits"}
            </div>
          </div>
          
          <div className="text-center" role="listitem">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2" aria-label={`Plus de ${projectsCount} projets disponibles`}>
              +{projectsCount}
            </div>
            <div className="text-base md:text-lg text-muted-foreground">
              {dict.closers?.projects_available || "Projets disponibles"}
            </div>
          </div>
          
          <div className="text-center" role="listitem">
            <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2" aria-label={`Plus de ${commissionsCount}K commissions distribuées`}>
              +{commissionsCount}K
            </div>
            <div className="text-base md:text-lg text-muted-foreground">
              {dict.closers?.commissions_distributed || "Commissions distribuées"}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// How it works section (using FAQ component structure)
function HowItWorksSection() {
  const { language } = useLanguage()
  const [dict, setDict] = useState<any>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(language)
      setDict(loadedDict)
    }
    loadDictionary()
  }, [language])

  const toggleStep = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!dict) return null

  const steps = [
    {
      title: dict.closers?.step1_title || "Inscrivez vous gratuitement",
      description: dict.closers?.step1_description || "Créez votre compte en quelques clics et accédez gratuitement à la plateforme. Inscrivez-vous avec vos informations personnelles pour démarrer."
    },
    {
      title: dict.closers?.step2_title || "Complétez votre profil",
      description: dict.closers?.step2_description || "Renseignez vos compétences, expériences et préférences pour vous démarquer auprès des entreprises. Un profil complet augmente vos chances d'être sélectionné."
    },
    {
      title: dict.closers?.step3_title || "Choisissez vos projets",
      description: dict.closers?.step3_description || "Parcourez les missions disponibles (Projet) et sélectionnez celles qui correspondent à vos compétences, disponibilités et objectifs professionnels."
    },
    {
      title: dict.closers?.step4_title || "Commencez à travailler",
      description: dict.closers?.step4_description || "Rejoignez un projet, commencer à travailler à votre guise et réalisez des deals. Suivez vos progrès directement sur la plateforme."
    },
    {
      title: dict.closers?.step5_title || "Recevez vos commission",
      description: dict.closers?.step5_description || "Une fois le deal validée, recevez rapidement vos paiements en toute transparence. Vos efforts sont récompensés à la hauteur de vos performances."
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/20" aria-labelledby="how-it-works-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h3 id="how-it-works-title" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 inline-block bg-primary/5 px-6 py-3 rounded-full text-primary">
            {dict.closers?.how_it_works_title || "Comment ça marche ?"}
          </h3>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary hover:ring-1 hover:ring-primary/20 group bg-card/20 backdrop-blur-sm">
              <button
                onClick={() => toggleStep(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`step-content-${index}`}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold" aria-hidden="true">
                    {index + 1}
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                    {step.title}
                  </h3>
                </div>
                <ArrowRight
                  className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`step-content-${index}`}
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                  transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.2s ease-in-out",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "0 24px 24px 24px" : "0 24px",
                  overflow: "hidden",
                }}
                aria-hidden={openIndex !== index}
              >
                <p className="text-muted-foreground ml-12">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// FAQ Section
function ClosersFaqSection() {
  const { language } = useLanguage()
  const [dict, setDict] = useState<any>(null)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(language)
      setDict(loadedDict)
    }
    loadDictionary()
  }, [language])

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  if (!dict) return null

  const faqItems = [
    {
      question: dict.closers?.faq_q1 || "1. Comment s'inscrire sur Aress ?",
      answer: dict.closers?.faq_a1 || "Commencez par vous inscrire en tant que Closer en saisissant votre email et votre mot de passe. Ensuite, renseignez votre profil en ajoutant vos expériences, les langues que vous parlez et vos disponibilités par semaine.\n\nUne fois votre profil créé et validé, complétez les infos restantes (ex. vidéo de présentation de 30 secondes).\n\n📌 Note : Plus votre profil est complet, plus vous avez de chances d'être accepté dans plusieurs projets."
    },
    {
      question: dict.closers?.faq_q2 || "2. Comment suis-je payé ?",
      answer: dict.closers?.faq_a2 || "Vous êtes payé pour chaque deal réalisé, c'est-à-dire pour chaque résultat obtenu.\n\n💼 Un deal peut être :\n✔️ Un rendez-vous confirmé\n✔️ Une vente effectuée\n✔️ Tout autre résultat commercial demandé\n\nLes paiements se font par virement bancaire sur votre compte."
    },
    {
      question: dict.closers?.faq_q3 || "3. Quand suis-je payé ?",
      answer: dict.closers?.faq_a3 || "Le paiement des deals validés se fait une fois par semaine, chaque lundi.\n\n📅 Vous recevez chaque début de semaine toutes les commissions générées la semaine précédente."
    },
    {
      question: dict.closers?.faq_q4 || "4. Comment être sûr d'être payé ?",
      answer: dict.closers?.faq_a4 || "Aress ne travaille qu'avec des entreprises fiables.\nUn système de caution garantit toutes les commissions.\n\n🔹 Badge bleu \"Commission garantie\" : Aress a encaissé la commission à l'avance.\n🔹 Projets sans badge : Très faible risque, mais possible retard de paiement.\n\n⚠️ En cas d'incident, Aress exclut le Business et trouve un arrangement avec les Closers."
    },
    {
      question: dict.closers?.faq_q5 || "5. Est-ce que je suis payé pour les heures travaillées ?",
      answer: dict.closers?.faq_a5 || "❌ Non, Aress fonctionne sur un modèle de paiement au résultat.\nVous travaillez en freelance : vous utilisez vos moyens pour fournir des résultats.\n\n➡️ Chaque résultat fourni est bien rémunéré."
    },
    {
      question: dict.closers?.faq_q6 || "6. Combien puis-je gagner en réalisant des deals ?",
      answer: dict.closers?.faq_a6 || "Cela dépend de votre engagement et des projets.\n\n📊 Objectif : permettre à un Closer à plein temps de gagner entre 6 000 et 10 000 dirhams/mois.\n\n📈 Gagner plus ou moins dépend uniquement de vous."
    },
    {
      question: dict.closers?.faq_q7 || "7. Dois-je payer quelque chose pour commencer sur Aress ?",
      answer: dict.closers?.faq_a7 || "💰 Non, aucun paiement n'est requis.\n✅ L'inscription est gratuite.\n✅ Vous pouvez rejoindre autant de projets que vous voulez.\n\n🚀 Rejoignez Aress dès maintenant et commencez à closer vos premiers deals !"
    }
  ]

  return (
    <section className="py-16 md:py-24" aria-labelledby="faq-title">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h3 id="faq-title" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 inline-block bg-primary/5 px-6 py-3 rounded-full text-primary">
            {dict.closers?.faq_title || "Questions fréquentes"}
          </h3>
        </div>

        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-6">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary hover:ring-1 hover:ring-primary/20 group bg-card/20 backdrop-blur-sm">
              <button
                onClick={() => toggleFaq(index)}
                className="flex w-full items-center justify-between p-6 text-left focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <h3 className="text-base md:text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors duration-300">
                  {item.question}
                </h3>
                <ArrowRight
                  className={`h-5 w-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                  aria-hidden="true"
                />
              </button>
              <div
                id={`faq-content-${index}`}
                style={{
                  maxHeight: openIndex === index ? "400px" : "0px",
                  transition: "max-height 0.3s ease-in-out, opacity 0.3s ease-in-out, padding 0.2s ease-in-out",
                  opacity: openIndex === index ? 1 : 0,
                  padding: openIndex === index ? "0 24px 24px 24px" : "0 24px",
                  overflow: "hidden",
                }}
                aria-hidden={openIndex !== index}
              >
                <div className="text-muted-foreground whitespace-pre-line">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function ClosersPage() {
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
    <>
      <Head>
        <title>Closers - Aress | Travaillez Librement en Closing Commercial</title>
        <meta
          name="description"
          content="Rejoignez +300 closers Aress et travaillez librement. Choisissez vos projets, travaillez selon vos horaires et gagnez des commissions attractives. Inscription gratuite."
        />
        <meta
          name="keywords"
          content="devenir closer, travail freelance commercial, commission closing, inscription closer, métier closer, travail à domicile vente, freelance commercial"
        />
        <link rel="canonical" href="https://aress.cloud/closers" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Closers - Aress | Travaillez Librement en Closing Commercial" />
        <meta
          property="og:description"
          content="Rejoignez +300 closers Aress et travaillez librement. Choisissez vos projets, travaillez selon vos horaires et gagnez des commissions attractives."
        />
        <meta property="og:url" content="https://aress.cloud/closers" />
        
        {/* Structured Data - WebPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "@id": "https://aress.cloud/closers#webpage",
              url: "https://aress.cloud/closers",
              name: "Closers - Aress | Travaillez Librement en Closing Commercial",
              description: "Rejoignez +300 closers Aress et travaillez librement. Choisissez vos projets, travaillez selon vos horaires et gagnez des commissions attractives.",
              isPartOf: {
                "@id": "https://aress.cloud/#website"
              },
              about: {
                "@type": "Thing",
                name: "Closing Commercial Freelance"
              },
              breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://aress.cloud"
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Closers",
                    item: "https://aress.cloud/closers"
                  }
                ]
              }
            }),
          }}
        />

        {/* Structured Data - JobPosting */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "JobPosting",
              title: "Closer Commercial Freelance",
              description: "Rejoignez Aress comme closer freelance. Travaillez librement, choisissez vos projets et gagnez des commissions attractives. Paiement au résultat uniquement.",
              identifier: {
                "@type": "PropertyValue",
                name: "Aress",
                value: "closer-freelance-2024"
              },
              datePosted: "2024-01-01",
              validThrough: "2024-12-31",
              employmentType: ["CONTRACTOR", "PART_TIME", "FULL_TIME"],
              hiringOrganization: {
                "@type": "Organization",
                name: "Aress Technologies",
                sameAs: "https://aress.cloud",
                logo: "https://aress.cloud/logo.png"
              },
              jobLocation: {
                "@type": "Place",
                addressLocality: "Remote",
                addressCountry: "FR"
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "EUR",
                value: {
                  "@type": "QuantitativeValue",
                  minValue: 2000,
                  maxValue: 8000,
                  unitText: "MONTH"
                }
              },
              workHours: "Flexible",
              responsibilities: [
                "Réaliser des deals commerciaux",
                "Contacter et convertir des prospects",
                "Suivre les objectifs de performance",
                "Maintenir une relation client de qualité"
              ],
              qualifications: [
                "Expérience en vente ou closing",
                "Excellentes compétences en communication",
                "Motivation et autonomie",
                "Maîtrise du français"
              ],
              benefits: [
                "Travail flexible et à distance",
                "Paiement au résultat",
                "Formation continue",
                "Support personnalisé"
              ]
            }),
          }}
        />
      </Head>

      <div className={cn(`min-h-screen bg-background text-foreground overflow-x-hidden ${inter.className}`)} translate="no">
        <Header />
        
        {/* Skip to main content */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Aller au contenu principal
        </a>
        
        {/* Hero Section */}
        <section className="relative pt-2.5 md:pt-4 p-2.5 md:p-4" aria-labelledby="closers-hero-title">
          <div className="relative min-h-[50vh] flex flex-col overflow-hidden rounded-[20px] bg-primary">
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float-1"></div>
              <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-float-2"></div>
              <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-white/25 rounded-full blur-3xl animate-float-3"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 flex-1 flex flex-col justify-center items-center text-center py-16 backdrop-blur-sm">
              <h1 id="closers-hero-title" className="my-6 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white max-w-4xl">
                {dict.closers?.hero_title || "Travaillez librement"}
              </h1>
              <p className="mb-8 text-sm md:text-lg text-white/90 max-w-3xl leading-relaxed">
                {dict.closers?.hero_description || "Faites le métier qui vous passionne, travaillez selon vos horaires et choisissez les missions qui vous conviennent."}
              </p>
              <Button
                size="lg"
                onClick={() => window.open("https://app-aress.cloud/inscription/closer", "_blank")}
                className="bg-white hover:bg-white/90 text-primary rounded-full text-base px-8 py-4 h-12"
                aria-label="S'inscrire comme closer Aress"
              >
                {dict.closers?.cta_button || "Inscription"}
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>
        </section>

        <main id="main-content">
          {/* Stats Section */}
          <StatsSection />

          {/* How it works Section */}
          <HowItWorksSection />

          {/* Aress en vidéo Section */}
          <section className="py-16 md:py-24" aria-labelledby="video-section-title">
            <div className="mx-auto max-w-7xl px-4">
              <div className="text-center mb-12">
                <h2 id="video-section-title" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 inline-block bg-primary/5 px-6 py-3 rounded-full text-primary">
                  {dict.closers?.video_title || "Aress en vidéo"}
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/sFVM06Ms50k"
                    title={dict.closers?.video_title || "Aress en vidéo"}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <ClosersFaqSection />

          {/* Payment Section */}
          <section className="py-16 md:py-24 bg-muted/20" aria-labelledby="payment-process-title">
            <div className="mx-auto max-w-7xl px-4">
              <div className="text-center mb-12">
                <h2 id="payment-process-title" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 inline-block bg-primary/5 px-6 py-3 rounded-full text-primary">
                  {dict.closers?.payment_process_title || "Comment je suis payé ?"}
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative rounded-lg overflow-hidden shadow-2xl">
                  <img
                    src="/Payment-Closers.png"
                    alt={dict.closers?.payment_process_title || "Comment je suis payé - Processus de paiement"}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Understanding Aress Video Section */}
          <section className="py-16 md:py-24" aria-labelledby="understanding-aress-title">
            <div className="mx-auto max-w-7xl px-4">
              <div className="text-center mb-12">
                <h2 id="understanding-aress-title" className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 inline-block bg-primary/5 px-6 py-3 rounded-full text-primary">
                  {dict.closers?.understanding_aress_title || "Comprendre Aress en 45 secondes"}
                </h2>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.youtube.com/embed/NMXU4K7F5Bk"
                    title={dict.closers?.understanding_aress_title || "Comprendre Aress en 45 secondes"}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <FloatingContact />
      </div>
    </>
  )
}
