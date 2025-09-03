import { Calendar, MapPin } from "lucide-react"

export default function ExecutiveBriefingIntro() {
  return (
    <div className="mx-auto">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold leading-tight">Executive Briefing</h2>

        <p className="text-medium leading-relaxed max-w-3xl">
          Executive Briefing ini akan mempertemukan para pelaku bisnis untuk berdiskusi mengupas bagaimana pelaku
          bisnis dapat mengadopsi prinsip-prinsip keberlanjutan sekaligus menjaga integritas dalam operasional mereka.
        </p>

        <div className="space-y-3 pt-4">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5" />
            <span className="text-base font-bold">28 Agustus 2025</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5" />
            <span className="text-base font-bold">Gedung Tempo, Jl. Palmerah Barat No. 8, Jakarta Selatan 12210</span>
          </div>
        </div>
      </div>
    </div>
  )
}
