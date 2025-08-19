export default function Solutions() {
  return (
    <div className="min-h-screen bg-[#fcfcfc]">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-3xl font-bold text-[#212121]">Solusi INSTAR</h1>
      </header>

      <div className="max-w-6xl mx-auto px-6 space-y-16">
        {/* INSTAR Badge Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center space-y-6">
            {/* Blue Badge */}
            <div className="relative">
              <div className="w-48 h-48 bg-[#60b7fe] rounded-full flex items-center justify-center border-8 border-[#4bc0ff] relative">
                <div className="text-center text-white">
                  <div className="text-xs font-semibold mb-1">INSTAR</div>
                  <div className="bg-[#354a67] px-4 py-2 rounded text-xs font-bold">COMMITTED</div>
                  <div className="text-xs mt-1">COMPANY</div>
                  <div className="text-xs">2024</div>
                </div>
                {/* Star decorations */}
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-[#4bc0ff] rounded-full"></div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#4bc0ff] rounded-full"></div>
                <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-[#4bc0ff] rounded-full"></div>
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#4bc0ff] rounded-full"></div>
              </div>
            </div>

            {/* Gold Badge */}
            <div className="relative">
              <div className="w-40 h-40 bg-[#ffbf31] rounded-full flex items-center justify-center border-6 border-[#cf8c48] relative">
                <div className="text-center text-[#2d2e2e]">
                  <div className="text-xs font-semibold mb-1">INSTAR</div>
                  <div className="bg-[#cf8c48] text-white px-3 py-1 rounded text-xs font-bold">VERIFIED</div>
                  <div className="text-xs mt-1">COMPANY</div>
                  <div className="text-xs">2025</div>
                </div>
                {/* Ribbon decoration */}
                <div className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-[#f0b16e]"></div>
                <div className="absolute -right-4 top-1/2 transform -translate-y-1/2 w-8 h-4 bg-[#f0b16e]"></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#212121]">INSTAR Badge</h2>
            <p className="text-[#424242] leading-relaxed">
              Bukti visual yang kredibel atas komitmen perusahaan terhadap integritas, etika, dan keberlanjutan, yang
              memperkuat kepercayaan publik, mitra, dan investor.
            </p>
            <ul className="space-y-3 text-[#424242]">
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Rayakan pencapaian dengan pengakuan yang kredibel
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Tingkatkan citra brand di media sosial, website, hingga laporan tahunan.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Bangun kesan positif ke publik dan investor melalui simbol yang bermakna.
              </li>
            </ul>
          </div>
        </section>

        {/* Microsite Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#212121]">Microsite Pencapaian Perusahaan</h2>
            <p className="text-[#424242] leading-relaxed">
              Halaman eksklusif yang mempublikasikan hasil verifikasi INSTAR secara profesional, kredibel, dan mudah
              diakses publik.
            </p>
            <ul className="space-y-3 text-[#424242]">
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Diakui publik dan investor dengan menunjukkan capaian dari verifikasi independen.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Pesan keberlanjutan disampaikan secara luas dengan mudah, cukup dari satu halaman terpercaya.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Komunikasi eksternal jadi lebih praktis dan konsisten.
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="/images/businessman-achievements.png"
              alt="Microsite Achievement Display"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Sponsor Kit Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/award-night-branding.png"
              alt="Sponsor Kit Materials"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#212121]">Sponsor Kit Malam Anugerah</h2>
            <p className="text-[#424242] leading-relaxed">
              Ajang Malam Anugerah bergengsi yang membuka peluang eksposur premium untuk meningkatkan citra perusahaan
              Anda sebagai pemimpin bisnis berintegritas.
            </p>
            <ul className="space-y-3 text-[#424242]">
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Dapatkan eksposur luas melalui penempatan logo di berbagai materi promosi, baik digital maupun di
                panggung utama.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Perkuat reputasi perusahaan sebagai pionir bisnis berintegritas di Indonesia.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Bangun koneksi strategis melalui kehadiran eksklusif di acara tingkat eksekutif.
              </li>
            </ul>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-[#212121]">Media Kit di Tempo Media</h2>
            <p className="text-[#424242] leading-relaxed">
              Perkuat pesan strategis perusahaan Anda dengan eksposur menyeluruh di platform media terpercaya yang
              menjangkau audiens cerdas, digital, dan sosial media serentak.
            </p>
            <ul className="space-y-3 text-[#424242]">
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Bangun kredibilitas lewat advertorial penuh di Majalah Tempo yang dibaca oleh pengambil keputusan dan
                opinion leader.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Jangkau audiens digital secara luas melalui publikasi artikel advertorial di Tempo.co.
              </li>
              <li className="flex items-start">
                <span className="text-[#14b5a2] mr-2">▶</span>
                Perluas dampak pesan Anda melalui promosi di kanal sosial media Tempo yang menjangkau jutaan pengguna.
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src="/images/tempo-media-kit.png"
              alt="Media Kit Display"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </section>
      </div>
    </div>
  )
}
