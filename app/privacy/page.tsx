"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { getDictionary } from "@/lib/get-dictionary"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone } from 'lucide-react'
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function PrivacyPage() {
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
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-2.5 md:pt-4 p-2.5 md:p-4">
        <div className="relative min-h-[50vh] flex flex-col overflow-hidden rounded-[20px] bg-primary">
          {/* Animated gradient blobs */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float-1"></div>
            <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-float-2"></div>
            <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-white/25 rounded-full blur-3xl animate-float-3"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-7xl px-4 flex-1 flex flex-col justify-center items-center text-center py-16 backdrop-blur-sm">
            <h1 className="my-6 text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white max-w-4xl">
              {dict.privacy.title}
            </h1>
            <p className="mb-8 text-sm md:text-lg text-white/90 max-w-3xl">
              {dict.privacy.subtitle}
            </p>
            <div className="text-sm text-white/80">
              {dict.privacy.last_updated} : {dict.privacy.update_date}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-2 md:px-4 py-12 max-w-4xl">

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          {/* Introduction */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.introduction_title}
              </h2>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {dict.privacy.introduction}
              </div>
            </CardContent>
          </Card>

          {/* Section 1 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section1.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section1.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section1.subsection1.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {dict.privacy.section1.subsection1.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section1.subsection2.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {dict.privacy.section1.subsection2.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section1.subsection3.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {dict.privacy.section1.subsection3.description}
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {dict.privacy.section1.subsection3.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 2 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section2.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section2.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                {dict.privacy.section2.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Section 3 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section3.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section3.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section3.subsection1.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {dict.privacy.section3.subsection1.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section3.subsection2.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {dict.privacy.section3.subsection2.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section3.subsection3.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.privacy.section3.subsection3.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 4 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section4.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section4.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                {dict.privacy.section4.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                {dict.privacy.section4.conclusion}
              </p>
            </CardContent>
          </Card>

          {/* Section 5 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section5.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section5.description}
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4 mb-4">
                {dict.privacy.section5.rights.map((right: string, index: number) => (
                  <li key={index}>{right}</li>
                ))}
              </ul>
              <p className="text-muted-foreground font-medium">
                {dict.privacy.section5.contact_info}
              </p>
            </CardContent>
          </Card>

          {/* Section 6 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section6.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section6.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                {dict.privacy.section6.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
              <p className="text-muted-foreground">
                {dict.privacy.section6.conclusion}
              </p>
            </CardContent>
          </Card>

          {/* Section 7 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section7.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section7.description}
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section7.subsection1.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                    {dict.privacy.section7.subsection1.items.map((item: string, index: number) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-2">
                    {dict.privacy.section7.subsection2.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {dict.privacy.section7.subsection2.description}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Section 8 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section8.title}
              </h2>
              <p className="text-muted-foreground">
                {dict.privacy.section8.description}
              </p>
            </CardContent>
          </Card>

          {/* Section 9 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section9.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section9.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                {dict.privacy.section9.items.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Section 10 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section10.title}
              </h2>
              <p className="text-muted-foreground">
                {dict.privacy.section10.description}
              </p>
            </CardContent>
          </Card>

          {/* Section 11 */}
          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
                {dict.privacy.section11.title}
              </h2>
              <p className="text-muted-foreground mb-4">
                {dict.privacy.section11.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4 mb-4">
                {dict.privacy.section11.contact_details.map((detail: string, index: number) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
              <p className="text-muted-foreground italic">
                {dict.privacy.section11.conclusion}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Contact Section */}
        <Card className="mt-12 bg-primary/5 border-primary/20">
          <CardContent className="p-6 md:p-8 text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-4 text-primary">
              {dict.privacy.contact.title}
            </h2>
            <p className="text-muted-foreground mb-6">
              {dict.privacy.contact.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">
                  <Phone className="mr-2 h-4 w-4" />
                  {dict.privacy.contact.contact_button}
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:contact@aress.cloud">
                  <Mail className="mr-2 h-4 w-4" />
                  {dict.privacy.contact.email_button}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
