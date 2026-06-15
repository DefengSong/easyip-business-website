import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Privacy Policy | EasyIP Group",
  description:
    "Privacy Policy for EASYIP GROUP PTE. LTD., including how personal data is collected, used, disclosed, stored, and protected.",
}

function PolicySection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-1">
      <h2 className="text-[13px] font-semibold leading-[1.45] tracking-normal text-foreground">
        {title}
      </h2>
      <div className="space-y-1 text-[13px] leading-[1.45] text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-0.5 pl-5">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function PrivacyPolicyPage() {
  return (
    <main className="relative z-[1] min-h-screen overflow-x-hidden bg-background">
      <header className="border-b border-border/70 bg-background/95 backdrop-blur-sm">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="group flex items-center gap-2">
            <BrandLogo className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </a>
          <Button variant="outline" asChild>
            <a href="/#contact">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to contact
            </a>
          </Button>
        </div>
      </header>

      <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12">
        <div className="ai-hero-backdrop opacity-35" aria-hidden />
        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <span className="ai-section-kicker text-accent">
              EASYIP GROUP PTE. LTD.
            </span>
            <h1 className="mt-3 text-3xl font-bold tracking-normal text-foreground sm:text-4xl">
              Privacy Policy
            </h1>
            <p className="mt-3 max-w-3xl text-[13px] leading-[1.45] text-muted-foreground">
              This policy explains how EASYIP GROUP PTE. LTD. collects, uses,
              discloses, stores, and protects personal data in connection with
              our website, enquiries, consultations, communications, and
              intellectual property-related services.
            </p>
            <p className="mt-2 text-[13px] leading-[1.45] text-muted-foreground">
              Website:{" "}
              <a
                href="https://www.easyipgroup.com"
                className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
              >
                https://www.easyipgroup.com
              </a>
            </p>
            <p className="mt-2 text-[13px] leading-[1.45] text-muted-foreground">
              Last updated: 15 June 2026
            </p>
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-12 lg:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <PolicySection title="1. Introduction">
              <p>
                EASYIP GROUP PTE. LTD. ("EasyIP Group", "we", "us", or "our")
                respects your privacy and is committed to protecting your
                personal data.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, disclose,
                store, and protect personal data when you visit our website,
                submit an enquiry, request a consultation, communicate with us,
                or engage us for intellectual property-related services.
              </p>
              <p>
                This Privacy Policy is intended to address applicable privacy
                and data protection requirements, including the Singapore
                Personal Data Protection Act 2012 ("PDPA") where applicable,
                and the EU General Data Protection Regulation ("GDPR") where
                applicable.
              </p>
            </PolicySection>

            <PolicySection title="2. Who We Are">
              <p>
                EasyIP Group is an intellectual property consultancy firm based
                in Singapore. We provide IP-related services including trademark
                applications, copyright registrations, patent applications, IP
                strategy, IP transactions, dispute resolution support, IP due
                diligence, portfolio management, renewal tracking, and related
                advisory or consultancy services.
              </p>
              <p>
                For the purposes of applicable data protection laws, EasyIP
                Group is generally the organisation, business, or data
                controller responsible for personal data collected through our
                website and business communications.
              </p>
            </PolicySection>

            <PolicySection title="3. Personal Data We Collect">
              <h3 className="text-[13px] font-semibold leading-[1.45] text-foreground">
                3.1 Information You Provide Through Our Website
              </h3>
              <p>
                When you use our contact form or otherwise communicate with us,
                we may collect:
              </p>
              <BulletList
                items={[
                  "Full name;",
                  "Email address;",
                  "Phone number;",
                  "Company or organisation name, if provided;",
                  "Job title or business role, if provided;",
                  "Details of your enquiry;",
                  "Information contained in messages, instructions, attachments, or documents you send to us.",
                ]}
              />
              <p>
                Our website contact form currently asks for Full Name, Email
                Address, Phone Number, and Message. Messages submitted through
                the form are delivered to our team through our website mail
                service, and the email address entered is used as the reply-to
                address so that we can respond directly to the sender.
              </p>

              <h3 className="pt-1 text-[13px] font-semibold leading-[1.45] text-foreground">
                3.2 IP and Service-Related Information
              </h3>
              <p>
                Because we provide intellectual property services, we may also
                collect information relating to:
              </p>
              <BulletList
                items={[
                  "Trademark names, logos, slogans, brands, business names, and proposed marks;",
                  "Copyright works, creative materials, product images, designs, written works, software-related materials, or other works;",
                  "Patent or invention-related information;",
                  "Applicant, owner, inventor, author, representative, or agent details;",
                  "Filing, registration, renewal, licensing, assignment, due diligence, enforcement, or dispute-related information;",
                  "Business plans, product information, market expansion plans, and commercial documents relevant to IP strategy or transactions.",
                ]}
              />

              <h3 className="pt-1 text-[13px] font-semibold leading-[1.45] text-foreground">
                3.3 Technical and Website Usage Data
              </h3>
              <p>
                When you visit our website, limited technical information may
                be generated automatically by our website hosting, security,
                mail-service, or server infrastructure. This may include:
              </p>
              <BulletList
                items={[
                  "IP address;",
                  "Browser type and version;",
                  "Device type;",
                  "Operating system;",
                  "Pages viewed;",
                  "Date and time of visit;",
                  "Referring website;",
                  "Approximate location derived from IP address;",
                  "Server log data and basic security logs.",
                ]}
              />

              <h3 className="pt-1 text-[13px] font-semibold leading-[1.45] text-foreground">
                3.4 Third-Party Tools and Tracking Technologies
              </h3>
              <p>
                To operate and improve our website, deliver messages, and
                manage newsletter subscriptions, we use a limited number of
                third-party service providers, including:
              </p>
              <BulletList
                items={[
                  "A privacy-focused website analytics tool (Vercel Web Analytics) that provides aggregated usage statistics and, based on its standard configuration, does not use advertising cookies;",
                  "An email delivery service (Resend) used to deliver messages submitted through our contact form;",
                  "An email marketing platform (Zoho Campaigns, provided by Zoho Corporation) used to manage newsletter subscriptions and send communications, if you choose to subscribe.",
                ]}
              />
              <p>
                As of the effective date of this Privacy Policy, we do not
                knowingly use Google Analytics, Meta Pixel, Google Ads tracking
                tags, Google reCAPTCHA, online payment processors, or
                third-party cookie-consent tools on the public website.
              </p>
              <p>
                If we introduce additional tools in the future, we will update
                this Privacy Policy and, where required by applicable law,
                request consent before using non-essential cookies or tracking
                technologies.
              </p>

              <h3 className="pt-1 text-[13px] font-semibold leading-[1.45] text-foreground">
                3.5 Newsletter Subscription
              </h3>
              <p>
                If you choose to subscribe to our newsletter through our
                website, we collect your email address in order to send you
                updates, intellectual property insights, and other
                communications.
              </p>
              <p>
                We use a double opt-in process: after you submit your email
                address, you will receive a confirmation email, and you are only
                added to our mailing list once you confirm. Your subscription is
                managed using a third-party email marketing platform (Zoho
                Campaigns, provided by Zoho Corporation), which processes your
                email address on our behalf and may store or process it outside
                Singapore (see &ldquo;International Transfers&rdquo;). You can
                unsubscribe at any time using the link included in our emails or
                by contacting us.
              </p>

              <h3 className="pt-1 text-[13px] font-semibold leading-[1.45] text-foreground">
                3.6 Information From Third Parties
              </h3>
              <p>
                We may receive personal data from third parties, including:
              </p>
              <BulletList
                items={[
                  "Clients, business partners, or professional advisers;",
                  "Public IP offices, company registries, court databases, or public records;",
                  "Foreign associates, agents, filing partners, or local counsel;",
                  "Payment processors, cloud service providers, email providers, IT service providers, or other vendors, if engaged in the future;",
                  "Publicly available sources used for IP clearance, due diligence, enforcement, or portfolio review.",
                ]}
              />
            </PolicySection>

            <PolicySection title="4. How We Use Personal Data">
              <p>
                We may collect, use, disclose, and process personal data for
                the following purposes:
              </p>
              <BulletList
                items={[
                  "To respond to enquiries submitted through our website;",
                  "To provide a free initial consultation;",
                  "To assess whether and how we may assist with IP protection, registration, enforcement, licensing, portfolio management, or related services;",
                  "To conduct trademark searches, clearance checks, filing reviews, copyright registration support, patent application support, and related IP services;",
                  "To prepare applications, forms, letters, reports, agreements, filings, or other service documents;",
                  "To communicate with clients, prospective clients, agents, IP offices, registries, courts, regulators, or professional advisers;",
                  "To manage client relationships, billing, payment, administration, and internal records;",
                  "To improve our website, services, client experience, and operational processes;",
                  "To send service-related communications;",
                  "To send marketing or informational communications, where permitted by law;",
                  "To comply with legal, regulatory, tax, accounting, professional, or recordkeeping obligations;",
                  "To prevent fraud, misuse, security incidents, or unauthorised access;",
                  "To protect our rights, property, business interests, clients, and users.",
                ]}
              />
            </PolicySection>

            <PolicySection title="5. Legal Bases Under the GDPR">
              <p>
                Where the GDPR applies, we rely on one or more of the following
                lawful bases:
              </p>
              <p>
                GDPR Article 6 requires personal data processing to be based on
                a lawful basis such as consent, contract, legal obligation,
                vital interests, public task, or legitimate interests. Where we
                rely on legitimate interests, we do so only where our interests
                are not overridden by your rights and freedoms.
              </p>
            </PolicySection>

            <PolicySection title="6. Singapore PDPA Notice">
              <p>
                Where the Singapore PDPA applies, we collect, use, and disclose
                personal data for purposes that a reasonable person would
                consider appropriate in the circumstances, including the
                purposes stated in this Privacy Policy.
              </p>
              <p>
                By providing personal data to us, submitting an enquiry,
                communicating with us, or engaging our services, you consent to
                our collection, use, and disclosure of your personal data for
                the purposes described in this Privacy Policy, unless you
                withdraw your consent or an exception under applicable law
                applies.
              </p>
            </PolicySection>

            <PolicySection title="7. Cookies and Website Technologies">
              <p>
                Our public website operates primarily as an informational
                website with a contact form and a newsletter subscription
                feature. We may collect limited technical data generated through
                hosting, security, analytics, mail delivery, or server log
                infrastructure.
              </p>
              <p>
                As described in section 3.4, we use a privacy-focused website
                analytics tool (Vercel Web Analytics), an email delivery service
                (Resend), and an email marketing platform (Zoho Campaigns) for
                newsletter subscriptions. As of the effective date of this
                Privacy Policy, we do not knowingly use Google Analytics, Meta
                Pixel, Google Ads tracking tags, Google reCAPTCHA, online
                payment processors, or third-party cookie-consent tools on the
                public website.
              </p>
              <p>
                If we later use additional cookies, advertising pixels, payment
                processors, or similar technologies, we will update this Privacy
                Policy and, where required, provide a cookie notice or consent
                mechanism before using non-essential cookies or tracking
                technologies.
              </p>
              <p>
                You may disable cookies through your browser settings, but some
                website functions may not work properly if cookies necessary
                for website operation are disabled.
              </p>
            </PolicySection>

            <PolicySection title="8. Disclosure of Personal Data">
              <p>
                We may disclose personal data to the following parties where
                reasonably necessary:
              </p>
              <BulletList
                items={[
                  "Our employees, contractors, consultants, or authorised representatives;",
                  "Foreign associates, IP agents, patent attorneys, trademark attorneys, lawyers, or other professional advisers;",
                  "Intellectual property offices, company registries, government agencies, courts, dispute resolution bodies, or regulators;",
                  "IT hosting providers, cloud service providers, website operators, email service providers, cybersecurity providers, and website mail-service providers;",
                  "Website analytics providers and email marketing or newsletter platform providers (such as Zoho Campaigns) that process data on our behalf;",
                  "Payment processors, banks, accountants, auditors, and tax advisers, if relevant to a transaction or client matter;",
                  "Business partners or service providers involved in delivering our services;",
                  "Any party where disclosure is required or permitted by law;",
                  "Any party involved in a business transfer, merger, restructuring, or sale of assets, subject to appropriate safeguards.",
                ]}
              />
              <p>We do not sell personal data.</p>
            </PolicySection>

            <PolicySection title="9. International Transfers">
              <p>
                Because EasyIP Group provides IP services across multiple
                jurisdictions and may work with international filing agents,
                associates, IP offices, and professional advisers, personal data
                may be transferred to countries outside Singapore, the European
                Economic Area, the United Kingdom, or your country of residence.
              </p>
              <p>
                Where required, we will take reasonable steps to ensure that
                personal data transferred internationally receives an
                appropriate level of protection. This may include contractual
                safeguards, data processing agreements, Standard Contractual
                Clauses, adequacy mechanisms, or other lawful transfer
                arrangements.
              </p>
            </PolicySection>

            <PolicySection title="10. Retention of Personal Data">
              <p>
                We retain personal data only for as long as necessary to fulfil
                the purposes for which it was collected, including to provide
                services, maintain business records, comply with legal and
                regulatory obligations, resolve disputes, and protect our
                rights.
              </p>
              <p>Typical retention periods may include:</p>
              <BulletList
                items={[
                  "Website enquiry records: up to 2 years after the enquiry is resolved;",
                  "Client matter files: up to 5 years after completion of the matter, depending on legal, professional, or business requirements;",
                  "Accounting and billing records: for the period required under applicable tax and accounting laws;",
                  "Marketing contact records: until you unsubscribe, withdraw consent, or the data is no longer required;",
                  "Website logs and technical data: up to 90 days after collection, unless a longer period is required to investigate a security incident, troubleshoot technical issues, comply with legal obligations, resolve disputes, or protect our rights.",
                ]}
              />
              <p>
                When personal data is no longer required, we will delete,
                anonymise, or securely archive it.
              </p>
            </PolicySection>

            <PolicySection title="11. Confidentiality of IP-Related Materials">
              <p>
                We understand that IP-related enquiries may involve sensitive
                commercial information, including brand names, logos, product
                plans, inventions, creative works, market expansion strategies,
                and dispute-related materials.
              </p>
              <p>
                We will take reasonable steps to protect the confidentiality of
                such information. However, unless a separate written agreement
                states otherwise, submitting information through the website
                does not by itself create an attorney-client relationship,
                solicitor-client relationship, or other legally privileged
                relationship.
              </p>
            </PolicySection>

            <PolicySection title="12. Security">
              <p>
                We use reasonable technical and organisational measures to
                protect personal data against unauthorised access, disclosure,
                alteration, loss, misuse, or destruction.
              </p>
              <p>
                These measures may include access controls, secure
                communications, data minimisation, internal confidentiality
                controls, secure storage, and appropriate vendor management.
              </p>
              <p>
                However, no website, email system, or electronic transmission
                method is completely secure. You should avoid submitting highly
                confidential or sensitive information through our website
                contact form unless necessary.
              </p>
            </PolicySection>

            <PolicySection title="13. Your Rights">
              <p>
                Depending on your location and applicable law, you may have
                rights to:
              </p>
              <BulletList
                items={[
                  "Request access to your personal data;",
                  "Request correction of inaccurate or incomplete personal data;",
                  "Request deletion of your personal data;",
                  "Request restriction of processing;",
                  "Object to processing;",
                  "Request data portability;",
                  "Withdraw consent where processing is based on consent;",
                  "Opt out of marketing communications;",
                  "Lodge a complaint with a data protection authority.",
                ]}
              />
              <p>
                To exercise your rights, please contact us at{" "}
                <a
                  href="mailto:info@easyipgroup.com"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                >
                  info@easyipgroup.com
                </a>
                . We may request information to verify your identity before
                processing your request.
              </p>
            </PolicySection>

            <PolicySection title="14. Marketing Communications">
              <p>
                We may send you updates, service information, newsletters, or
                marketing communications where permitted by law.
              </p>
              <p>
                If you subscribe to our newsletter through our website, we use a
                double opt-in process (email confirmation) and manage your
                subscription using a third-party email marketing platform (Zoho
                Campaigns). See section 3.5 for details.
              </p>
              <p>
                You may opt out of marketing communications at any time by
                contacting us at{" "}
                <a
                  href="mailto:info@easyipgroup.com"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                >
                  info@easyipgroup.com
                </a>{" "}
                or by using any unsubscribe method provided in our
                communications.
              </p>
              <p>
                Even if you opt out of marketing communications, we may still
                send you service-related or administrative communications.
              </p>
            </PolicySection>

            <PolicySection title="15. Third-Party Links">
              <p>
                Our website may contain links to third-party websites,
                platforms, IP offices, or external resources. We are not
                responsible for the privacy practices, content, or security of
                third-party websites. You should review the privacy notices of
                those third parties before providing personal data to them.
              </p>
            </PolicySection>

            <PolicySection title="16. Children's Privacy">
              <p>
                Our website and services are intended for businesses,
                entrepreneurs, creators, and adult users seeking intellectual
                property-related services. We do not knowingly collect personal
                data from children.
              </p>
              <p>
                If you believe that a child has provided personal data to us,
                please contact us so that we can take appropriate steps.
              </p>
            </PolicySection>

            <PolicySection title="17. Changes to This Privacy Policy">
              <p>
                We may update this Privacy Policy from time to time. Any
                updated version will be posted on this page with a revised
                effective date.
              </p>
              <p>
                Your continued use of our website after the updated Privacy
                Policy is posted means that you acknowledge the updated terms.
              </p>
            </PolicySection>

            <PolicySection title="18. Contact Us">
              <p>
                If you have questions about this Privacy Policy or how we
                handle personal data, please contact:
              </p>
              <address className="not-italic">
                <p className="font-semibold text-foreground">
                  EASYIP GROUP PTE. LTD.
                </p>
                <p>
                  3 Gambas Crescent #04-01
                  <br />
                  Nordcom 1
                  <br />
                  Singapore 757088
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@easyipgroup.com"
                    className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    info@easyipgroup.com
                  </a>
                </p>
                <p>
                  Website:{" "}
                  <a
                    href="https://www.easyipgroup.com"
                    className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                  >
                    https://www.easyipgroup.com
                  </a>
                </p>
              </address>
            </PolicySection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
