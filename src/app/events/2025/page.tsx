import Hero from "@/components/events/2025/hero"
import EventContent from "@/components/events/2025/content"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <div className="pb-16">
        <EventContent />
      </div>
    </div>
  )
}
