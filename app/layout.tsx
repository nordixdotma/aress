import { LanguageProvider } from "@/lib/language-context"
import { ThemeProvider } from "@/lib/theme-context"
import { Analytics } from "@vercel/analytics/next"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import type React from "react"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "Aress",
    template: "%s | Aress - Solutions de Closing International",
  },
  description:
    "Augmentez vos ventes sans payer de salaire avec Aress. Accédez à une force commerciale expérimentée sur le terrain et payez uniquement au résultat. +300 closers disponibles dans 15+ pays.",
  keywords: [
    "closing commercial",
    "force de vente",
    "paiement au résultat",
    "commission uniquement",
    "vente terrain",
    "prospection commerciale",
    "lead generation",
    "business development",
    "closers expérimentés",
    "développement commercial international",
    "solutions de vente",
    "augmenter chiffre affaires",
    "conversion clients",
    "stratégie commerciale",
    "performance commerciale"
  ],
  authors: [{ name: "Aress Technologies", url: "https://aress.cloud" }],
  creator: "Aress Technologies",
  publisher: "Aress Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://aress.cloud"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-FR": "/fr",
      "en-US": "/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://aress.cloud",
    title: "Aress - Solutions de Closing International | Paiement au Résultat",
    description:
      "Augmentez vos ventes sans payer de salaire avec Aress. Accédez à une force commerciale expérimentée sur le terrain et payez uniquement au résultat. +300 closers disponibles dans 15+ pays.",
    siteName: "Aress",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aress - Solutions de Closing International - Augmentez vos ventes sans payer de salaire",
        type: "image/jpeg",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Aress - Solutions de Closing International",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@aress_cloud",
    creator: "@aress_cloud",
    title: "Aress - Solutions de Closing International | Paiement au Résultat",
    description:
      "Augmentez vos ventes sans payer de salaire avec Aress. Accédez à une force commerciale expérimentée sur le terrain et payez uniquement au résultat.",
    images: [
      {
        url: "/og-image.jpg",
        alt: "Aress - Solutions de Closing International",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "Business Services",
  classification: "Commercial Services",
  generator: "Next.js",
  applicationName: "Aress",
  referrer: "origin-when-cross-origin",
  // ...existing code...
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#226fd3",
      },
    ],
  },
}

export const viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#226fd3" },
    { media: "(prefers-color-scheme: dark)", color: "#226fd3" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" translate="no">
      <head>
        <meta name="google" content="notranslate" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://aress.cloud" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <meta name="theme-color" content="#226fd3" />
        <meta name="msapplication-TileColor" content="#226fd3" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "@id": "https://aress.cloud/#organization",
              name: "Aress Technologies",
              alternateName: "Aress",
              url: "https://aress.cloud",
              logo: {
                "@type": "ImageObject",
                url: "https://aress.cloud/logo.png",
                width: 300,
                height: 100,
              },
              image: "https://aress.cloud/og-image.jpg",
              description:
                "Solutions de closing international. Augmentez vos ventes sans payer de salaire. Accédez à une force commerciale sur le terrain, expérimentée, et payez uniquement au résultat.",
              foundingDate: "2020",
              founders: [
                {
                  "@type": "Person",
                  name: "Fondateur Aress",
                }
              ],
              address: {
                "@type": "PostalAddress",
                streetAddress: "332 Bd Brahim Roudani",
                addressLocality: "Casablanca",
                addressRegion: "Maarif",
                postalCode: "20000",
                addressCountry: "MA",
              },
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+33-1-23-45-67-89",
                  contactType: "customer service",
                  email: "contact@aress.cloud",
                  availableLanguage: ["French", "English"],
                  areaServed: ["FR", "MA", "US", "CA"],
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+212-5-22-00-00-00",
                  contactType: "sales",
                  email: "sales@aress.cloud",
                  availableLanguage: ["French", "Arabic"],
                  areaServed: "MA",
                }
              ],
              sameAs: [
                "https://www.linkedin.com/company/aress-technologies",
                "https://twitter.com/aress_cloud",
                "https://www.facebook.com/aress.technologies",
                "https://www.youtube.com/channel/aress-technologies"
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Services de Closing Commercial",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Solutions de Closing",
                      description: "Force commerciale sur le terrain, payée uniquement au résultat",
                      serviceType: "Commercial Closing Services",
                      provider: {
                        "@id": "https://aress.cloud/#organization"
                      }
                    }
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Lead Generation",
                      description: "Génération de prospects qualifiés pour votre business",
                      serviceType: "Lead Generation Services",
                      provider: {
                        "@id": "https://aress.cloud/#organization"
                      }
                    }
                  },
                  {
                    "@type": "Service",
                    name: "Business Development",
                    description: "Développement commercial international",
                    serviceType: "Business Development Services",
                    provider: {
                      "@id": "https://aress.cloud/#organization"
                    }
                  }
                ]
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "150",
                bestRating: "5",
                worstRating: "1"
              },
              review: [
                {
                  "@type": "Review",
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5"
                  },
                  author: {
                    "@type": "Person",
                    name: "Directeur Commercial GrowthCo"
                  },
                  reviewBody: "Aress a révolutionné notre approche commerciale. Leurs closers expérimentés ont augmenté nos conversions de 300% en seulement 3 mois."
                }
              ]
            }),
          }}
        />

        {/* Structured Data - Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://aress.cloud/#website",
              url: "https://aress.cloud",
              name: "Aress - Solutions de Closing International",
              description: "Augmentez vos ventes sans payer de salaire. Accédez à une force commerciale sur le terrain, expérimentée, et payez uniquement au résultat.",
              publisher: {
                "@id": "https://aress.cloud/#organization"
              },
              potentialAction: [
                {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://aress.cloud/search?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              ],
              inLanguage: "fr-FR",
              copyrightYear: "2024",
              copyrightHolder: {
                "@id": "https://aress.cloud/#organization"
              }
            }),
          }}
        />

        {/* Structured Data - BreadcrumbList for main pages */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
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
                  name: "Services",
                  item: "https://aress.cloud/#services"
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Tarification",
                  item: "https://aress.cloud/#tarification"
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Contact",
                  item: "https://aress.cloud/contact"
                }
              ]
            }),
          }}
        />

        {/* FAQ Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Comment fonctionne le paiement au résultat ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Vous ne payez que lorsque nos closers génèrent des ventes confirmées. Nous définissons ensemble les critères de validation d'une vente et vous ne payez qu'une commission sur les résultats obtenus. Aucun coût fixe, aucun salaire à verser."
                  }
                },
                {
                  "@type": "Question",
                  name: "Combien de temps faut-il pour voir les premiers résultats ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Généralement, les premiers résultats apparaissent dans les 2-4 semaines suivant le lancement. Nos closers expérimentés s'adaptent rapidement à votre produit et à votre marché pour commencer à générer des ventes rapidement."
                  }
                },
                {
                  "@type": "Question",
                  name: "Dans quels secteurs intervenez-vous ?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Nous intervenons dans tous les secteurs B2B et B2C : SaaS, e-commerce, services, immobilier, formation, consulting, etc. Nos closers sont formés pour s'adapter à différents types de produits et de marchés."
                  }
                }
              ]
            }),
          }}
        />
      </head>
      <body className={inter.className} translate="no">
        <ThemeProvider>
          <Suspense fallback={null}>
            <LanguageProvider>{children}</LanguageProvider>
          </Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
