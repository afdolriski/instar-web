// components/MapEmbed.tsx
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Props = {
  title: string
  embedSrc: string     // paste the full https://www.google.com/maps/embed?pb=... here
  mapsUrl: string      // regular maps url for "Open Map" button
}

export function MapEmbed({ title, embedSrc, mapsUrl }: Props) {
  return (
    <a href={mapsUrl} target="_blank">
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          src={embedSrc}
          className="absolute inset-0 h-full w-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`${title} map`}
        />
      </div>
    </a>
  )
}
