import Image from "next/image"
import { Button } from "../ui/button"

export default function Hero() {
  return (
    <section className="relative p-4 md:px-32 bg-[#24443e]">
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

            <h1 className="text-2xl lg:text-5xl font-bold leading-tight" style={{ color: "#55a193" }}>
              Bangun Reputasi. Tunjukkan Integritas. Dapatkan Pengakuan
            </h1>

            {/* Description */}
            <p className="text-base lg:text-lg text-white/90 leading-relaxed">
              Secara transparan, Indeks Integritas Bisnis Lestari (INSTAR) mengukur dan memberi peringkat performa ESG
              perusahaan Indonesia dalam aksi berintegritas dan berkelanjutan.
            </p>

            <Button>Peringkat INSTAR 2025</Button>

            {/* Partners Section */}
            <div className="pt-8">
              <p className="text-white text-sm mb-2">Kolaborasi</p>
              <div className="flex items-center flex-wrap justify-between md:justify-start md:space-x-8">
                <Image
                  src="/images/tempo-data-white.png"
                  alt="Tempo"
                  width={120}
                  height={48}
                  className="w-[120px] h-auto"
                  priority
                />

                <Image
                  src="/images/tii-white.png"
                  alt="Tempo"
                  width={120}
                  height={48}
                  className="w-[120px] h-auto"
                  priority
                />

                <Image
                  src="/images/isi-white.png"
                  alt="Tempo"
                  width={120}
                  height={48}
                  className="w-[120px] h-auto"
                  priority
                />

              </div>
            </div>
          </div>

          {/* Right Content - Badges */}
          <div className="flex flex-col items-center lg:items-end gap-8">


          </div>
        </div>
      </div>
    </section>
  )
}
