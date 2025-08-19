import Hero from "@/components/events/2024/hero"
import ExecutiveBriefingIntro from "@/components/events/2025/executive-briefing-intro"
import Location from "@/components/events/2025/location"
import Gallery from "@/components/gallery"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className="bg-[#ffffff] p-4 md:px-32 md:py-10">
        <ExecutiveBriefingIntro />
        <div className="space-y-10">
          <h1 className="text-2xl font-bold px-8 py-6">Lokasi</h1>
          <Gallery />
          <Location />
        </div>
      </div>
    </div>
  )
}
