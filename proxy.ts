import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

const isProduction = process.env.VERCEL_ENV === "production"

const privateHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="noindex,nofollow,noarchive,nosnippet,noimageindex" />
    <title>Site Temporarily Private</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #081a2f;
        color: #f8fbff;
      }

      body {
        min-height: 100vh;
        margin: 0;
        display: grid;
        place-items: center;
        background: radial-gradient(circle at 50% 12%, rgba(32, 165, 235, 0.16), transparent 38%), #081a2f;
      }

      main {
        width: min(86vw, 34rem);
        text-align: center;
      }

      h1 {
        margin: 0 0 0.75rem;
        font-size: clamp(2rem, 5vw, 3rem);
        line-height: 1.05;
      }

      p {
        margin: 0 auto;
        color: rgba(248, 251, 255, 0.72);
        font-size: 1rem;
        line-height: 1.7;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Website Temporarily Private</h1>
      <p>This website is not available for public viewing at the moment. Please check back later.</p>
    </main>
  </body>
</html>`

export function proxy(_request: NextRequest) {
  if (!isProduction) {
    return NextResponse.next()
  }

  return new NextResponse(privateHtml, {
    status: 503,
    headers: {
      "Cache-Control": "no-store, no-cache, max-age=0, must-revalidate",
      "Content-Type": "text/html; charset=utf-8",
      "Pragma": "no-cache",
      "Retry-After": "86400",
      "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
    },
  })
}

export const config = {
  matcher: ["/:path*"],
}
