export default function ContactForm() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Section */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-[#212121] mb-6">Hubungi Kami</h1>
            <p className="text-[#424242] text-lg leading-relaxed">
              Isi formulir berikut untuk mendapatkan dukungan langsung bersama tim ahli kami.
            </p>
          </div>

          {/* Right Section - Form */}
          <div className="space-y-6">
            {/* First Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#212121] font-medium mb-2">Nama Lengkap</label>
                <input
                  type="text"
                  placeholder="Masukkan nama lengkap..."
                  className="w-full px-4 py-3 border border-[#9e9e9e] rounded-md bg-white text-[#424242] placeholder-[#9e9e9e] focus:outline-none focus:border-[#323c9f] focus:ring-1 focus:ring-[#323c9f]"
                />
              </div>
              <div>
                <label className="block text-[#212121] font-medium mb-2">Posisi Pekerjaan</label>
                <input
                  type="text"
                  placeholder="Masukkan posisi pekerjaan..."
                  className="w-full px-4 py-3 border border-[#9e9e9e] rounded-md bg-white text-[#424242] placeholder-[#9e9e9e] focus:outline-none focus:border-[#323c9f] focus:ring-1 focus:ring-[#323c9f]"
                />
              </div>
            </div>

            {/* Second Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-[#212121] font-medium mb-2">Asal Perusahaan</label>
                <input
                  type="text"
                  placeholder="Masukkan asal perusahaan..."
                  className="w-full px-4 py-3 border border-[#9e9e9e] rounded-md bg-white text-[#424242] placeholder-[#9e9e9e] focus:outline-none focus:border-[#323c9f] focus:ring-1 focus:ring-[#323c9f]"
                />
              </div>
              <div>
                <label className="block text-[#212121] font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email..."
                  className="w-full px-4 py-3 border border-[#9e9e9e] rounded-md bg-white text-[#424242] placeholder-[#9e9e9e] focus:outline-none focus:border-[#323c9f] focus:ring-1 focus:ring-[#323c9f]"
                />
              </div>
            </div>

            {/* Third Row */}
            <div>
              <label className="block text-[#212121] font-medium mb-2">Nomor Whatsapp</label>
              <input
                type="tel"
                placeholder="Masukkan nomor whatsapp..."
                className="w-full px-4 py-3 border border-[#9e9e9e] rounded-md bg-white text-[#424242] placeholder-[#9e9e9e] focus:outline-none focus:border-[#323c9f] focus:ring-1 focus:ring-[#323c9f]"
              />
            </div>

            {/* Radio Button Section */}
            <div className="space-y-4">
              <p className="text-[#212121] font-medium">
                Apakah kamu mempunyai preferensi waktu untuk berdiskusi lebih lanjut?
              </p>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="timePreference"
                    value="yes"
                    className="w-4 h-4 text-[#323c9f] border-[#9e9e9e] focus:ring-[#323c9f]"
                  />
                  <span className="text-[#424242]">Ya, saya memiliki preferensi waktu</span>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="timePreference"
                    value="no"
                    defaultChecked
                    className="w-4 h-4 text-[#323c9f] border-[#9e9e9e] focus:ring-[#323c9f]"
                  />
                  <span className="text-[#424242]">Tidak, saya fleksibel</span>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#194793] hover:bg-[#323c9f] text-white font-medium py-4 px-6 rounded-md transition-colors duration-200"
            >
              Kirim
            </button>

            {/* Privacy Notice */}
            <p className="text-sm text-[#616161] leading-relaxed">
              Kami menghargai privasi Anda. Data yang dikirimkan hanya untuk keperluan komunikasi dan tidak akan
              digunakan untuk keperluan lain.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
