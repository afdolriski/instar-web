import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-[#24443e] p-4 md:px-32">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto">
        <div className="grid items-center">
          <div className="space-y-4 py-6">

            <div className="text-white/90">

              <div className="text-lg lg:text-3xl font-bold leading-tight">INSTAR 2025</div>

              <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
                Menghadirkan Agenda Bisnis yang Mendorong Perubahan Nyata
              </h1>
            </div>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed">
              Rangkaian acara INSTAR 2025 menghadirkan forum strategis bagi para pemimpin bisnis dan pemangku kepentingan untuk membahas praktik integritas, keberlanjutan, serta transparansi korporasi di Indonesia.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
