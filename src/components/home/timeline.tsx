import { ArrowRight } from "lucide-react"
import HighlightCard from "../highlight-card"
import { Button } from "@/components/ui/button"
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const collabs = [
  {
    title: 'Sponsor Kit',
    description: 'Sponsor Kit dirancang fleksibel untuk kebutuhan eksposur dan kolaborasi perusahaan.',
    icon: 'icons/sponsor.svg',
  },
  {
    title: 'Media Kit',
    description: 'Media Kit berisi materi promosi seperti visual, rilis artikel, dan advertorial untuk publikasi capaian perusahaan.',
    icon: 'icons/media.svg',
  },
];

function TimelineItem({ children, className, position }: { children?: React.ReactNode; className?: string; position?: string }) {
  return (
    <div className={cn("relative md:p-8 w-full", className)}>
      <div className={cn("absolute left-2.5 w-4 h-4 bg-[#fcfcfc] border-4 rounded-full md:-bottom-2", position === 'bottom' ? 'md:-top-2' : '')}></div> 
      <div className="absolute top-1.5 w-full h-0.5 bg-[#fcfcfc] xl:left-0 xl:hidden"></div>
      <div className="absolute top-1.5 left-4 w-0.5 h-full bg-[#fcfcfc] invisible xl:top-0 xl:visible"></div>
      <div className="ml-12 md:ml-4 text-white p-6 md:p-0 rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16 space-y-10" id="timeline">
      <div>
        <h1 className="text-2xl font-bold mb-8">Timeline INSTAR 2025</h1>

        <div className="relative bg-tertiary-900 xl:grid grid-cols-12 grid-flow-row auto-rows-fr py-8 xl:py-0 w-full bg-[url(/images/timeline-bg.png)] bg-cover bg-no-repeat bg-blend-luminosity md:bg-center">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#d9d9d9] xl:left-0 xl:top-[50%] xl:w-full xl:h-[1px]"></div>

          <TimelineItem className="relative row-start-1 col-start-2 col-end-6 md:pb-4">
            <h3 className="text-white text-xl font-secondary font-bold mb-2">Executive Briefing</h3>
            <p className="text-sm mb-4 opacity-90">Pengenalan awal INSTAR kepada perusahaan hasil seleksi awal</p>
            <p className="text-sm font-medium mb-4">10 September 2025</p>
            <Link href="/events/2025" className="inline-flex items-center text-sm underline hover:no-underline text-white font-secondary">
              Lihat Executive Briefing
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </TimelineItem>
          <TimelineItem className="relative row-start-2 col-start-5 col-end-9" position="bottom">
            <h3 className="text-white text-xl font-secondary font-bold mb-2">Verifikasi</h3>
            <p className="text-sm mb-4 opacity-90">
              Perusahaan dapat menyangah penilaian awal dan hasilnya akan menentukan skor akhir
            </p>
            <p className="text-sm font-medium">1 September - 24 Oktober 2025</p>
          </TimelineItem>
          <TimelineItem className="relative row-start-1 col-start-7 col-end-12 md:pb-0">
            <h3 className="text-white text-xl font-secondary font-bold mb-2">Forum & Malam Anugerah</h3>
            <p className="text-sm mb-4 opacity-90">
              Puncak acara INSTAR dengan mengundang perusahaan yang dinilai dan pengumuman skor akhir
            </p>
            <p className="text-sm font-medium mb-4">14 November 2025</p>
            <Link href="/events/2025?tab=malam-anugrah" className="inline-flex items-center text-sm underline hover:no-underline text-white font-secondary">
              Lihat Forum & Malam Anugerah
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </TimelineItem>
        </div>
      </div>

      <div className="space-y-4">
        <h2>Kolaborasi dalam acara INSTAR</h2>
        <p>
          Tingkatkan posisi, visibilitas dan kredibilitas perusahaan Anda di mata publik, regulator, dan mitra bisnis
          melalui solusi INSTAR.
        </p>

        <div className="space-y-6 md:flex md:space-x-8 md:space-y-0">
          {collabs.map((item, key) => (
            <HighlightCard key={key} {...item} />
          ))}
        </div>

        <Button asChild variant={"outline"}>
          <Link href="/solution">
            Lihat Solusi INSTAR
          </Link>
        </Button>
      </div>
    </div>
  )
}
