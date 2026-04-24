"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/90 backdrop-blur-md border-b border-primary-foreground/10 shadow-[0_1px_0_0_oklch(0.72_0.14_210_/_0.12)]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary-foreground" />
            <div className="flex flex-col">
              <span className="text-xl font-bold text-primary-foreground leading-tight">
                EasyIP
              </span>
              <span className="text-xs text-primary-foreground/70">
                Group Pte Ltd
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors"
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="secondary"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#contact">Get Consultation</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-primary-foreground/10 py-4">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-primary-foreground/80 hover:text-primary-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 w-full mt-2"
                asChild
              >
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                  Get Consultation
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
