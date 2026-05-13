import type { Metadata } from "next"
import { ArrowLeft } from "lucide-react"

import { BrandLogo } from "@/components/brand-logo"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Terms of Service | EasyIP Group",
  description:
    "Terms of Service for EASYIP GROUP PTE. LTD. and use of the EasyIP Group website.",
}

function TermsSection({
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

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="mt-3 max-w-3xl text-[13px] leading-[1.45] text-muted-foreground">
              These Terms of Service govern your access to and use of our
              website, including information, materials, contact forms,
              consultation requests, and website features made available
              through EasyIP Group.
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
          </div>
        </div>
      </section>

      <section className="pb-10 sm:pb-12 lg:pb-14">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-4">
            <TermsSection title="1. Introduction">
              <p>
                Welcome to the website of EASYIP GROUP PTE. LTD. "EasyIP
                Group", "we", "us", or "our".
              </p>
              <p>
                These Terms of Service govern your access to and use of our
                website, including any information, materials, contact forms,
                consultation requests, and website features made available
                through{" "}
                <a
                  href="https://www.easyipgroup.com"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                >
                  https://www.easyipgroup.com
                </a>
                .
              </p>
              <p>
                By accessing or using this website, you agree to these Terms of
                Service. If you do not agree, please do not use this website.
              </p>
            </TermsSection>

            <TermsSection title="2. About EasyIP Group">
              <p>
                EasyIP Group is an intellectual property consultancy firm based
                in Singapore. We provide services relating to intellectual
                property protection, management, strategy, transactions,
                dispute support, due diligence, and portfolio management.
              </p>
              <p>
                Our website currently describes services including trademark
                applications, copyright registrations, patent applications, IP
                strategy, IP transactions, dispute resolution support, IP due
                diligence, market expansion, licensing terms, renewal tracking,
                trademark clearance, patent drafting, and portfolio health
                checks.
              </p>
            </TermsSection>

            <TermsSection title="3. Website Information Only">
              <p>
                The content on this website is provided for general
                informational purposes only. It does not constitute legal
                advice, professional advice, technical advice, or a guarantee of
                any particular result.
              </p>
              <p>
                Although we aim to keep the information on our website accurate
                and up to date, intellectual property laws, filing practices,
                government fees, examination standards, and procedural
                requirements may change from time to time and may differ across
                jurisdictions.
              </p>
              <p>
                You should not rely solely on website content as a substitute
                for specific advice based on your circumstances.
              </p>
            </TermsSection>

            <TermsSection title="4. No Professional Relationship Created by Website Use">
              <p>
                Your use of this website, submission of a contact form, email
                to us, phone call, or request for consultation does not by
                itself create an attorney-client relationship, solicitor-client
                relationship, agent-client relationship, fiduciary
                relationship, or other professional engagement with EasyIP
                Group.
              </p>
              <p>
                Any professional engagement will only begin when we have
                confirmed acceptance of your matter and the applicable scope,
                fees, terms, and instructions, whether by engagement letter,
                invoice, written confirmation, service agreement, or other
                agreed arrangement.
              </p>
            </TermsSection>

            <TermsSection title="5. Consultations and Enquiries">
              <p>
                Our website allows visitors to contact us and request an
                initial consultation. The contact form may collect your full
                name, email address, phone number, and message. The website
                states that messages are delivered to our team through the
                website mail service and that the email address entered is used
                as the reply-to address.
              </p>
              <p>Submitting an enquiry does not guarantee that:</p>
              <BulletList
                items={[
                  "We will accept your matter;",
                  "We will act for you;",
                  "We will meet any filing deadline;",
                  "We will provide advice before a formal engagement is agreed;",
                  "Your information will be reviewed within any particular timeframe.",
                ]}
              />
              <p>
                You are responsible for informing us clearly and promptly of
                any relevant deadlines, priority claims, office action response
                dates, renewal dates, opposition periods, limitation periods,
                or other time-sensitive matters.
              </p>
            </TermsSection>

            <TermsSection title="6. No Guarantee of Results">
              <p>
                Intellectual property applications, registrations, searches,
                enforcement actions, transactions, disputes, and related
                matters may involve decisions by government authorities,
                registries, examiners, courts, tribunals, counterparties,
                third-party rights holders, or other external parties.
              </p>
              <p>We do not guarantee:</p>
              <BulletList
                items={[
                  "Approval or registration of any trademark, patent, copyright, design, or other IP right;",
                  "Availability or registrability of any mark, invention, work, design, domain name, or business name;",
                  "Success in any opposition, objection, office action, cancellation, invalidation, enforcement matter, negotiation, mediation, litigation support, or dispute process;",
                  "Any particular timeline, cost, scope of protection, commercial outcome, or legal result.",
                ]}
              />
              <p>
                Any examples, descriptions, statements, or success-rate
                references on the website are for general information and
                marketing purposes only and should not be treated as a
                guarantee of future results.
              </p>
            </TermsSection>

            <TermsSection title="7. User Responsibilities">
              <p>
                When using our website or communicating with us, you agree that
                you will:
              </p>
              <BulletList
                items={[
                  "Provide accurate, complete, and lawful information;",
                  "Not submit false, misleading, infringing, unlawful, offensive, or harmful content;",
                  "Not impersonate another person or organisation;",
                  "Not use the website for spam, fraud, unauthorised marketing, or malicious activity;",
                  "Not attempt to interfere with the operation, security, or availability of the website;",
                  "Not upload or transmit viruses, malware, harmful code, or disruptive materials;",
                  "Not scrape, copy, reverse-engineer, or misuse the website or its content without permission.",
                ]}
              />
              <p>
                You are responsible for ensuring that any materials you submit
                to us, including names, logos, images, product information,
                business information, creative works, documents, or invention
                details, are lawfully provided and do not infringe third-party
                rights.
              </p>
            </TermsSection>

            <TermsSection title="8. Confidentiality of Submitted Information">
              <p>
                We understand that intellectual property enquiries may involve
                confidential or commercially sensitive information.
              </p>
              <p>
                We will take reasonable steps to protect information submitted
                to us. However, unless and until a formal engagement or
                confidentiality agreement is in place, you should avoid
                submitting highly confidential, trade secret, invention-critical,
                commercially sensitive, or time-sensitive information through
                the website contact form.
              </p>
              <p>
                If your matter involves a new invention, unpublished work,
                sensitive brand launch, dispute, transaction, or confidential
                business plan, please indicate that confidentiality is required
                before disclosing detailed information.
              </p>
            </TermsSection>

            <TermsSection title="9. Intellectual Property Rights in Website Content">
              <p>
                All content on this website, including text, layout, graphics,
                logos, icons, service descriptions, images, design elements,
                and other materials, is owned by or licensed to EasyIP Group
                unless otherwise stated.
              </p>
              <p>
                You may view, download, or print website content for personal
                or internal business reference only.
              </p>
              <p>You may not, without our prior written consent:</p>
              <BulletList
                items={[
                  "Copy, reproduce, republish, upload, post, transmit, distribute, or modify website content for commercial use;",
                  "Use our name, logo, branding, or materials in a misleading or unauthorised manner;",
                  "Create derivative works based on website content;",
                  "Use website content to imply endorsement, partnership, or affiliation where none exists.",
                ]}
              />
              <p>All rights not expressly granted are reserved.</p>
            </TermsSection>

            <TermsSection title="10. Third-Party Links and Resources">
              <p>
                Our website may contain links or references to third-party
                websites, tools, registries, IP offices, government platforms,
                or external resources.
              </p>
              <p>
                These third-party websites and resources are provided for
                convenience only. We do not control and are not responsible for
                their content, accuracy, availability, security, policies, fees,
                or practices.
              </p>
              <p>
                Your use of third-party websites is subject to their own terms
                and policies.
              </p>
            </TermsSection>

            <TermsSection title="11. Fees, Quotations, and Service Terms">
              <p>
                Any fees, quotations, estimates, timelines, or service
                descriptions provided through the website or during preliminary
                communications are for general reference only unless expressly
                confirmed in writing.
              </p>
              <p>
                Final fees and service scope may depend on factors such as:
              </p>
              <BulletList
                items={[
                  "Jurisdiction;",
                  "Number of classes, goods, services, claims, pages, drawings, or filings;",
                  "Complexity of the matter;",
                  "Government or registry fees;",
                  "Translation, notarisation, legalisation, courier, agent, or third-party costs;",
                  "Urgency;",
                  "Office actions, objections, oppositions, disputes, renewals, or follow-up work.",
                ]}
              />
              <p>
                Unless otherwise agreed in writing, government fees, foreign
                associate fees, translation fees, courier charges, taxes,
                official expenses, and third-party costs may be charged
                separately.
              </p>
            </TermsSection>

            <TermsSection title="12. Payment">
              <p>
                Where we provide paid services, payment terms will be set out
                in the relevant invoice, quotation, engagement letter, or
                written confirmation.
              </p>
              <p>
                We may require advance payment before commencing work, filing
                applications, instructing foreign agents, or incurring official
                fees.
              </p>
              <p>
                Failure to make timely payment may result in suspension or
                termination of services, subject to applicable law and any
                agreed terms.
              </p>
            </TermsSection>

            <TermsSection title="13. Deadlines and Timely Instructions">
              <p>
                Many IP matters are deadline-sensitive. You are responsible for
                providing complete and timely instructions, documents,
                confirmations, signatures, translations, payments, and other
                required information.
              </p>
              <p>
                We are not responsible for missed deadlines, loss of rights,
                additional fees, refusal, abandonment, lapse, or adverse outcome
                caused by delayed, incomplete, inaccurate, or missing
                instructions or information from you or third parties.
              </p>
            </TermsSection>

            <TermsSection title="14. Website Availability">
              <p>
                We may update, suspend, restrict, or discontinue any part of
                the website at any time without notice.
              </p>
              <p>
                We do not guarantee that the website will always be available,
                uninterrupted, secure, error-free, or free from viruses or
                harmful components.
              </p>
              <p>
                You are responsible for using appropriate security protections
                when accessing the website.
              </p>
            </TermsSection>

            <TermsSection title="15. Disclaimer of Warranties">
              <p>
                To the maximum extent permitted by law, this website and its
                content are provided on an "as is" and "as available" basis.
              </p>
              <p>
                We disclaim all warranties, representations, or conditions,
                whether express, implied, statutory, or otherwise, including
                warranties of accuracy, completeness, reliability,
                merchantability, fitness for a particular purpose,
                non-infringement, and availability.
              </p>
              <p>
                Nothing in these Terms excludes liability that cannot be
                excluded under applicable law.
              </p>
            </TermsSection>

            <TermsSection title="16. Limitation of Liability">
              <p>
                To the maximum extent permitted by law, EasyIP Group shall not
                be liable for any indirect, incidental, consequential, special,
                exemplary, or punitive damages, or for any loss of profits,
                revenue, business, goodwill, data, opportunity, anticipated
                savings, or intellectual property rights arising from or related
                to your use of the website.
              </p>
              <p>
                This limitation applies whether the claim is based on contract,
                tort, negligence, breach of statutory duty, misrepresentation,
                or any other legal theory.
              </p>
              <p>
                Nothing in these Terms limits liability for fraud, willful
                misconduct, or any liability that cannot be limited under
                applicable law.
              </p>
            </TermsSection>

            <TermsSection title="17. Indemnity">
              <p>
                You agree to indemnify and hold harmless EasyIP Group, its
                officers, employees, consultants, contractors, agents, and
                representatives from and against any claims, losses, damages,
                liabilities, costs, and expenses arising from:
              </p>
              <BulletList
                items={[
                  "Your misuse of the website;",
                  "Your breach of these Terms;",
                  "Your submission of unlawful, inaccurate, infringing, or misleading information;",
                  "Your infringement or alleged infringement of third-party rights;",
                  "Your violation of applicable laws or regulations.",
                ]}
              />
            </TermsSection>

            <TermsSection title="18. Privacy">
              <p>
                Our collection and use of personal data is described in our{" "}
                <a
                  href="/privacy-policy"
                  className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-accent"
                >
                  Privacy Policy
                </a>
                .
              </p>
              <p>
                By using this website or submitting information through the
                website, you acknowledge that your personal data may be
                collected, used, stored, and disclosed in accordance with our
                Privacy Policy.
              </p>
            </TermsSection>

            <TermsSection title="19. Changes to These Terms">
              <p>
                We may update these Terms of Service from time to time. The
                updated version will be posted on this page with a revised
                effective date.
              </p>
              <p>
                Your continued use of the website after changes are posted
                means that you accept the updated Terms.
              </p>
            </TermsSection>

            <TermsSection title="20. Governing Law and Jurisdiction">
              <p>
                These Terms of Service are governed by the laws of Singapore.
              </p>
              <p>
                Subject to any mandatory applicable law, the courts of
                Singapore shall have exclusive jurisdiction over any dispute
                arising out of or relating to these Terms, the website, or your
                use of the website.
              </p>
            </TermsSection>

            <TermsSection title="21. Contact Us">
              <p>
                If you have questions about these Terms of Service, please
                contact:
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
            </TermsSection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
