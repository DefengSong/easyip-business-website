import { NextResponse } from "next/server"

/**
 * Newsletter subscription via Zoho Campaigns.
 *
 * Website sign-ups are pushed into a dedicated Zoho Campaigns list (separate
 * from any list managed by hand in the Zoho UI). If that list has a signup
 * form / double opt-in enabled, Zoho sends the confirmation email and only
 * adds the contact once they confirm.
 *
 * Required env (set in Vercel):
 * - ZOHO_LIST_KEY          — key of the dedicated subscribers list
 * - ZOHO_CLIENT_ID         — Zoho API console (Self Client)
 * - ZOHO_CLIENT_SECRET     — Zoho API console (Self Client)
 * - ZOHO_REFRESH_TOKEN     — generated once with scope ZohoCampaigns.contact.CREATE
 *
 * Optional env (data center — defaults to the US ".com" DC):
 * - ZOHO_ACCOUNTS_DOMAIN   — e.g. accounts.zoho.com | .eu | .in | .com.au | .jp
 * - ZOHO_CAMPAIGNS_DOMAIN  — e.g. campaigns.zoho.com | .eu | .in | .com.au | .jp
 *
 * Docs:
 * - https://www.zoho.com/campaigns/help/developers/contact-subscribe.html
 * - https://www.zoho.com/campaigns/help/developers/access-token.html
 */

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

// Access tokens last ~1h. Cache per warm serverless instance to avoid
// re-minting on every sign-up.
let cachedToken: { value: string; expiresAt: number } | null = null

async function getAccessToken(): Promise<string | null> {
  const now = Date.now()
  if (cachedToken && cachedToken.expiresAt > now + 60_000) {
    return cachedToken.value
  }

  const accountsDomain =
    process.env.ZOHO_ACCOUNTS_DOMAIN?.trim() || "accounts.zoho.com"
  const clientId = process.env.ZOHO_CLIENT_ID?.trim()
  const clientSecret = process.env.ZOHO_CLIENT_SECRET?.trim()
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN?.trim()

  if (!clientId || !clientSecret || !refreshToken) return null

  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: clientId,
    client_secret: clientSecret,
    refresh_token: refreshToken,
  })

  const res = await fetch(`https://${accountsDomain}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  })

  const data = await res.json().catch(() => null)
  if (!res.ok || !data?.access_token) {
    console.error("Zoho token refresh failed:", data)
    return null
  }

  const expiresInMs = (Number(data.expires_in) || 3600) * 1000
  cachedToken = { value: data.access_token, expiresAt: now + expiresInMs }
  return cachedToken.value
}

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const trimmedEmail = String(email || "").trim().toLowerCase()
    if (!trimmedEmail || !isValidEmail(trimmedEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      )
    }

    const listKey = process.env.ZOHO_LIST_KEY?.trim()
    const campaignsDomain =
      process.env.ZOHO_CAMPAIGNS_DOMAIN?.trim() || "campaigns.zoho.com"

    if (!listKey) {
      console.error("ZOHO_LIST_KEY is not set")
      return NextResponse.json(
        { error: "Subscriptions are not configured. Please try again later." },
        { status: 503 }
      )
    }

    const token = await getAccessToken()
    if (!token) {
      console.error("Could not obtain a Zoho access token")
      return NextResponse.json(
        { error: "Subscriptions are not configured. Please try again later." },
        { status: 503 }
      )
    }

    // Zoho's listsubscribe expects its parameters in the query string,
    // not the POST body.
    const query = new URLSearchParams({
      resfmt: "JSON",
      listkey: listKey,
      contactinfo: JSON.stringify({ "Contact Email": trimmedEmail }),
      source: "website",
    })

    const res = await fetch(
      `https://${campaignsDomain}/api/v1.1/json/listsubscribe?${query.toString()}`,
      {
        method: "POST",
        headers: { Authorization: `Zoho-oauthtoken ${token}` },
      }
    )

    const raw = await res.text()
    let data: Record<string, unknown> | null = null
    try {
      data = JSON.parse(raw)
    } catch {
      data = null
    }
    const status = String(data?.status || "").toLowerCase()
    const message = String(data?.message || "")
    const lowerMessage = message.toLowerCase()

    // Zoho can return HTTP 200 with status:"error" in the body.
    if (!res.ok || status === "error") {
      // An existing subscriber is not a failure from the visitor's POV.
      if (lowerMessage.includes("already") || lowerMessage.includes("exist")) {
        return NextResponse.json({ success: true, requiresConfirmation: false })
      }
      console.error("Zoho listsubscribe error:", res.status, raw)
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again later." },
        { status: 502 }
      )
    }

    // Signup-form-enabled lists return a "confirmation email" message.
    const requiresConfirmation = lowerMessage.includes("confirm")
    return NextResponse.json({ success: true, requiresConfirmation })
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
