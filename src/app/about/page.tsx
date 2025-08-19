import Hero from "@/components/about/hero"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className="min-h-screen bg-[#eeeeee] py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#212121] mb-8">INSTAR</h1>

            <div className="text-[#424242] leading-relaxed space-y-4 text-base">
              <p>
                Indeks Integritas Bisnis Lestari (INSTAR) adalah sebuah alat pengukuran yang digunakan untuk menilai
                sejauh mana perusahaan atau organisasi menerapkan praktik bisnis yang berintegritas dan berkelanjutan.
                Indeks ini disusun oleh Transparency International Indonesia (TII) berkolaborasi dengan TEMPO Data
                Science.
              </p>

              <p>
                Indeks ini mengevaluasi tiga aspek dalam prinsip operasi bisnis yang berintegritas dan berkelanjutan
                yakni:
              </p>

              <div className="text-left max-w-2xl mx-auto">
                <p>1.) Aspek Bisnis Berintegritas</p>
                <p>2.) Aspek Bisnis dan Hak Asasi Manusia, serta</p>
                <p>3.) Aspek Lingkungan Hidup.</p>
              </div>

              <p>
                Tiga aspek yang dinilai dalam indeks ini merupakan turunan dari tiga fokus utama dalam pendekatan ESG
                (Environmental, Social, and Governance).
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-[#212121] mb-8">Visi</h2>
            <blockquote className="text-[#55a193] text-xl leading-relaxed max-w-3xl mx-auto">
              <span className="text-4xl">"</span>
              <span className="mx-2">
                Mendorong transformasi dunia usaha Indonesia menuju masa depan yang berkelanjutan, inklusif, dan
                berintegritas.
              </span>
              <span className="text-4xl">"</span>
            </blockquote>
          </div>

          {/* Mission Section */}
          <div className="text-center mb-16">
            <h2 className="text-2xl font-bold text-[#212121] mb-12">Misi</h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Mission 1 */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-2 border-[#55a193] bg-[#ffffff] flex flex-col items-center justify-center p-6 mb-4">
                  <div className="w-12 h-12 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#616161" strokeWidth="1.5" className="w-full h-full">
                      <path d="M3 13l4 4L21 3" />
                      <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
                    </svg>
                  </div>
                  <p className="text-[#424242] text-sm text-center leading-tight">
                    Menyusun indeks ESG yang independen, akurat, dan transparan bagi ekosistem bisnis Indonesia
                  </p>
                </div>
              </div>

              {/* Mission 2 */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-2 border-[#55a193] bg-[#ffffff] flex flex-col items-center justify-center p-6 mb-4">
                  <div className="w-12 h-12 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#616161" strokeWidth="1.5" className="w-full h-full">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </div>
                  <p className="text-[#424242] text-sm text-center leading-tight">
                    Mendorong dunia usaha untuk mengintegrasikan prinsip keberlanjutan dan etika dalam strategi bisnis
                  </p>
                </div>
              </div>

              {/* Mission 3 */}
              <div className="flex flex-col items-center">
                <div className="w-48 h-48 rounded-full border-2 border-[#55a193] bg-[#ffffff] flex flex-col items-center justify-center p-6 mb-4">
                  <div className="w-12 h-12 mb-4">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#616161" strokeWidth="1.5" className="w-full h-full">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                    </svg>
                  </div>
                  <p className="text-[#424242] text-sm text-center leading-tight">
                    Menjadi sumber informasi dan acuan terpercaya dalam pengambilan keputusan berbasis ESG
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-[#212121] mb-8">Partner</h2>

            <div className="flex justify-center items-center gap-12 flex-wrap">
              {/* TEMPO Data Science */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#e31e25] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div className="text-left">
                  <div className="text-[#e31e25] font-bold text-lg">TEMPO</div>
                  <div className="text-[#808285] text-sm">DATA SCIENCE</div>
                </div>
              </div>

              {/* Transparency International Indonesia */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#393186] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TI</span>
                </div>
                <div className="text-left">
                  <div className="text-[#393186] font-bold text-sm">TRANSPARENCY</div>
                  <div className="text-[#393186] font-bold text-sm">INTERNATIONAL</div>
                  <div className="text-[#808285] text-xs">Indonesia</div>
                  <div className="text-[#808285] text-xs">the global coalition against corruption</div>
                </div>
              </div>

              {/* Institute for Strategic Initiatives */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 border-2 border-[#424242] rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 border border-[#424242] rounded-full"></div>
                </div>
                <div className="text-left">
                  <div className="text-[#424242] font-bold text-sm">Institute for</div>
                  <div className="text-[#424242] font-bold text-sm">Strategic Initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
