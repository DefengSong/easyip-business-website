import { Shield } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
]

const services = [
  { name: "IP Strategy", href: "#services" },
  { name: "Patent Applications", href: "#services" },
  { name: "Trademark Registration", href: "#services" },
  { name: "IP Transactions", href: "#services" },
  { name: "Dispute Resolution", href: "#services" },
  { name: "IP Due Diligence", href: "#services" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-foreground text-background">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <Shield className="h-8 w-8 text-background" />
              <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-background leading-tight tracking-tight">
                  EasyIP Group
                </span>
              </div>
            </a>
            <p className="text-background/70 text-sm leading-relaxed">
              Singapore&apos;s premier intellectual property consultancy, 
              helping businesses protect and leverage their innovations 
              since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold text-background mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold text-background mb-4">
              Our Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-sm text-background/70 hover:text-background transition-colors"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-base font-semibold text-background mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-3 text-sm text-background/70">
              <p>
                1 Raffles Place, #20-61
                <br />
                Tower 2, Singapore 048616
              </p>
              <p>
                <a
                  href="tel:+6561234567"
                  className="hover:text-background transition-colors"
                >
                  +65 6123 4567
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@easyipgroup.com"
                  className="hover:text-background transition-colors"
                >
                  info@easyipgroup.com
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/50 text-center sm:text-left">
              &copy; {currentYear} EasyIP Group. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
