'use client'

import { useSearchParams } from "next/navigation";
import ExecutiveBriefingIntro from "@/components/events/2025/executive-briefing-intro"
import EventSchedule from "@/components/events/2025/event-schedule"
import Collab from "@/components/events/2025/collab"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import MalamAnugrahInfo from "@/components/events/2025/malam-anugrah-intro"
import { MapEmbed } from "@/components/map-embed"
import EventScheduleForum from "@/components/events/2025/event-schedule-forum"
import EventScheduleAnugrah from "@/components/events/2025/event-schedule-anugrah"

const wrapper = () => 'px-4 py-8 md:px-32 md:py-10 space-y-8';

export default function EventContent() {
  const searchParams = useSearchParams();

  const defaultTab = searchParams.get("tab");
  const validTabs = ["executive-briefing", "malam-anugrah"];
  const initialTab =
    defaultTab && validTabs.includes(defaultTab)
      ? defaultTab
      : "executive-briefing";

  return (
    <Tabs defaultValue={initialTab} className="gap-0">
      <TabsList className="w-full text-primary py-8 md:py-4 sticky top-[64px] z-100">
        <TabsTrigger value="executive-briefing" className="cursor-pointer hover:text-primary-500 rounded-none w-[50%] flex flex-col md:flex-row py-8 md:py-4">
          <span>Executive Briefing</span>
          <span>(10 September 2025)</span>
        </TabsTrigger>
        <TabsTrigger value="malam-anugrah" className="cursor-pointer hover:text-primary-500 rounded-none w-[50%] flex flex-col md:flex-row py-8 md:py-4">
          <span>Forum & Malam Anugerah</span>
          <span>(14 November 2025)</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="executive-briefing">
        <div className={wrapper()}>
          <ExecutiveBriefingIntro />
        </div>
        <Separator />
        <div className={wrapper()}>
          <EventSchedule />
        </div>
        <Separator />
        <div className={wrapper()}>
          <h1 className="text-xl font-bold">Lokasi</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
            <div>
              <h2 className="text-xl md:text-3xl font-bold mb-4">Gedung Tempo Media, Palmerah, Jakarta Barat</h2>
              <p className="text-normal leading-relaxed">
                Jl. Palmerah Barat No.8, Grogol Utara, Kec. Kby. Lama, Kota Jakarta Selatan,
                <br />
                Daerah Khusus Ibukota Jakarta 12210
              </p>
            </div>

            <div className="relative col-start-1 row-start-1 md:col-start-2">
              <MapEmbed 
                title="Gedung Tempo Media, Palmerah, Jakarta Barat"
                embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.417547413599!2d106.78736297549071!3d-6.208528310816298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1145bd035f9%3A0xc744bc8572b47d1c!2sPT%20Tempo%20Inti%20Media%20Tbk!5e0!3m2!1sen!2sid!4v1756826371248!5m2!1sen!2sid" 
                mapsUrl="https://maps.app.goo.gl/CucJTWqrNPUdCwMR9"
              />
            </div>
          </div>
          <Collab />
        </div>
      </TabsContent>
      <TabsContent value="malam-anugrah">
        <div className={wrapper()}>
          <MalamAnugrahInfo />
        </div>
        <Separator />
        <div className={wrapper()}>
          <EventScheduleForum />
        </div>
        <Separator />
        <div className={wrapper()}>
          <EventScheduleAnugrah />
        </div>
        <Separator />
        <div className={wrapper()}>
          <h1 className="text-xl font-bold">Lokasi</h1>
          <div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
              <div>
                <h2 className="text-xl md:text-3xl font-bold mb-4">JS Luwansa Hotel & Convention</h2>
                <p className="text-normal leading-relaxed">
                  Jl. H. R. Rasuna Said No.22 Kav. C, RT.2/RW.5, Karet Kuningan, Kecamatan Setiabudi,
                  <br />
                    Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940
                </p>
              </div>
      
              <div className="relative col-start-1 row-start-1 md:col-start-2">
                <MapEmbed 
                  title="JS Luwansa Hotel & Convention"
                  embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.309416260986!2d106.83042757549083!3d-6.222870160947514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3f127d08675%3A0x29a39276bac061d4!2sJS%20Luwansa%20Hotel!5e0!3m2!1sen!2sid!4v1755955483187!5m2!1sen!2sid" 
                  mapsUrl="https://maps.app.goo.gl/U4PeWywcSYBUu2Sg6"
                />
              </div>
            </div>
          </div>
          <Collab />
        </div>
      </TabsContent>
    </Tabs>
  )
}
