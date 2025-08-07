"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface LoaderProps {
  onAnimationEnd: () => void // Callback when the fade-out animation finishes
}

export default function Loader({ onAnimationEnd }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out after 3.5 seconds, so it finishes by 4 seconds (with 0.5s transition)
    const timer = setTimeout(() => {
      setFadeOut(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  const handleTransitionEnd = () => {
    if (fadeOut) {
      setIsVisible(false) // Fully hidden, now can be unmounted
      onAnimationEnd() // Notify parent
    }
  }

  if (!isVisible) return null // Don't render if not visible

  return (
    <div
      className={cn(
        "fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-500 ease-in-out",
        fadeOut ? "opacity-0" : "opacity-100",
      )}
      onTransitionEnd={handleTransitionEnd}
    >
      <Image src="/favicon2.png" alt="Nexus Logo" width={100} height={100} priority className="animate-pulse" />
    </div>
  )
}
