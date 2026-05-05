import { Users, Award, Globe, Clock } from "lucide-react"
import { AnimatedStat } from "@/components/animated-stat"
import { Reveal } from "@/components/reveal"

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Clients Served",
    description: "Companies across Asia trust us",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Years Experience",
    description: "In intellectual property consulting",
  },
  {
    icon: Globe,
    value: 20,
    suffix: "+",
    label: "Countries/Jurisdictions",
    description: "Global IP protection network",
  },
  {
    icon: Clock,
    value: 90,
    suffix: "%+",
    label: "Success Rate",
    description: "Trademark application approvals",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-secondary py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <Reveal>
            <span className="ai-section-kicker inline-block text-accent mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Worldwide Trusted IP Partner
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Founded with a vision to democratize intellectual property protection, 
                EasyIP Group has grown to become one of Singapore&apos;s most 
                respected IP consultancies. Our team of experienced professionals 
                brings together expertise in law, technology, and business strategy.
              </p>
              <p className="text-pretty">
                We believe that every innovation deserves protection, regardless of 
                company size. From startups securing their first patent to 
                multinational corporations managing complex IP portfolios, we provide 
                personalized solutions that drive real business value.
              </p>
              <p className="text-pretty">
                Our commitment to excellence, combined with deep knowledge of 
                Singapore&apos;s IP landscape and international regulations, makes us 
                the partner of choice for businesses looking to protect and leverage 
                their intellectual assets.
              </p>
            </div>
          </Reveal>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Reveal key={stat.label} delay={120 + index * 80} className="h-full">
                <div className="dynamic-card ai-card-glow h-full rounded-md border border-border bg-card/90 p-6 shadow-sm backdrop-blur-sm lg:p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="mb-1 text-3xl font-bold text-primary lg:text-4xl">
                    <AnimatedStat value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mb-1 text-base font-semibold text-foreground">
                    {stat.label}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.description}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
