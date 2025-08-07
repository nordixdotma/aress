"use client"

import { useTheme } from "@/lib/theme-context"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function ThemeToggle({ className = "", size = "md" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10", 
    lg: "w-12 h-12"
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    console.log('ThemeToggle: Clicked, current theme:', theme)
    toggleTheme()
  }

  return (
    <button
      onClick={handleClick}
      className={`${sizeClasses[size]} p-2 rounded-full text-foreground hover:bg-muted/10 transition-colors cursor-pointer touch-manipulation select-none ${className}`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      type="button"
    >
      {theme === "dark" ? (
        <Sun className={iconSizes[size]} />
      ) : (
        <Moon className={iconSizes[size]} />
      )}
    </button>
  )
}
