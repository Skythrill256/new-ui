"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Hibiscus", href: "#hibiscus" },
    { name: "Sheldon", href: "#sheldon" },
    { name: "Pebble", href: "#pebble" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-4 group animate-slide-in-left">
            <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
              <Image src="/penguin-logo.png" alt="Logo" fill className="object-contain" />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-12">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-base font-sans font-medium text-muted-foreground hover:text-foreground transition-all duration-300 relative group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-muted-foreground/20 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-sans font-medium bg-transparent backdrop-blur-sm px-6"
            >
              Sign In
            </Button>
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent hover:scale-105 transition-all duration-300 shadow-lg px-6 font-sans font-medium"
            >
              Let's Pebble... 🐧
            </Button>
          </div>

          <button
            className="lg:hidden p-3 rounded-lg hover:bg-muted/50 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/20 animate-fade-in-up">
            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-sans font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex flex-col space-y-4 pt-6 border-t border-border/20">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-muted-foreground/20 text-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-sans font-medium bg-transparent"
                >
                  Sign In
                </Button>
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-accent transition-all duration-300 shadow-lg font-sans font-medium"
                >
                  Let's Pebble... 🐧
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
