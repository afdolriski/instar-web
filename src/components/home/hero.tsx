import Image from "next/image"
import { Button } from "../ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative p-4 md:px-32 bg-[url(/images/bg-2.webp)] bg-cover">
      <div className="absolute inset-0 bg-black/85"></div>
      <div className="relative mx-auto">
        <div className="grid items-start md:grid-cols-10 space-y-8 py-6">
          <div className="flex justify-center gap-4 md:col-start-8 md:col-end-11 md:grid md:grid-cols-2 md:grid-rows-2">
            <Image
              src="/images/instar-commited.png"
              alt="Tempo"
              width={240}
              height={288}
              className="w-[100px] md:w-full h-auto md:scale-110 md:translate-x-10"
              priority
            />

            <Image
              src="/images/instar-verified.png"
              alt="Tempo"
              width={240}
              height={288}
              className="w-[100px] md:w-full h-auto md:scale-110 md:-translate-x-10 md:col-start-2 md:row-start-2"
              priority
            />
          </div>

          <div className="space-y-12 md:col-start-1 md:col-end-8 md:row-start-1">
            <div className="space-y-4">
              <h1 className="text-2xl lg:text-5xl font-semibold leading-tight" style={{ color: "#55a193" }}>
                Bangun Reputasi. Tunjukkan Integritas. Dapatkan Pengakuan
              </h1>

              {/* Description */}
              <p className="text-sm font-normal lg:text-lg text-white/90 leading-normal font-secondary">
                Secara transparan, Indeks Integritas Bisnis Lestari (INSTAR) mengukur dan memberi peringkat performa ESG
                perusahaan Indonesia dalam aksi berintegritas dan berkelanjutan.
              </p>

              <Button asChild>
                <Link href="/ranking/2025">
                  Peringkat INSTAR 2025
                </Link>
              </Button>
            </div>

            <div>
              <p className="text-white text-xs mb-2 font-secondary">Kolaborasi</p>
              <div className="flex flex-row items-start flex-wrap justify-between md:justify-start md:space-x-8 w-full">
                <Image
                  src="/images/tempo-data-white.png"
                  alt="Tempo"
                  width={70}
                  height={48}
                  className="w-[100px] h-auto"
                  priority
                />

                <Image
                  src="/images/tii-white.png"
                  alt="Tempo"
                  width={70}
                  height={48}
                  className="w-[100px] h-auto"
                  priority
                />

                <Image
                  src="/images/isi-white.png"
                  alt="Tempo"
                  width={70}
                  height={48}
                  className="w-[100px] h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
