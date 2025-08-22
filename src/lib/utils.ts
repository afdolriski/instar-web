import { cva } from "class-variance-authority"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const pageWrapper = cva(
  "py-8 px-4 md:px-32 md:py-16",
)

export const sectionWrapper = cva(
  "px-4 md:px-32",
)

export const contentWrapper = cva(
  // "py-8 px-4 md:px-32 md:py-16",
  "md:pt-8 space-y-4"
)