import { ArrowRight } from "lucide-react"
import HighlightCard from "../highlight-card"
import { Button } from "../ui/button"

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

export default function Timeline() {
  return (
    <div className="bg-[#fcfcfc] p-4 md:px-32 md:py-16">
      <div className="mx-auto">
        {/* Header */}
        <h1 className="text-2xl font-bold text-[#212121] mb-8">Timeline INSTAR 2025</h1>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#d9d9d9]"></div>

          {/* Executive Briefing */}
          <div className="relative mb-6">
            <div className="absolute left-2 w-4 h-4 bg-[#fcfcfc] border-4 border-[#24443e] rounded-full"></div>
            <div className="ml-12 bg-[#24443e] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Executive Briefing</h2>
              <p className="text-sm mb-4 opacity-90">Pengenalan awal INSTAR kepada perusahaan hasil seleksi awal</p>
              <p className="text-sm font-medium mb-4">28 Agustus 2025</p>
              <a href="#" className="inline-flex items-center text-sm underline hover:no-underline">
                Lihat Executive Briefing
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Verifikasi */}
          <div className="relative mb-6">
            <div className="absolute left-2 w-4 h-4 bg-[#fcfcfc] border-4 border-[#24443e] rounded-full"></div>
            <div className="ml-12 bg-[#24443e] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Verifikasi</h2>
              <p className="text-sm mb-4 opacity-90">
                Perusahaan dapat menyangah penilaian awal dan hasilnya akan menentukan skor akhir
              </p>
              <p className="text-sm font-medium">1 September - 24 Oktober 2025</p>
            </div>
          </div>

          {/* Forum & Malam Anugerah */}
          <div className="relative mb-12">
            <div className="absolute left-2 w-4 h-4 bg-[#fcfcfc] border-4 border-[#24443e] rounded-full"></div>
            <div className="ml-12 bg-[#24443e] text-white p-6 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Forum & Malam Anugerah</h2>
              <p className="text-sm mb-4 opacity-90">
                Puncak acara INSTAR dengan mengundang perusahaan yang dinilai dan pengumuman skor akhir
              </p>
              <p className="text-sm font-medium mb-4">14 November 2025</p>
              <a href="#" className="inline-flex items-center text-sm underline hover:no-underline">
                Lihat Forum & Malam Anugerah
                <ArrowRight className="ml-1 w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-[#212121] mb-4">Kolaborasi dalam acara INSTAR</h2>
          <p className="text-[#616161] text-sm mb-6 leading-relaxed">
            Tingkatkan posisi, visibilitas dan kredibilitas perusahaan Anda di mata publik, regulator, dan mitra bisnis
            melalui solusi INSTAR.
          </p>

          <div className="md:flex md:space-x-8">
            {collabs.map((item, key) => (
              <HighlightCard key={key} {...item} />
            ))}
          </div>
        </div>

        <Button variant={"outline"}>Lihat Solusi INSTAR</Button>
      </div>
    </div>
  )
}
