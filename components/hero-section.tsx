import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90svh] items-center justify-center overflow-hidden bg-primary px-4 pb-20 pt-24 lg:pt-28"
    >
      <div className="ai-hero-backdrop" aria-hidden />

      <div className="container relative z-10 mx-auto sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-3xl text-center">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/18 bg-primary-foreground/8 px-4 py-1.5 text-sm font-medium text-primary-foreground/85 backdrop-blur-sm">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_var(--accent)]"
              aria-hidden
            />
            An <span className="font-semibold text-accent">AI</span>-powered company
          </span>

          <h1 className="mb-6 text-4xl font-bold leading-tight text-primary-foreground sm:text-5xl lg:text-6xl">
            <span className="block text-balance">Protecting Your</span>
            <span className="block text-balance ai-text-shimmer">
              Innovations
            </span>
          </h1>

          <p className="mx-auto mb-5 max-w-2xl text-pretty text-lg leading-relaxed text-primary-foreground/72 sm:text-xl">
            EasyIP Group is a world-class intellectual property consultancy firm.
            We help businesses secure, manage, and leverage their IP assets for sustainable competitive advantage.
          </p>

          <p className="ai-section-kicker mx-auto mb-9 text-accent/90">
            Global Intellectual Property Service
          </p>

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
