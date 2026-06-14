import { BrandLogo } from "@/components/brand-logo"
import { NewsletterForm } from "@/components/newsletter-form"

const quickLinks = [
  { name: "Home", href: "/#home" },
  { name: "Services", href: "/#services" },
  { name: "About Us", href: "/#about" },
  { name: "Why Choose Us", href: "/#why-us" },
  { name: "Contact", href: "/#contact" },
]

const services = [
  { name: "IP Strategy", href: "/#services" },
  { name: "Patent Applications", href: "/#services" },
  { name: "Trademark Registration", href: "/#services" },
  { name: "IP Transactions", href: "/#services" },
  { name: "Dispute Resolution", href: "/#services" },
  { name: "IP Due Diligence", href: "/#services" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent"
        aria-hidden
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter */}
        <div className="flex flex-col gap-6 border-b border-background/10 py-10 lg:flex-row lg:items-center lg:justify-between lg:py-12">
          <div className="max-w-md">
            <h3 className="text-lg font-semibold text-background">
              Stay ahead on IP insights
            </h3>
            <p className="mt-1 text-sm leading-relaxed text-background/70">
              Subscribe for occasional intellectual property updates,
              guidance, and EasyIP news. No spam — unsubscribe anytime.
            </p>
          </div>
          <NewsletterForm className="lg:max-w-md lg:flex-1" />
        </div>

        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <a href="/#home" className="group mb-3 flex items-center gap-2">
              <BrandLogo className="transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
            <p className="mb-4 text-sm font-medium text-background/85">
              An <span className="font-semibold text-accent">AI</span>-powered company
              <span className="mx-2 text-background/30">·</span>
              <span className="text-background/70">Global Intellectual Property Service</span>
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
            EasyIP Group is a world-class intellectual property consultancy firm,
            helping businesses protect and leverage their innovations.
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
                3 Gambas Crescent #04-01
                <br />
                Nordcom 1 Singapore 757088
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
              &copy; {currentYear} EASYIP GROUP PTE LTD
              <span className="mx-2 text-background/25">·</span>
              UEN 202620711M
              <span className="mx-2 text-background/25">·</span>
              All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="/privacy-policy"
                className="text-sm text-background/50 hover:text-background transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
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
