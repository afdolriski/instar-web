import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative bg-[#24443e] p-4 md:px-32">
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative mx-auto">
        <div className="grid items-center">
          <div className="space-y-4 py-6">
            <div className="flex justify-center gap-4">
              <Image
                src="/images/instar-commited.png"
                alt="Tempo"
                width={100}
                height={100}
                className="w-[100px] h-auto"
                priority
              />

              <Image
                src="/images/instar-verified.png"
                alt="Tempo"
                width={100}
                height={100}
                className="w-[100px] h-auto"
                priority
              />
            </div>

            <div className="text-white/90">

              <div className="text-lg lg:text-3xl font-bold leading-tight">Peringkat</div>

              <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
                INSTAR 2025
              </h1>
            </div>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed">
              Dari 956 perusahaan yang dinilai, hanya sekitar 300 yang berhasil memenuhi standar minimum dalam praktik HAM, lingkungan, dan antikorupsi.
              <br/>
              <br/>
              Temukan posisi perusahaan Anda. Bandingkan dengan sektor sejenis.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
