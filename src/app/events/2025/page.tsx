import Hero from "@/components/events/2025/hero"
import ExecutiveBriefingIntro from "@/components/events/2025/executive-briefing-intro"
import EventSchedule from "@/components/events/2025/event-schedule"
import Location from "@/components/events/2025/location"
import Collab from "@/components/events/2025/collab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <div className="">
        <Tabs defaultValue="main">
          <TabsList className="w-full">
            <TabsTrigger value="main" className="rounded-none">Executive Briefing (25 Agustus 2025)</TabsTrigger>
            <TabsTrigger value="second" className="rounded-none">Forum & Malam Anugerah (14 November 2025)</TabsTrigger>
          </TabsList>
          <TabsContent value="main" className="bg-[#ffffff] p-4 md:px-32 md:py-10">
            <ExecutiveBriefingIntro />
            <EventSchedule />
            <div>
              <h1 className="text-2xl font-bold px-8 py-6">Lokasi</h1>
              <Location />
              <Collab />
            </div>
          </TabsContent>
          <TabsContent value="second" className="bg-[#ffffff] p-4 md:px-32 md:py-10">
            <ExecutiveBriefingIntro />
            <EventSchedule />
            <EventSchedule />
            <div>
              <h1 className="text-2xl font-bold px-8 py-6">Lokasi</h1>
              <Location />
              <Collab />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
