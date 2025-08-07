"use client"
import { getDictionary } from "@/lib/get-dictionary"
import { useLanguage } from "@/lib/language-context"
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

export default function Footer() {
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
    <footer
      id="footer"
      className="relative mt-20 text-white overflow-hidden rounded-t-[30px] md:rounded-t-[50px] bg-primary"
    >
      {/* Footer content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-6 md:py-12">
        <div className="flex flex-col gap-6 md:gap-10">
          {/* Main footer content */}
          <div className="md:grid md:grid-cols-3 flex flex-col gap-6 md:gap-10">
            <div className="flex flex-col">
              {/* Logo */}
              <div className="flex items-center mb-4 md:mb-6">
                <div className="h-9 w-auto">
                  <Image
                    src="/whitelogo.png"
                    alt="Aress"
                    width={150}
                    height={48}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
              </div>
              <p className="text-base opacity-80 mt-2 leading-relaxed mb-4 md:mb-6">{dict.footer.description}</p>

              {/* Social Links */}
              <div className="flex space-x-5">
                <Link href="https://www.linkedin.com/company/aress-cloud" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link href="https://web.facebook.com/aresscloud1" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://www.instagram.com/aresscloud" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.youtube.com/@aresscloud" className="opacity-80 hover:opacity-100 hover:text-white transition-colors">
                  <span className="sr-only">YouTube</span>
                  <Youtube className="h-6 w-6" />
                </Link>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="grid grid-cols-2 gap-6 md:gap-10 md:col-span-2 md:grid-cols-3">
              <div>
                <h3 className="mb-4 md:mb-6 text-xl font-bold">{dict.footer.business}</h3>
                <ul className="space-y-2 md:space-y-4">
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        if (window.location.pathname === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        } else {
                          window.location.href = '/'
                        }
                      }}
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full text-left"
                    >
                      {dict.header.accueil}
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        if (window.location.pathname === '/') {
                          const targetElement = document.getElementById('tarification')
                          if (targetElement) {
                            targetElement.scrollIntoView({
                              behavior: 'smooth',
                              block: 'start'
                            })
                          }
                        } else {
                          window.location.href = '/#tarification'
                        }
                      }}
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full text-left"
                    >
                      {dict.header.tarification}
                    </button>
                  </li>
                  <li>
                    <Link
                      href="/closers"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.header.closers}
                    </Link>
                  </li>
                  <li>
                    <a
                      href="https://app-aress.cloud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.header.connexion}
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 md:mb-6 text-xl font-bold">{dict.footer.closers}</h3>
                <ul className="space-y-2 md:space-y-4">
                  <li>
                    <button
                      onClick={(e) => {
                        e.preventDefault()
                        if (window.location.pathname === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' })
                        } else {
                          window.location.href = '/'
                        }
                      }}
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full text-left"
                    >
                      {dict.header.accueil}
                    </button>
                  </li>
                  <li>
                    <a
                      href="https://app-aress.cloud"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.header.connexion}
                    </a>
                  </li>
                  <li>
                    <Link
                      href="https://app-aress.cloud/inscription/closer"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.footer.inscription}
                    </Link>
                  </li>
                  <li>
                    <span
                      className="footer-link opacity-50 cursor-not-allowed transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all"
                      aria-disabled="true"
                    >
                      {dict.footer.aress_academy}
                    </span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="mb-4 md:mb-6 text-xl font-bold">{dict.footer.aide}</h3>
                <ul className="space-y-2 md:space-y-4">
                  <li>
                    <Link
                      href="/privacy"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.footer.privacy_policy}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.footer.terms_of_service}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="footer-link opacity-80 hover:opacity-100 hover:text-white transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all hover:after:w-full"
                    >
                      {dict.footer.contact_us}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Copyright - Centered on desktop */}
          <div className="mt-8 md:mt-12 border-t border-white/20 pt-6 md:pt-10 text-center">
            <p className="text-sm md:text-base opacity-80">
              &copy; {new Date().getFullYear()} Aress Technologies. {dict.footer.copyright}
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
