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
  "md:pt-8 space-y-4"
)

export const thumbnailTemplateUrl = (path: string) => 
  `https://www.tempo.co/cdn-cgi/image/width=500,fit=cover,quality=90,format=webp/https://instar-assets.tempo.co/${path}`

export const detailTemplateUrl = (path: string) => `https://instar-assets.tempo.co/${path}`