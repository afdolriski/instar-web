import Image from "next/image"

export default function Location() {
  return (
    <div className="px-8 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Restaurant Information */}
        <div>
          <h2 className="text-3xl font-bold text-[#212121] mb-4">Aroem Restaurant & Ballroom</h2>
          <p className="text-[#616161] text-lg leading-relaxed">
            Jl. Mahakam No.15, RT.1/RW.6, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
            <br />
            Daerah Khusus Ibukota Jakarta 12130
          </p>
        </div>

        {/* Map Section */}
        <div className="relative">
          <div className="bg-[#eeeeee] rounded-lg overflow-hidden h-80">
            <Image
              src="/jakarta-map.png"
              alt="Jakarta Map"
              width={500}
              height={320}
              className="w-full h-full object-cover"
            />
            {/* Map overlay elements */}
            <div className="absolute top-4 right-4 bg-white rounded px-2 py-1 text-sm text-[#616161]">
              BTA 8 Jakarta
            </div>
            <div className="absolute top-12 right-8 flex items-center gap-2 bg-white rounded-lg px-3 py-2 shadow-sm">
              <div className="w-6 h-6 bg-[#194793] rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">M</span>
              </div>
              <div>
                <div className="text-sm font-semibold text-[#212121]">Aroem Mahakam</div>
                <div className="text-xs text-[#616161]">Resto, Cafe &...</div>
              </div>
            </div>
            <div className="absolute bottom-4 right-4 bg-[#616161] text-white px-2 py-1 rounded text-xs">
              Buka Peta
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
