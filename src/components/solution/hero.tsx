import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-r from-[#2F5951] via-[#478579] via-57% to-[#6CB1A4] p-6 md:p-24">
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      <div className="relative mx-auto">
        <div className="grid items-center">
          <div className="space-y-4 py-6 text-center md:w-[80%] mx-auto">

            <h1 className="text-2xl lg:text-4xl font-bold leading-tight text-white/90">
              Tampilkan Capaian Integritas Secara Strategis 
            </h1>

            <p className="text-base lg:text-lg text-white/90 leading-relaxed">
              Buktikan komitmen ESG Anda secara kredibel, tingkatkan visibilitas di mata publik dan investor, serta penuhi tuntutan transparansi dengan Solusi INSTAR.
            </p>

            <Button>Hubungi Kami</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
