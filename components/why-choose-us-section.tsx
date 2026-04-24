import { 
  ShieldCheck, 
  Zap, 
  HeartHandshake, 
  Building2, 
  GraduationCap, 
  Clock 
} from "lucide-react"

const reasons = [
  {
    icon: ShieldCheck,
    title: "Proven Track Record",
    description:
      "With a 98% success rate in patent applications and thousands of satisfied clients, our expertise speaks for itself.",
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
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="relative group"
            >
              {/* Number Badge */}
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {index + 1}
              </div>
              
              <div className="ai-card-glow h-full p-6 lg:p-8 rounded-2xl border border-border bg-card/80 backdrop-blur-[2px]">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
