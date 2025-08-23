import { Calendar, MapPin } from "lucide-react"

export default function MalamAnugrahInfo() {
  return (
    <div className="mx-auto">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold leading-tight">Forum & Malam Anugerah</h2>

        <p className="text-medium leading-relaxed max-w-3xl">
          Puncak acara INSTAR dengan mengundang perusahaan yang dinilai dan pengumuman skor akhir
        </p>

        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5" />
            <span className="text-base font-bold">14 November 2025</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5" />
            <span className="text-base font-bold">JS Luwansa, Jakarta Selatan</span>
          </div>
        </div>
      </div>
    </div>
  )
}
