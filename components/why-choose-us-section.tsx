import { 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Building2, 
  GraduationCap, 
  Clock 
} from "lucide-react"
import { Reveal } from "@/components/reveal"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Proven Track Record",
    description:
      "With a 90%+ success rate in intellectual property applications and thousands of satisfied clients, our expertise speaks for itself.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "We streamline the IP process, reducing time-to-protection while ensuring thorough and comprehensive coverage.",
  },
  {
    icon: HeartHandshake,
    title: "Client-Centric Approach",
    description:
      "We take the time to understand your business, providing personalized strategies that align with your goals.",
  },
  {
    icon: Building2,
    title: "Local Expertise, Global Reach",
    description:
      "Based in Singapore with an extensive international network, we protect your IP wherever you do business.",
  },
  {
    icon: GraduationCap,
    title: "Expert Team",
    description:
      "Our team includes registered patent agents, trademark attorneys, and IP strategists with diverse industry backgrounds.",
  },
  {
    icon: Clock,
    title: "End-to-End Support",
    description:
      "From initial consultation to ongoing portfolio management, we&apos;re your partner at every stage of the IP lifecycle.",
  },
]

export function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Reveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="ai-section-kicker inline-block text-accent mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            The EasyIP Advantage
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
            Discover why leading businesses across the world 
            choose EasyIP Group as their trusted intellectual property partner.
          </p>
        </Reveal>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <Reveal key={reason.title} delay={index * 80} className="h-full">
              <div className="relative h-full group">
                {/* Number Badge */}
                <div className="absolute -left-3 -top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-[0_10px_24px_-18px_var(--primary)]">
                  {index + 1}
                </div>

                <div className="dynamic-card ai-card-glow h-full rounded-md border border-border bg-card/80 p-6 backdrop-blur-[2px] lg:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-accent/20">
                    <reason.icon className="h-6 w-6 text-accent transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-3 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
                    {reason.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
