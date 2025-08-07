"use client"
import FloatingContact from "@/components/floating-contact"
import Footer from "@/components/footer"
import Header from "@/components/header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { getDictionary } from "@/lib/get-dictionary"
import { useLanguage } from "@/lib/language-context"
import { Clock, Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { useEffect, useState } from "react"
import Head from "next/head"

export default function ContactPage() {
  const { language } = useLanguage()
  const [dict, setDict] = useState<any>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  })

  useEffect(() => {
    const loadDictionary = async () => {
      const loadedDict = await getDictionary(language)
      setDict(loadedDict)
    }
    loadDictionary()
  }, [language])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!dict) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>Contact - Aress | Demandez votre Démo Gratuite</title>
        <meta
          name="description"
          content="Contactez Aress pour une démonstration gratuite de nos solutions de closing commercial. Obtenez un devis personnalisé et découvrez comment augmenter vos ventes sans payer de salaire."
        />
        <meta
          name="keywords"
          content="contact aress, démo gratuite, devis closing commercial, consultation vente, rendez-vous commercial, solutions de vente"
        />
        <link rel="canonical" href="https://aress.cloud/contact" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contact - Aress | Demandez votre Démo Gratuite" />
        <meta
          property="og:description"
          content="Contactez Aress pour une démonstration gratuite de nos solutions de closing commercial. Obtenez un devis personnalisé et découvrez comment augmenter vos ventes sans payer de salaire."
        />
        <meta property="og:url" content="https://aress.cloud/contact" />
        
        {/* Structured Data - ContactPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "@id": "https://aress.cloud/contact#contactpage",
              url: "https://aress.cloud/contact",
              name: "Contact - Aress",
              description: "Contactez Aress pour une démonstration gratuite de nos solutions de closing commercial",
              mainEntity: {
                "@type": "Organization",
                "@id": "https://aress.cloud/#organization"
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
                    name: "Contact",
                    item: "https://aress.cloud/contact"
                  }
                ]
              }
            }),
          }}
        />
      </Head>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Skip to main content */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded-md z-50"
        >
          Aller au contenu principal
        </a>
        
        {/* Hero Section */}
        <section className="relative pt-2.5 md:pt-4 p-2.5 md:p-4" aria-labelledby="contact-hero-title">
          <div className="relative min-h-[50vh] flex flex-col overflow-hidden rounded-[20px] bg-primary">
            {/* Animated gradient blobs */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl animate-float-1"></div>
              <div className="absolute top-1/2 -left-40 w-96 h-96 bg-white/15 rounded-full blur-3xl animate-float-2"></div>
              <div className="absolute -bottom-40 right-1/3 w-72 h-72 bg-white/25 rounded-full blur-3xl animate-float-3"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-7xl px-4 flex-1 flex flex-col justify-center items-center text-center py-16 backdrop-blur-sm">
              <h1 id="contact-hero-title" className="my-6 text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-white max-w-4xl">
                {dict.contact_page.title}
              </h1>
              <p className="mb-8 text-sm md:text-lg text-white/90 max-w-3xl">
                {dict.contact_page.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main id="main-content">
          <section className="pb-20 px-4" aria-labelledby="contact-main-title">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-5 gap-12">
                {/* Contact Information - Left Side */}
                <aside className="lg:col-span-2 space-y-8" aria-labelledby="contact-info-title">
                  <div>
                    <h2 id="contact-info-title" className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                      {dict.contact_page.conversation_title}
                    </h2>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                      {dict.contact_page.conversation_description}
                    </p>
                  </div>

                  {/* Contact Cards */}
                  <div className="space-y-4" role="list" aria-label="Informations de contact">
                    <div className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300" role="listitem">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg transition-colors" aria-hidden="true">
                          <Mail className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm md:text-base text-foreground">
                            {dict.contact_page.email_us}
                          </h3>
                          <a 
                            href="mailto:contact@aress.cloud" 
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                            aria-label="Envoyer un email à contact@aress.cloud"
                          >
                            contact@aress.cloud
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300" role="listitem">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg transition-colors" aria-hidden="true">
                          <Phone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm md:text-base text-foreground">
                            {dict.contact_page.call_us}
                          </h3>
                          <a 
                            href={`tel:${language === 'fr' ? '+212693503099' : '+212693503099'}`}
                            className="text-muted-foreground text-sm hover:text-primary transition-colors"
                            aria-label={`Appeler le ${language === 'fr' ? '+212 693-503099' : '+212 693-503099'}`}
                          >
                            {language === 'fr' ? '+212 693-503099' : '+212 693-503099'}
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300" role="listitem">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg transition-colors" aria-hidden="true">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm md:text-base text-foreground">
                            {dict.contact_page.visit_us}
                          </h3>
                          <address className="text-muted-foreground text-sm leading-relaxed not-italic">
                            {language === 'fr' 
                              ? '332 Bd Brahim Roudani, Maarif, Casablanca, Maroc'
                              : '332 Bd Brahim Roudani, Maarif, Casablanca, Morocco'
                            }
                          </address>
                        </div>
                      </div>
                    </div>

                    <div className="group p-4 rounded-xl border border-border/50 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300" role="listitem">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 group-hover:bg-primary/20 p-3 rounded-lg transition-colors" aria-hidden="true">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-sm md:text-base text-foreground">
                            {dict.contact_page.business_hours}
                          </h3>
                          <time className="text-muted-foreground text-sm">{dict.contact_page.mon_fri}</time>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Response Card */}
                  <div className="p-6 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20">
                    <div className="flex items-start space-x-3">
                      <div className="bg-primary/20 p-2 rounded-lg mt-1" aria-hidden="true">
                        <CheckCircle className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary text-sm md:text-base mb-2">
                          {dict.contact_page.quick_response_title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {dict.contact_page.quick_response_description}
                        </p>
                      </div>
                    </div>
                  </div>
                </aside>

                {/* Contact Form - Right Side */}
                <div className="lg:col-span-3">
                  <div className="bg-card border border-border/50 rounded-2xl px-3 md:px-8 py-6 md:py-8 shadow-sm">
                    <div className="mb-8">
                      <h2 id="contact-main-title" className="text-xl md:text-2xl font-bold text-foreground mb-2">
                        {dict.contact_page.send_message_title}
                      </h2>
                      <p className="text-muted-foreground text-sm">
                        Fill out the form below and we'll get back to you within 24 hours.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
                            {dict.contact_page.full_name} <span className="text-destructive" aria-label="requis">*</span>
                          </Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={(e) => handleInputChange('fullName', e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby="fullName-error"
                            className="h-11 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            placeholder="John Doe"
                            autoComplete="name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-sm font-medium text-foreground">
                            {dict.contact_page.email_address} <span className="text-destructive" aria-label="requis">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            required
                            aria-required="true"
                            aria-describedby="email-error"
                            className="h-11 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            placeholder="john@company.com"
                            autoComplete="email"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-sm font-medium text-foreground">
                            {dict.contact_page.company}
                          </Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={(e) => handleInputChange('company', e.target.value)}
                            className="h-11 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            placeholder="Your Company"
                            autoComplete="organization"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                            {dict.contact_page.phone_number}
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="h-11 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                            placeholder="+1 (555) 123-4567"
                            autoComplete="tel"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-sm font-medium text-foreground">
                          {dict.contact_page.service_interested_in}
                        </Label>
                        <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                          <SelectTrigger className="h-11 border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all" aria-label="Sélectionner un service">
                            <SelectValue placeholder={dict.contact_page.select_service} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="closing">{dict.services.closing_title}</SelectItem>
                            <SelectItem value="lead-generation">{dict.services.lead_generation_title}</SelectItem>
                            <SelectItem value="business-development">{dict.services.business_development_title}</SelectItem>
                            <SelectItem value="sales-training">{dict.services.sales_training_title}</SelectItem>
                            <SelectItem value="crm-integration">{dict.services.crm_integration_title}</SelectItem>
                            <SelectItem value="performance-tracking">{dict.services.performance_tracking_title}</SelectItem>
                            <SelectItem value="other">{dict.contact_page.other}</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-sm font-medium text-foreground">
                          {dict.contact_page.message} <span className="text-destructive" aria-label="requis">*</span>
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={(e) => handleInputChange('message', e.target.value)}
                          placeholder={dict.contact_page.message_placeholder}
                          required
                          aria-required="true"
                          aria-describedby="message-error"
                          rows={5}
                          className="border-border/60 focus:border-primary focus:ring-1 focus:ring-primary/20 resize-none transition-all"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center space-x-2"
                        aria-describedby={submitStatus !== 'idle' ? 'form-status' : undefined}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white" aria-hidden="true"></div>
                            <span>{dict.contact_page.sending_message}</span>
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" aria-hidden="true" />
                            <span>{dict.contact_page.send_message_button}</span>
                          </>
                        )}
                      </Button>

                      {submitStatus === 'success' && (
                        <div id="form-status" className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3" role="alert" aria-live="polite">
                          <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" aria-hidden="true" />
                          <p className="text-green-800 dark:text-green-200 text-sm">
                            {dict.contact_page.success_message}
                          </p>
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div id="form-status" className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3" role="alert" aria-live="polite">
                          <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0" aria-hidden="true" />
                          <p className="text-red-800 dark:text-red-200 text-sm">
                            {dict.contact_page.error_message}
                          </p>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Map Section */}
          <section className="py-16 px-4 bg-muted/30" aria-labelledby="map-section-title">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 id="map-section-title" className="text-2xl md:text-3xl font-bold mb-4 text-foreground">
                  {dict.contact_page.visit_us}
                </h2>
                <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
                  {language === 'fr' 
                    ? 'Retrouvez-nous à notre siège social à Casablanca'
                    : 'Find us at our headquarters in Casablanca'
                  }
                </p>
              </div>
              
              <div className="rounded-2xl overflow-hidden shadow-lg border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8944445!2d-7.6298!3d33.5731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM0JzIzLjIiTiA3wrAzNyc0Ny4zIlc!5e0!3m2!1sen!2sma!4v1635789012345!5m2!1sen!2sma"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Localisation d'Aress Technologies à Casablanca"
                  aria-label="Carte interactive montrant l'emplacement d'Aress Technologies à Casablanca"
                />
              </div>
            </div>
          </section>
        </main>

        <FloatingContact />
        <Footer />
      </div>
    </>
  )
}
