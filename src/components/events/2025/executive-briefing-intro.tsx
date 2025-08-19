import { Calendar, MapPin } from "lucide-react"

export default function ExecutiveBriefingIntro() {
  return (
    <div className="bg-[#ffffff] p-8">
      <div className="mx-auto">
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold text-[#000000] leading-tight">Executive Briefing</h1>

          <p className="text-lg text-[#424242] leading-relaxed max-w-3xl">
            Executive Briefing ini akan mempertemukan para pelaku bisnis untuk berdiskusi mengupas bagaimana pelaku
            bisnis dapat mengadopsi prinsip-prinsip keberlanjutan sekaligus menjaga integritas dalam operasional mereka.
          </p>

          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[#424242]" />
              <span className="text-[#424242] text-base">28 Agustus 2025</span>
            </div>

            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-[#424242]" />
              <span className="text-[#424242] text-base">Aroem Restaurant & Ballroom, Jakarta Selatan</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
