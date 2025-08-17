import Image from "next/image"
import { Globe, Star } from "lucide-react"
import InstarBadge from "@/icons/instar-badge"
import InstarMicrosite from "@/icons/instar-microsite"
import { Button } from "../ui/button"

export default function Solution() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] p-4">
      <div className="mb-16">
        <Image
          src="/images/illustration-1.png"
          alt="Illustration"
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Section */}
      <div className="max-w-4xl px-4 ">
        <div className="mb-12">
          <h1 className="text-xl md:text-5xl font-bold text-[#212121] mb-6 leading-tight">
            Pengakuan Nyata atas Integritas dan Keberlanjutan
          </h1>
          <p className="text-sm text-[#616161] leading-relaxed max-w-3xl mx-auto">
            Perusahaan yang berhasil mencapai nilai di atas ambang batas (threshold) berhak mendapatkan pengakuan
            sebagai <span className="font-bold text-[#2f5850]">INSTAR Verified Company 2025</span> — simbol komitmen
            nyata terhadap integritas, keberlanjutan, dan tanggung jawab sosial.
          </p>
        </div>

        {/* Features */}
        <div className="space-y-8 mb-12">
          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <InstarBadge />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#212121] mb-2">INSTAR Badge</h3>
              <p className="text-sm leading-relaxed">
                Penilaian badge dilakukan lewat evaluasi dokumen TII & verifikasi ISI via media & Resilience Check.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 flex items-center justify-center">
                <InstarMicrosite />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#212121] mb-2">Microsite</h3>
              <p className="text-sm leading-relaxed">
                Berisi hasil evaluasi perusahaan berdasarkan beragam variabel yang dinilai melalui metode riset dan
                verifikasi independen.
              </p>
            </div>
          </div>
        </div>

        <Button variant={"outline"}>Lihat Solusi INSTAR</Button>
      </div>
    </div>
  )
}
