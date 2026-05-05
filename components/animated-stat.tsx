"use client"

import { useEffect, useRef, useState } from "react"

type AnimatedStatProps = {
  value: number
  suffix?: string
  prefix?: string
  duration?: number
  className?: string
}

export function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  duration = 1400,
  className,
}: AnimatedStatProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const frameRef = useRef<number | null>(null)
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    const element = ref.current

    if (!element) {
      return
    }

    const finish = () => setDisplayValue(value)

    if (
      typeof window === "undefined" ||
      !("IntersectionObserver" in window) ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      finish()
      return
    }

    const runCounter = () => {
      let start: number | null = null

      const step = (timestamp: number) => {
        if (start === null) {
          start = timestamp
        }

        const progress = Math.min((timestamp - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)

        setDisplayValue(Math.round(value * eased))

        if (progress < 1) {
          frameRef.current = window.requestAnimationFrame(step)
        }
      }

      frameRef.current = window.requestAnimationFrame(step)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCounter()
          observer.disconnect()
        }
      },
      { threshold: 0.35 }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
      }
    }
  }, [duration, value])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  )
}
