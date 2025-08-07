"use client"

import { useTheme } from "@/lib/theme-context"
import { Moon, Sun } from "lucide-react"

interface ThemeToggleSwitchProps {
  className?: string
  size?: "sm" | "md" | "lg"
}

export default function ThemeToggleSwitch({ className = "", size = "md" }: ThemeToggleSwitchProps) {
  const { theme, toggleTheme } = useTheme()

  const sizeClasses = {
    sm: "w-12 h-6",
    md: "w-14 h-7", 
    lg: "w-16 h-8"
  }

  const thumbSizes = {
    sm: "w-5 h-5",
    md: "w-6 h-6",
    lg: "w-7 h-7"
  }

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-5 h-5"
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()
    console.log('ThemeToggleSwitch: Clicked, current theme:', theme)
    
    // Force the theme toggle to run
    setTimeout(() => {
      toggleTheme()
      console.log('ThemeToggleSwitch: Theme toggled to:', theme === "dark" ? "light" : "dark")
    }, 0)
  }

  return (
    <button
      onClick={handleClick}
      onMouseDown={(e) => e.stopPropagation()}
      onTouchStart={(e) => e.stopPropagation()}
      onTouchEnd={(e) => e.stopPropagation()}
      className={`relative inline-flex items-center rounded-full transition-colors duration-300 cursor-pointer touch-manipulation select-none ${className}`}
      style={{ WebkitTapHighlightColor: 'transparent' }}
      type="button"
    >
      {/* Toggle Track */}
      <div 
        className={`${sizeClasses[size]} bg-primary border border-primary/30 rounded-full relative flex items-center justify-between px-1`}
      >
        {/* Moon Icon (Left) */}
        <div className="flex items-center justify-center">
          <Moon className={`${iconSizes[size]} text-white/80`} />
        </div>
        
        {/* Sun Icon (Right) - Hidden when in dark mode */}
        <div className="flex items-center justify-center">
          <Sun className={`${iconSizes[size]} text-white/80`} />
        </div>
        
        {/* Thumb */}
        <div 
          className={`absolute ${thumbSizes[size]} bg-white rounded-full shadow-md transition-transform duration-300 ease-in-out`}
          style={{
            transform: theme === "dark" 
              ? `translateX(calc(100% - ${size === "sm" ? "20px" : size === "md" ? "24px" : "28px"} - 2px))`
              : "translateX(2px)"
          }}
        />
      </div>
    </button>
  )
}
