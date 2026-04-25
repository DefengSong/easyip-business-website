import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Lightbulb, 
  FileText, 
  BadgeCheck, 
  Handshake, 
  Scale, 
  Search 
} from "lucide-react"

const services = [
  {
    icon: Lightbulb,
    title: "IP Strategy",
    description:
      "Develop comprehensive intellectual property strategies aligned with your business goals. We help you identify, prioritize, and maximize the value of your IP portfolio.",
  },
  {
    icon: FileText,
    title: "Patent Applications",
    description:
      "Expert guidance through the patent application process across jurisdictions worldwide. From drafting to prosecution, we ensure your inventions receive robust protection.",
  },
  {
    icon: BadgeCheck,
    title: "Trademark Registration",
    description:
      "Protect your brand identity with strategic trademark registration. We handle searches, applications, and registrations across multiple jurisdictions.",
  },
  {
    icon: Handshake,
    title: "IP Transactions",
    description:
      "Navigate complex IP transactions including licensing agreements, technology transfers, assignments, and joint venture arrangements with confidence.",
  },
  {
    icon: Scale,
    title: "Dispute Resolution",
    description:
      "Resolve IP disputes efficiently through negotiation, mediation, or litigation support. We protect your rights while minimizing business disruption.",
  },
  {
    icon: Search,
    title: "IP Due Diligence",
    description:
      "Comprehensive IP audits and due diligence for mergers, acquisitions, and investments. Uncover risks and opportunities in your IP assets.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <Card
              key={service.title}
              className="ai-card-glow group border-border bg-card/80 backdrop-blur-[2px]"
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold text-card-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
