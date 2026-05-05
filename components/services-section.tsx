import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Reveal } from "@/components/reveal"
import { 
  Lightbulb, 
  FileText, 
  BadgeCheck, 
  Handshake, 
  Scale, 
  Copyright
} from "lucide-react"

const services = [
  {
    icon: BadgeCheck,
    title: "Trademark Applications",
    description:
      "Protect your brand identity with strategic trademark registration. We handle searches, applications, and registrations across multiple jurisdictions.",
  },
  {
    icon: Copyright,
    title: "Copyright Registrations",
    description:
      "Secure your creative works with strategic copyright registration and advisory support. We help you establish clear ownership and strengthen protection across relevant jurisdictions.",
  },
  {
    icon: FileText,
    title: "Patent Applications",
    description:
      "Expert guidance through the patent application process across jurisdictions worldwide. From drafting to prosecution, we ensure your inventions receive robust protection.",
  },
  {
    icon: Lightbulb,
    title: "IP Strategy",
    description:
      "Develop comprehensive intellectual property strategies aligned with your business goals. We help you identify, prioritize, and maximize the value of your IP portfolio.",
  },
  {
    icon: Handshake,
    title: "IP Transactions",
    description:
      "Navigate complex IP transactions including licensing agreements, technology transfers, assignments, and joint venture arrangements with confidence.",
  },
  {
    icon: Scale,
    title: "Dispute Resolutions",
    description:
      "Resolve IP disputes efficiently through negotiation, mediation, or litigation support. We protect your rights while minimizing business disruption.",
  },
]

const serviceSignals = [
  "Portfolio health checks",
  "Trademark clearance",
  "Patent drafting",
  "Licensing terms",
  "IP due diligence",
  "Market expansion",
  "Dispute readiness",
  "Renewal tracking",
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-background py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="mx-auto mb-10 max-w-3xl text-center">
          <span className="ai-section-kicker inline-block text-accent mb-4">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Comprehensive IP Solutions
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            From protecting your innovations to resolving complex disputes, 
            our expert team provides end-to-end intellectual property services 
            tailored to your business needs.
          </p>
        </Reveal>

        <Reveal delay={120} className="mx-auto mb-12 max-w-5xl">
          <div className="signal-marquee" aria-hidden>
            <div className="signal-marquee-track">
              {[...serviceSignals, ...serviceSignals].map((signal, index) => (
                <span key={`${signal}-${index}`} className="signal-pill">
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={160 + index * 70} className="h-full">
              <Card className="dynamic-card ai-card-glow group h-full border-border bg-card/80 backdrop-blur-[2px]">
                <CardHeader className="pb-4">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/20 group-hover:shadow-[0_16px_34px_-24px_var(--ai-glow-cyan)]">
                    <service.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:-rotate-3 group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-card-foreground transition-colors group-hover:text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
