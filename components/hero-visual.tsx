"use client"

import { useEffect, useRef } from "react"
import { BadgeCheck, Globe2, Landmark, ShieldCheck } from "lucide-react"

const nodes = [
  { left: "12%", top: "26%", size: "h-2.5 w-2.5", delay: "0s" },
  { left: "25%", top: "16%", size: "h-3 w-3", delay: "0.6s" },
  { left: "78%", top: "18%", size: "h-2.5 w-2.5", delay: "0.2s" },
  { left: "88%", top: "42%", size: "h-3.5 w-3.5", delay: "1s" },
  { left: "17%", top: "67%", size: "h-3.5 w-3.5", delay: "1.2s" },
  { left: "72%", top: "72%", size: "h-3 w-3", delay: "0.4s" },
  { left: "54%", top: "12%", size: "h-2 w-2", delay: "1.5s" },
  { left: "44%", top: "82%", size: "h-2.5 w-2.5", delay: "0.9s" },
]

const proofPoints = [
  { icon: ShieldCheck, label: "IP scan", value: "Ready" },
  { icon: BadgeCheck, label: "Trademark watch", value: "Active" },
  { icon: Globe2, label: "Global filing", value: "20+" },
  { icon: Landmark, label: "Strategy review", value: "Clear" },
]

export function HeroVisual() {
  const visualRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const visual = visualRef.current

    if (!visual || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = visual.getBoundingClientRect()
      const x = (event.clientX - rect.left) / rect.width - 0.5
      const y = (event.clientY - rect.top) / rect.height - 0.5

      visual.style.setProperty("--hero-shift-x", `${x * 28}px`)
      visual.style.setProperty("--hero-shift-y", `${y * 22}px`)
    }

    window.addEventListener("pointermove", handlePointerMove)

    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [])

  return (
    <div
      ref={visualRef}
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden
    >
      <div className="hero-dynamic-grid" />
      <div className="hero-orbit-field">
        <div className="hero-orbit hero-orbit-one" />
        <div className="hero-orbit hero-orbit-two" />
        <div className="hero-orbit hero-orbit-three" />
        <div className="hero-trace hero-trace-one" />
        <div className="hero-trace hero-trace-two" />
        <div className="hero-trace hero-trace-three" />

        {nodes.map((node, index) => (
          <span
            key={`${node.left}-${node.top}`}
            className={`hero-node absolute rounded-full ${node.size}`}
            style={{
              animationDelay: node.delay,
              left: node.left,
              top: node.top,
            }}
          >
            <span className="sr-only">Signal node {index + 1}</span>
          </span>
        ))}
      </div>

      <div className="hero-proof-panel hidden lg:flex left-[7%] top-[31%]">
        {proofPoints.slice(0, 2).map((point) => (
          <div key={point.label} className="hero-proof-row">
            <point.icon className="h-4 w-4 text-accent" />
            <span>{point.label}</span>
            <strong>{point.value}</strong>
          </div>
        ))}
      </div>

      <div className="hero-proof-panel hidden lg:flex right-[7%] top-[55%]">
        {proofPoints.slice(2).map((point) => (
          <div key={point.label} className="hero-proof-row">
            <point.icon className="h-4 w-4 text-accent" />
            <span>{point.label}</span>
            <strong>{point.value}</strong>
          </div>
        ))}
      </div>
    </div>
  )
}
