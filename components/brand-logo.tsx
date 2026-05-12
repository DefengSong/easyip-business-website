import Image from "next/image"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  className?: string
  imageClassName?: string
  priority?: boolean
}

export function BrandLogo({
  className,
  imageClassName,
  priority = false,
}: BrandLogoProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-white px-2.5 py-1.5 shadow-[0_12px_34px_-24px_var(--primary)] ring-1 ring-primary/10",
        className
      )}
    >
      <Image
        src="/easyip-logo.png"
        alt="EasyIP Group"
        width={188}
        height={59}
        priority={priority}
        className={cn("h-8 w-auto object-contain", imageClassName)}
      />
    </span>
  )
}
