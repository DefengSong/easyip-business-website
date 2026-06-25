import { NextResponse } from "next/server"
import { isValidEmail, subscribeToZohoList } from "@/lib/zoho"

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

    const result = await subscribeToZohoList(trimmedEmail)
    if (!result.ok) {
      if (result.reason === "not_configured") {
        return NextResponse.json(
          { error: "Subscriptions are not configured. Please try again later." },
          { status: 503 }
        )
      }
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again later." },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      requiresConfirmation: result.requiresConfirmation,
    })
  } catch (error) {
    console.error("Subscribe error:", error)
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    )
  }
}
