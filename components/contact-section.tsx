"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Field, FieldLabel, FieldGroup } from "@/components/ui/field"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    details: ["3 Gambas Crescent #04-01", "Nordcom 1 Singapore 757088"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+65 90165019"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["songdefeng@yahoo.com"],
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to send message")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-28 bg-primary overflow-hidden"
    >
      <div className="ai-hero-backdrop opacity-90" aria-hidden />
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="ai-section-kicker inline-block text-accent mb-4">
            Contact Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 text-balance">
            Let&apos;s Discuss Your IP Needs
          </h2>
          <p className="text-lg text-primary-foreground/70 leading-relaxed text-pretty">
            Ready to protect your innovations? Get in touch with our team 
            for a free initial consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="ai-card-glow bg-card/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/60">
            <h3 className="text-2xl font-bold text-card-foreground mb-6">
              Send Us a Message
            </h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold text-card-foreground mb-2">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground mb-6">
                  Thank you for reaching out. We&apos;ll get back to you shortly.
                </p>
                <Button
                  variant="outline"
                  onClick={() => setIsSubmitted(false)}
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full Name *</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email Address *</FieldLabel>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-background"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+65 9123 4567"
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-background"
                    />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="message">Message *</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your IP needs..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-background resize-none"
                    />
                  </Field>

                  {error && (
                    <p className="text-destructive text-sm">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </FieldGroup>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-center">
            <div className="space-y-8">
              {contactInfo.map((item) => (
                <div key={item.title} className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-primary-foreground mb-1">
                      {item.title}
                    </h4>
                    {item.details.map((detail, index) => (
                      <p
                        key={index}
                        className="text-primary-foreground/70"
                      >
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
