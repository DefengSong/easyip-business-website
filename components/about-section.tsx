import { Users, Award, Globe, Clock } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clients Served",
    description: "Companies across Asia trust us",
  },
  {
    icon: Award,
    value: "15+",
    label: "Years Experience",
    description: "In intellectual property consulting",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Countries",
    description: "Global IP protection network",
  },
  {
    icon: Clock,
    value: "98%",
    label: "Success Rate",
    description: "Patent application approvals",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
              Worldwide Trusted IP Partner
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                Founded with a vision to democratize intellectual property protection, 
                EasyIP Group Pte Ltd has grown to become one of Singapore&apos;s most 
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
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
