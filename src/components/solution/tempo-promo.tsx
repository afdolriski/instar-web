import Image
 from "next/image"
export default function TempoPromo() {
  return (
    <div className="bg-[#fcfcfc] min-h-screen py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#212121] mb-6">Raih Bonus Eksklusif dari Tempo</h1>
          <p className="text-lg text-[#424242] max-w-4xl mx-auto leading-relaxed">
            Raih bonus eksklusif sebagai bentuk apresiasi atas partisipasi perusahaan dalam memilih solusi INSTAR.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left Column - Tempo Data Premium */}
          <div className="text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                {/* <img
                  src="/images/macbook-air-tempo.png"
                  alt="Tempo Data Premium Laptop Mockup"
                  className="w-full max-w-lg mx-auto"
                /> */}
                <Image
                  src={'/images/macbook-air-tempo.png'}
                  alt={'Tempo Data Premium Laptop Mockup'}
                  width={400}
                  height={400}
                  className="w-auto h-auto mx-auto"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">Tempo Data Premium</h2>
            <p className="text-[#424242] text-lg leading-relaxed">
              Dapatkan langganan Tempo Digital selama 1 tahun untuk 8 akun.
            </p>
          </div>

          {/* Right Column - Langganan Tempo Media */}
          <div className="text-center">
            <div className="mb-8">
              <div className="relative inline-block">
                {/* <img
                  src="/images/tempo-subscription.png"
                  alt="Tempo Media Subscription Multiple Devices"
                  className="w-full max-w-lg mx-auto"
                /> */}
                <Image
                  src={'/images/tempo-subscription.png'}
                  alt={'Tempo Media Subscription Multiple Devices'}
                  width={400}
                  height={400}
                  className="w-auto h-auto mx-auto"
                />
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-[#212121] mb-4">Langganan Tempo Media</h2>
            <p className="text-[#424242] text-lg leading-relaxed">
              Akses eksklusif ke ribuan data riset bisnis, statistik, arsip media sejak 1971, dan dokumentasi terpercaya
              dari Tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
