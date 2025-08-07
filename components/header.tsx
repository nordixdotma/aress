"use client"

import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/get-dictionary"
import { useLanguage } from "@/lib/language-context"
import { useTheme } from "@/lib/theme-context"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, Menu, Moon, Sun, X } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)

  const { theme, toggleTheme } = useTheme()
  const { language, setLanguage } = useLanguage()
  const [dict, setDict] = useState<any>(null)

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false)
      }
    }

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  const navItems = [
    { name: dict?.header.accueil || "Accueil", href: "/", isHome: true },
    { name: dict?.header.tarification || "Tarification", href: "/#tarification", smooth: true },
    { name: dict?.header.closers || "Closers", href: "/closers" },
    { name: dict?.header.connexion || "Connexion", href: "https://app-aress.cloud", external: true },
  ]

  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false)

  const languages = [
    {
      code: "fr",
      name: "Français",
      flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg",
    },
    {
      code: "en",
      name: "English",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
    },
  ]

  const currentLanguage = languages.find((lang) => lang.code === language) || languages[0]

  const handleNavClick = (e: React.MouseEvent, href: string, smooth?: boolean) => {
    if (smooth && href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.substring(2) // Remove '/#'
      
      if (pathname === '/') {
        // Already on homepage, scroll smoothly
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
        }
      } else {
        // Not on homepage, navigate to homepage with hash
        window.location.href = href
      }
    }
  }

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

  const shouldUseTransparentState = !isScrolled

  // Dynamic colors based on scroll state and page
  const headerBgColor = shouldUseTransparentState ? "transparent" : (theme === "dark" ? "#000000" : "#ffffff")

  const textColor = shouldUseTransparentState ? "#ffffff" : (theme === "dark" ? "#ffffff" : "#000000")

  const logoSrc = shouldUseTransparentState ? "/whitelogo.png" : (theme === "dark" ? "/whitelogo.png" : "/blacklogo.png")

  return (
    <motion.header ref={headerRef} className="fixed top-0 left-0 right-0 z-40 w-full">
      <motion.div
        animate={{
          width: "90%",
          y: 20,
          backgroundColor: headerBgColor,
          borderColor: shouldUseTransparentState ? "transparent" : (theme === "dark" ? "#333333" : "#e5e7eb"),
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
          borderRadius: "20px",
          borderWidth: shouldUseTransparentState ? "0px" : "1px",
        }}
        className="relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-4 py-2 lg:flex"
      >
        <Link href="/" className="relative z-20 mr-4 flex items-center px-2 py-1">
          <div className="h-7 w-auto">
            <Image
              src={logoSrc || "/placeholder.svg"}
              alt="Aress"
              width={120}
              height={48}
              className="h-full w-auto object-contain"
              priority
            />
          </div>
        </Link>

        <motion.div
          onMouseLeave={() => setHovered(null)}
          className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-1 text-sm font-medium lg:flex"
        >
          {navItems.map((item, idx) => (
            <div key={`nav-item-${idx}`} className="relative">
              {item.isHome ? (
                <button
                  onMouseEnter={() => setHovered(idx)}
                  onClick={(e) => {
                    e.preventDefault()
                    if (pathname === '/') {
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                    } else {
                      window.location.href = '/'
                    }
                  }}
                  className={`relative px-4 py-2 ${
                    pathname && pathname === item.href ? "font-semibold" : ""
                  } transition-colors ${
                    shouldUseTransparentState ? 'hover:text-white' : 'hover:text-primary'
                  }`}
                  style={{ color: textColor }}
                >
                  {hovered === idx && (
                    <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full" />
                  )}
                  <span className={`relative z-20 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:transition-all after:-translate-x-1/2 hover:after:w-full ${
                    shouldUseTransparentState ? 'after:bg-white' : 'after:bg-primary'
                  }`}>
                    {item.name}
                  </span>
                </button>
              ) : item.external ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setHovered(idx)}
                  className={`relative px-4 py-2 ${
                    pathname && pathname === item.href ? "font-semibold" : ""
                  } transition-colors ${
                    shouldUseTransparentState ? 'hover:text-white' : 'hover:text-primary'
                  }`}
                  style={{ color: textColor }}
                >
                  {hovered === idx && (
                    <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full" />
                  )}
                  <span className={`relative z-20 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:transition-all after:-translate-x-1/2 hover:after:w-full ${
                    shouldUseTransparentState ? 'after:bg-white' : 'after:bg-primary'
                  }`}>
                    {item.name}
                  </span>
                </a>
              ) : (
                <Link
                  onMouseEnter={() => setHovered(idx)}
                  onClick={(e) => handleNavClick(e, item.href, item.smooth)}
                  className={`relative px-4 py-2 ${
                    pathname && pathname === item.href ? "font-semibold" : ""
                  } transition-colors ${
                    shouldUseTransparentState ? 'hover:text-white' : 'hover:text-primary'
                  }`}
                  style={{ color: textColor }}
                  href={item.href}
                >
                  {hovered === idx && (
                    <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full" />
                  )}
                  <span className={`relative z-20 after:absolute after:bottom-[-4px] after:left-1/2 after:h-[2px] after:w-0 after:transition-all after:-translate-x-1/2 hover:after:w-full ${
                    shouldUseTransparentState ? 'after:bg-white' : 'after:bg-primary'
                  }`}>
                    {item.name}
                  </span>
                </Link>
              )}
            </div>
          ))}
        </motion.div>

        <div className="hidden md:flex items-center justify-end space-x-4 relative z-30">
          {/* Theme Toggle */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggleTheme()
            }}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
            style={{ color: textColor }}
            title={theme === "dark" ? dict.header.switch_to_light_mode : dict.header.switch_to_dark_mode}
          >
            {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-white/10 transition-colors"
              style={{ color: textColor }}
            >
              <div className="w-5 h-5 rounded-full overflow-hidden">
                <Image
                  src={currentLanguage.flag || "/placeholder.svg"}
                  alt={currentLanguage.name}
                  width={20}
                  height={20}
                  className="object-cover w-full h-full"
                />
              </div>
              <ChevronDown className="w-4 h-4" />
            </button>

            {languageDropdownOpen && (
              <div className="absolute right-0 top-12 bg-popover/90 backdrop-blur-sm rounded-lg shadow-lg border border-border py-2 min-w-[120px]">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as "en" | "fr")
                      setLanguageDropdownOpen(false)
                    }}
                    className={`flex items-center space-x-3 w-full px-4 py-2 text-left hover:bg-primary/20 transition-colors ${
                      lang.code === language ? "bg-primary/10" : ""
                    }`}
                  >
                    <div className="w-4 h-4 rounded-full overflow-hidden">
                      <Image
                        src={lang.flag || "/placeholder.svg"}
                        alt={lang.name}
                        width={16}
                        height={16}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <span className="text-popover-foreground text-sm">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Button
            onClick={() => window.open("https://calendly.com/client-aress/demo", "_blank")}
            className={`transition-all duration-300 rounded-full ${
              shouldUseTransparentState ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-white hover:bg-primary/90"
            }`}
          >
            {dict.header.reserver_demo}
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={{
          width: "95%",
          paddingRight: "12px",
          paddingLeft: "12px",
          y: 20,
          backgroundColor: headerBgColor,
          borderColor: shouldUseTransparentState ? "transparent" : (theme === "dark" ? "#333333" : "#e5e7eb"),
        }}
        style={{
          borderRadius: "20px",
          borderWidth: shouldUseTransparentState ? "0px" : "1px",
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        className="relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden"
      >
        <div className="flex w-full flex-row items-center justify-between">
          <Link href="/" className="flex items-center">
            <div className="h-6 w-auto">
              <Image
                src={logoSrc || "/placeholder.svg"}
                alt="Aress"
                width={100}
                height={40}
                className="h-full w-auto object-contain"
                priority
              />
            </div>
          </Link>

          <button
            className="p-2 rounded-full"
            style={{ color: textColor }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-background/50 backdrop-blur-sm z-40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={(e) => {
                  if (e.target === e.currentTarget) {
                    setMobileMenuOpen(false)
                  }
                }}
              />

              <motion.div
                ref={menuRef}
                className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-4 py-8 shadow-lg border border-border bg-background"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="w-full space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      className="w-full"
                    >
                      {item.isHome ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault()
                            if (pathname === '/') {
                              window.scrollTo({ top: 0, behavior: 'smooth' })
                            } else {
                              window.location.href = '/'
                            }
                            setMobileMenuOpen(false)
                          }}
                          className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all w-full text-left ${
                            pathname && pathname === item.href
                              ? "bg-primary/20 text-primary"
                              : "text-foreground hover:bg-primary/10"
                          }`}
                        >
                          <span>{item.name}</span>
                        </button>
                      ) : item.external ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all ${
                            pathname && pathname === item.href
                              ? "bg-primary/20 text-primary"
                              : "text-foreground hover:bg-primary/10"
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                        </a>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={(e) => {
                            handleNavClick(e, item.href, item.smooth)
                            setMobileMenuOpen(false)
                          }}
                          className={`flex items-center py-3 px-4 rounded-lg font-medium text-base transition-all ${
                            pathname && pathname === item.href
                              ? "bg-primary/20 text-primary"
                              : "text-foreground hover:bg-primary/10"
                          }`}
                        >
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="w-full flex items-center justify-center pt-4 border-t border-border">
                  <div className="flex items-center justify-center space-x-6">
                    {/* Theme Toggle */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleTheme()
                      }}
                      className="p-3 rounded-full text-foreground hover:bg-muted/10 transition-colors touch-manipulation"
                      title={theme === "dark" ? dict.header.switch_to_light_mode : dict.header.switch_to_dark_mode}
                    >
                      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>

                    {/* Language Switcher */}
                    <div className="flex items-center space-x-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setLanguage(lang.code as "en" | "fr")
                            setMobileMenuOpen(false)
                          }}
                          className={`p-1 rounded-full ${lang.code === language ? "ring-2 ring-primary" : ""}`}
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden">
                            <Image
                              src={lang.flag || "/placeholder.svg"}
                              alt={lang.name}
                              width={24}
                              height={24}
                              className="object-cover w-full h-full"
                            />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="w-full mt-4">
                  <Button
                    className="w-full bg-primary text-white hover:bg-primary/90 rounded-full"
                    onClick={() => {
                      setMobileMenuOpen(false)
                      window.open("https://calendly.com/client-aress/demo", "_blank")
                    }}
                  >
                    {dict.header.reserver_demo}
                  </Button>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  )
}
