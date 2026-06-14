"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { BrandLogo } from "@/components/brand-logo"

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
        "fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md transition-all duration-300",
        isScrolled
          ? "border-border bg-background/95 shadow-[0_10px_34px_-22px_oklch(0.33_0.115_264_/_0.5)]"
          : "border-border/60 bg-background/85"
      )}
    >
      <div
        className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-accent via-[var(--brand-blue)] to-[var(--brand-sky)] transition-[width] duration-150"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            "flex items-center justify-between transition-[height] duration-300",
            isScrolled ? "h-16 lg:h-[4.5rem]" : "h-[4.5rem] lg:h-[5.25rem]"
          )}
        >
          {/* Logo + brand taglines */}
          <a href="#home" className="group flex items-center gap-3 sm:gap-4">
            <BrandLogo
              bare
              priority
              className="transition-transform duration-300 group-hover:-translate-y-0.5"
            />
            <span
              className="hidden h-9 w-px bg-border sm:block"
              aria-hidden
            />
            <span className="hidden flex-col justify-center leading-tight sm:flex">
              <span className="text-sm font-semibold text-foreground">
                An <span className="text-accent">AI</span>-powered company
              </span>
              <span className="ai-section-kicker text-[0.625rem] text-accent/85">
                Global Intellectual Property Service
              </span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-sm font-medium text-muted-foreground transition-colors after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:text-foreground hover:after:scale-x-100",
                  activeSection === link.href.slice(1) &&
                    "text-foreground after:scale-x-100"
                )}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="shadow-[0_14px_34px_-22px_var(--primary)] hover:-translate-y-0.5"
              asChild
            >
              <a href="#contact">Get Consultation</a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="rounded-md p-2 text-foreground transition-colors hover:bg-foreground/5 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="animate-in fade-in slide-in-from-top-2 border-t border-border py-4 lg:hidden">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "rounded-md px-2 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-foreground",
                    activeSection === link.href.slice(1) &&
                      "bg-foreground/5 text-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="w-full mt-2" asChild>
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
