import { sectionWrapper } from "@/lib/utils"
import Image
 from "next/image"
export default function TempoPromo() {
  return (
    <div className={sectionWrapper()}>
      <div className="mx-auto">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">Raih Bonus Eksklusif dari Tempo</h1>
          <p className="text-base mx-auto">
            Raih bonus eksklusif sebagai bentuk apresiasi atas partisipasi perusahaan dalam memilih solusi INSTAR.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="mb-8">
              <div className="text-center">
                <Image
                  src={'/images/macbook-air-tempo.png'}
                  alt={'Tempo Data Premium Laptop Mockup'}
                  width={400}
                  height={400}
                  className="w-auto h-auto mx-auto"
                />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Tempo Data Premium</h2>
            <p className="text-base">
              Dapatkan langganan Tempo Digital selama 1 tahun untuk 8 akun.
            </p>
          </div>

          {/* Right Column - Langganan Tempo Media */}
          <div >
            <div className="mb-8">
              <div className="text-center">
                <Image
                  src={'/images/tempo-subscription.png'}
                  alt={'Tempo Media Subscription Multiple Devices'}
                  width={400}
                  height={400}
                  className="w-auto h-auto mx-auto"
                />
              </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Langganan Tempo Media</h2>
            <p className="text-base">
              Akses eksklusif ke ribuan data riset bisnis, statistik, arsip media sejak 1971, dan dokumentasi terpercaya
              dari Tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
