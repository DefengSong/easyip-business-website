import { Resend } from "resend"
import { NextResponse } from "next/server"

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

/** Strip characters that are unsafe inside a quoted display name / header. */
function safeDisplayName(name: string): string {
  const cleaned = name
    .replace(/[\r\n\x00-\x1f"<>\\]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 70)
  return cleaned || "Website visitor"
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Contact form email routing:
 * - From: your verified domain (Resend requirement). Display name includes the visitor.
 * - To: your inbox (CONTACT_INBOX_EMAIL or info@easyipgroup.com).
 * - Reply-To: visitor's address — "Reply" in the mail client goes to them, not to Resend.
 *
 * Optional env:
 * - CONTACT_INBOX_EMAIL — where enquiries are delivered (default: info@easyipgroup.com)
 * - CONTACT_FROM_EMAIL — verified sender mailbox (default: info@easyipgroup.com).
 *   If deliverability is odd when From === To, add e.g. noreply@easyipgroup.com (verified) here.
 */
export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json()

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      )
    }

    const trimmedEmail = String(email).trim()
    if (!isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    const resend = getResend()
    if (!resend) {
      console.error("RESEND_API_KEY is not set")
      return NextResponse.json(
        { error: "Contact form is not configured. Please try again later." },
        { status: 503 }
      )
    }

    const display = safeDisplayName(String(name))
    const toInbox =
      process.env.CONTACT_INBOX_EMAIL?.trim() || "info@easyipgroup.com"
    const fromMailbox =
      process.env.CONTACT_FROM_EMAIL?.trim() || "info@easyipgroup.com"

    const safeName = escapeHtml(display)
    const safeEmail = escapeHtml(trimmedEmail)
    const safePhone = escapeHtml(String(phone || "").trim() || "Not provided")
    const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br>")

    const fromPhrase = `EasyIP website — ${display}`.replace(/"/g, "")
    const fromHeader = `"${fromPhrase}" <${fromMailbox}>`

    const { data, error } = await resend.emails.send({
      from: fromHeader,
      to: toInbox,
      subject: `[EasyIP] Message from ${display} (${trimmedEmail})`,
      // Visitor's address: "Reply" in your mail client goes to them (Resend still sends the message).
      replyTo: trimmedEmail,
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Phone:</strong> ${safePhone}</p>
        <h3>Message</h3>
        <p>${safeMessage}</p>
        <p style="margin-top:24px;font-size:13px;color:#555">
          Reply in your email app will go to <strong>${safeEmail}</strong> (Reply-To).
        </p>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, id: data?.id })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
