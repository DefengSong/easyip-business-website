import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { HeroVisual } from "@/components/hero-visual"
import { Reveal } from "@/components/reveal"

const highlights = [
  "Expert IP Strategy",
  "Singapore-Based Consultancy",
  "Global IP Protection",
]

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-primary pt-16 lg:pt-20"
    >
      <div className="ai-hero-backdrop" aria-hidden />
      <HeroVisual />
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.045]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 shadow-[0_0_24px_-4px_oklch(0.72_0.14_210_/_0.25)] backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent shrink-0 shadow-[0_0_10px_oklch(0.72_0.14_210_/_0.8)] animate-pulse"
              aria-hidden
            />
            <span className="text-sm font-medium text-primary-foreground">
              Trusted by 500+ Customers Worldwide
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            <span className="block text-balance">Protecting Your</span>
            <span className="block text-balance ai-text-shimmer">
              Innovations
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-8 leading-relaxed text-pretty">
            EasyIP Group is a world-class intellectual property consultancy firm.
            We help businesses secure, manage, and leverage their IP assets for sustainable competitive advantage.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-10">
            {highlights.map((item) => (
              <div key={item} className="group flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent transition-transform duration-300 group-hover:scale-110" />
                <span className="text-sm sm:text-base text-primary-foreground/80">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-primary-foreground px-8 py-6 text-base font-semibold text-primary shadow-[0_18px_44px_-28px_oklch(0.985_0_0_/_0.9)] hover:-translate-y-0.5 hover:bg-primary-foreground/90"
              asChild
            >
              <a href="#contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/35 bg-transparent px-8 py-6 text-base text-primary-foreground hover:-translate-y-0.5 hover:bg-primary-foreground/12 hover:text-primary-foreground"
              asChild
            >
              <a href="#services">Explore Our Services</a>
            </Button>
          </div>
        </Reveal>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
          preserveAspectRatio="none"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            className="fill-background"
          />
        </svg>
      </div>
    </section>
  )
}
