"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [needsConfirmation, setNeedsConfirmation] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        throw new Error(data.error || "Failed to subscribe")
      }

      setNeedsConfirmation(Boolean(data.requiresConfirmation))
      setIsSubscribed(true)
      setEmail("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubscribed) {
    return (
      <div
        className={cn(
          "flex items-center gap-2 text-sm text-background",
          className
        )}
        role="status"
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
        <span>
          {needsConfirmation
            ? "Almost there — check your inbox to confirm your subscription."
            : "You're subscribed — thanks for joining."}
        </span>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={cn("w-full", className)} noValidate>
      <div className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-label="Email address"
          className="border-background/20 bg-background/10 text-background placeholder:text-background/50 focus-visible:ring-accent/40 sm:max-w-xs"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="shrink-0 hover:-translate-y-0.5"
        >
          {isSubmitting ? (
            "Subscribing..."
          ) : (
            <>
              Subscribe
              <Send className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-300" role="alert">
          {error}
        </p>
      )}
    </form>
  )
}
