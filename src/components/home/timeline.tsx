import { ArrowRight } from "lucide-react"
import HighlightCard from "../highlight-card"
import { Button } from "@/components/ui/button"
import React from "react";
import Link from "next/link";

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

function TimelineItem({ children }: { children?: React.ReactNode }) {
  return (
    <div className="relative md:p-8 w-full">
      <div className="absolute left-2.5 w-4 h-4 bg-[#fcfcfc] border-4 rounded-full md:top-4"></div>
      <div className="absolute top-1.5 w-full h-0.5 bg-[#fcfcfc] md:left-0 md:top-6"></div>
      <div className="absolute top-1.5 left-4 w-0.5 h-full bg-[#fcfcfc] invisible md:top-0 md:visible"></div>
      <div className="ml-12 text-white p-6 rounded-lg">
        {children}
      </div>
    </div>
  )
}

export default function Timeline() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16 space-y-10">
      <div>
        <h1 className="text-2xl font-bold mb-8">Timeline INSTAR 2025</h1>

        <div className="relative bg-tertiary-900 md:flex py-8 md:py-0 w-full">
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#d9d9d9] md:hidden"></div>

          <TimelineItem>
            <h3 className="text-white text-xl font-bold mb-2">Executive Briefing</h3>
            <p className="text-sm mb-4 opacity-90">Pengenalan awal INSTAR kepada perusahaan hasil seleksi awal</p>
            <p className="text-sm font-medium mb-4">28 Agustus 2025</p>
            <a href="#" className="inline-flex items-center text-sm underline hover:no-underline">
              Lihat Executive Briefing
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </TimelineItem>
          <TimelineItem>
            <h3 className="text-white text-xl font-bold mb-2">Verifikasi</h3>
            <p className="text-sm mb-4 opacity-90">
              Perusahaan dapat menyangah penilaian awal dan hasilnya akan menentukan skor akhir
            </p>
            <p className="text-sm font-medium">1 September - 24 Oktober 2025</p>
          </TimelineItem>
          <TimelineItem>
            <h3 className="text-white text-xl font-bold mb-2">Forum & Malam Anugerah</h3>
            <p className="text-sm mb-4 opacity-90">
              Puncak acara INSTAR dengan mengundang perusahaan yang dinilai dan pengumuman skor akhir
            </p>
            <p className="text-sm font-medium mb-4">14 November 2025</p>
            <a href="#" className="inline-flex items-center text-sm underline hover:no-underline">
              Lihat Forum & Malam Anugerah
              <ArrowRight className="ml-1 w-4 h-4" />
            </a>
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
