export default function VerificationBanner() {
  return (
    <div className="p-4 md:px-32">
      <div className="bg-[#cae2de] px-8 py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <h1 className="text-[#24443e] text-3xl font-bold mb-6 leading-tight">
              Verifikasi oleh Indonesia Strategy Institute (ISI)
            </h1>

            <div className="text-[#2f5850] text-lg leading-relaxed mb-8 space-y-4">
              <p>
                Hasil penilaian diatas adalah penilaian desk research oleh TII.
                <br />
                Dapatkan verifikasi penilaian lebih lanjut dan
                <br />
                tingkatkan kredibilitas perusahaan Anda.
              </p>

              <p className="font-medium">
                Daftarkan perusahaan Anda sekarang untuk proses
                <br />
                verifikasi mendalam kami!
              </p>
            </div>

            <button className="bg-[#194793] text-white px-8 py-3 font-semibold text-lg hover:bg-[#153a7a] transition-colors">
              Verifikasi Sekarang
            </button>
          </div>

          {/* Right Content */}
          <div className="flex-1 relative flex justify-end">
            {/* Verification Badge */}
            <div className="absolute top-0 right-32 z-10 bg-white rounded-lg shadow-lg p-4 flex items-center gap-4">
              <div className="relative">
                {/* Verification Seal */}
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 bg-[#ffd064] rounded-full opacity-20"></div>
                  <div className="absolute inset-2 bg-[#ffd064] rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-[#194793] text-xs font-bold">QINSTAR</div>
                      <div className="text-[#194793] text-xs font-bold">VERIFIED</div>
                      <div className="text-[#194793] text-xs">COMPANY</div>
                    </div>
                  </div>
                  {/* Decorative border */}
                  <div className="absolute inset-0 border-4 border-[#ffd064] rounded-full opacity-30"></div>
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm text-[#919eab] mb-1">Ambang Verifikasi</div>
                <div className="flex items-center gap-2">
                  <div className="bg-[#2f5850] text-white px-3 py-1 text-lg font-bold">80/100</div>
                </div>
                <div className="text-sm text-[#919eab] mt-1">Median</div>
              </div>
            </div>

            {/* Professional Image */}
            <div className="relative">
              <img
                src="/placeholder-nq432.png"
                alt="Professional businessman working on laptop"
                className="h-80 w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
