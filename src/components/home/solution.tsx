import Image from "next/image"
import InstarBadge from "@/icons/instar-badge"
import InstarMicrosite from "@/icons/instar-microsite"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Solution() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16 space-y-10">
      <h2>
        Pengakuan Nyata atas Integritas dan Keberlanjutan
      </h2>
      <div className="md:grid md:grid-cols-2 md:grid-rows-1">
        <div className="mb-16 md:col-start-2">
          <Image
            src="/images/illustration-2.png"
            alt="Illustration"
            width={588}
            height={320}
            className="w-full h-auto object-cover m-auto"
          />
        </div>

        <div className="md:row-start-1">
          <div className="mb-12">
            <p>
              Perusahaan yang berhasil mencapai nilai di atas ambang batas (threshold) berhak mendapatkan pengakuan
              sebagai <span className="font-bold text-[#2f5850]">INSTAR Verified Company 2025</span> — simbol komitmen
              nyata terhadap integritas, keberlanjutan, dan tanggung jawab sosial.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full flex items-center justify-center">
                  <InstarBadge />
                </div>
              </div>
              <div className="space-y-2">
                <h3>INSTAR Badge</h3>
                <p>
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
              <div className="space-y-2">
                <h3>Microsite</h3>
                <p>
                  Berisi hasil evaluasi perusahaan berdasarkan beragam variabel yang dinilai melalui metode riset dan
                  verifikasi independen.
                </p>
              </div>
            </div>
          </div>

          <Button asChild variant={"outline"}>
            <Link href="/solution">
              Lihat Solusi INSTAR
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
