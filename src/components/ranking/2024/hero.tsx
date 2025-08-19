import Image from "next/image"

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
                INSTAR 2024
              </h1>
            </div>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed">
              INSTAR menilai 100 perusahaan indonesia yang terdaftar di Bursa Efek Indonesia (IDX) berdasarkan keterbukaan mereka. Peringkat ini dibuat untuk mendorong transparansi, akuntabilitas, dan aksi nyata dalam praktik ESG. 
              <br/>
              <br/>
              Telusuri peringkat dan bandingkan posisi perusahaan Anda di industri sejenis.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}
