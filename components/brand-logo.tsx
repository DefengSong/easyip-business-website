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
        "inline-flex h-9 items-center rounded-md bg-white px-2 py-1 shadow-[0_12px_34px_-24px_var(--primary)] ring-1 ring-primary/10",
        className
      )}
    >
      <Image
        src="/easyip-logo.png?v=20260512"
        alt="EasyIP Group"
        width={871}
        height={167}
        priority={priority}
        className={cn("h-7 w-auto object-contain", imageClassName)}
      />
    </span>
  )
}
