"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Why Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const updateScrollState = () => {
      const scrollTop = window.scrollY
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight

      setIsScrolled(scrollTop > 12)
      setScrollProgress(scrollableHeight > 0 ? (scrollTop / scrollableHeight) * 100 : 0)
    }

    updateScrollState()
    window.addEventListener("scroll", updateScrollState, { passive: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-34% 0px -52% 0px",
        threshold: 0.01,
      }
    )

    navLinks.forEach((link) => {
      const section = document.getElementById(link.href.slice(1))

      if (section) {
        observer.observe(section)
      }
    })

    return () => {
      window.removeEventListener("scroll", updateScrollState)
      observer.disconnect()
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b border-primary-foreground/10 backdrop-blur-md transition-all duration-300",
        isScrolled
          ? "bg-primary/92 shadow-[0_18px_50px_-30px_oklch(0.2_0.04_265_/_0.75)]"
          : "bg-primary/74 shadow-[0_1px_0_0_oklch(0.72_0.14_210_/_0.12)]"
      )}
    >
      <div
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-accent via-[var(--ai-glow-gold)] to-[var(--ai-glow-violet)] transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            isScrolled ? "h-14 lg:h-16" : "h-16 lg:h-20"
          )}
        >
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2">
            <Shield className="h-8 w-8 text-primary-foreground transition-transform duration-300 group-hover:rotate-6" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-primary-foreground leading-tight">
                EasyIP Group
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-primary-foreground/74 transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-primary-foreground hover:after:scale-x-100",
                  activeSection === link.href.slice(1) &&
                    "text-primary-foreground after:scale-x-100"
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              variant="secondary"
              className="bg-primary-foreground text-primary shadow-[0_12px_32px_-22px_oklch(0.985_0_0_/_0.85)] hover:-translate-y-0.5 hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#contact">Get Consultation</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-primary-foreground transition-colors hover:bg-primary-foreground/10 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 border-t border-primary-foreground/10 py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "rounded-md px-2 py-2 text-sm font-medium text-primary-foreground/80 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground",
                    activeSection === link.href.slice(1) &&
                      "bg-primary-foreground/10 text-primary-foreground"
                  )}
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
