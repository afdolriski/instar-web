import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative p-4 md:px-32 bg-tertiary-900">
      <div className="absolute inset-0 bg-black/40"></div>
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

          <div className="space-y-8 md:col-start-1 md:col-end-8 md:row-start-1 my-auto">
            <div className="space-y-1">
              <div className="text-xl lg:text-3xl font-bold leading-tight text-white">Peringkat</div>
              <h1 className="text-2xl lg:text-5xl font-bold leading-tight text-white">
                INSTAR 2025
            </h1>
            </div>
            <div className="space-y-4 text-white/90 text-xs md:text-base leading-relaxed">
              <p className="">
                Dari 956 perusahaan yang dinilai, hanya sekitar 421 yang berhasil memenuhi standar minimum dalam praktik HAM, lingkungan, dan antikorupsi.
              </p>
              <p className="font-bold">
                Temukan posisi perusahaan Anda. Bandingkan dengan sektor sejenis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
