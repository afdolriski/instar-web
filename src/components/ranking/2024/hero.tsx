import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative p-4 md:px-32 md:py-16 bg-tertiary-900 isolate overflow-hidden">
      <div className="absolute bottom-[-10rem] left-[-20rem] -z-10 h-[40rem] w-[45rem] md:w-[80rem] rotate-150 transform bg-tertiary-800"></div>
      <div className="absolute right-[-25rem] top-[-15rem] -z-10 h-[50rem] w-[45rem] md:w-[80rem] -rotate-150 transform bg-tertiary-800/30"></div>

      <div className="relative mx-auto">
        <div className="grid items-start md:grid-cols-10 space-y-8 py-6">
          <div className="space-y-8 md:col-start-1 md:col-end-8 md:row-start-1 my-auto">
            <div className="md:space-y-1">
              <div className="text-xl lg:text-3xl font-bold text-white">Peringkat</div>
              <h1 className="text-2xl lg:text-5xl font-bold text-white">
                INSTAR 2024
              </h1>
            </div>
            <div className="space-y-4 text-white/90 text-xs md:text-base leading-relaxed">
              <p>
                INSTAR menilai 100 perusahaan indonesia yang terdaftar di Bursa Efek Indonesia (IDX) berdasarkan keterbukaan mereka. Peringkat ini dibuat untuk mendorong transparansi, akuntabilitas, dan aksi nyata dalam praktik ESG.
              </p>
              <p className="font-bold">
                Telusuri peringkat dan bandingkan posisi perusahaan Anda di industri sejenis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
