import { Button } from "@/components/ui/button";

export default function Methodology() {
  return (
    <div className="md:px-16">
      <article className="p-8 md:p-12">
        <h1 className="text-2xl font-bold text-center mb-8">Metodologi INSTAR 2025</h1>

        <div className="space-y-6 text-[#424242] leading-relaxed">
          <p>
            Indeks Integritas Bisnis Lestari ini dihimpun dengan menggunakan metodologi yang diadaptasi dari metode
            penilaian TRAC (Transparency In Corporate Reporting) sebuah metode penilaian pelaporan perusahaan yang
            dikembangkan oleh Transparency International Secretariat (TI-S) di Berlin, Jerman untuk menanggulangi
            praktik korupsi di sektor bisnis.
          </p>

          <p>
            Adaptasi dalam penilaian Indeks Integritas Bisnis Lestari dilakukan dengan mengembangkan metode penilaian
            TRAC yang sebelumnya fokus pada Anti Korupsi (Dimensi Bisnis Berintegritas), ditambahkan dengan dua aspek
            penilaian lain yakni: Dimensi Sosial dan Hak Asasi Manusia serta Dimensi Lingkungan Hidup.
          </p>

          <p>
            Dalam melakukan pengembangan indikator dimensi Sosial dan Hak Asasi Manusia (BHR) dengan referensi pada
            United Nations Guiding Principles on Business and Human Rights (UNGPs on BHR) untuk pengembangan
            indikator: penghormatan HAM, warisan budaya, hak pekerja, keadilan gender, jaminan kesehatan untuk
            masyarakat terdampak, dan penyaluran CSR perusahaan agar tepat sasaran. Sedangkan untuk aspek lingkungan,
            kami mengambil referensi pada standar pelaporan perusahaan dari Global Reporting Initiative (GRI) untuk
            penentuan indikator: pengelolaan air, emisi gas rumah kaca (GRK), konsumsi energi perusahaan, dan
            perlindungan terhadap keanekaragaman hayati.
          </p>

          <p>
            Indeks Integritas Bisnis Lestari juga mengadaptasi mekanisme pengurang skor penilaian perusahaan
            berdasarkan pantauan media (media monitoring) yang dilakukan tim peneliti. Mekanisme skor pengurang
            berlaku bagi perusahaan yang melakukan pelanggaran atas tiga standar tersebut dan dibuktikan dengan
            pemberitaan media.
          </p>

          <p>
            Tidak hanya mengadaptasi media monitoring sebagai metode verifikasi, INSTAR juga melakukan analisis
            corporate resilience untuk mendeteksi praktek greenwashing yang tersembunyi di balik rating ESG tinggi.
            Ketidakharmonisan antara narasi keberlanjutan dan kinerja keuangan dapat mengindikasikan bahwa peringkat
            ESG yang tinggi belum tentu mencerminkan kinerja keberlanjutan yang sejati. Analisis corporate resilience
            terdiri dari:
          </p>

          <ul className="space-y-4 ml-6">
            <li className="flex items-start">
              <span className="text-[#212121] mr-2">•</span>
              <div>
                <strong className="text-[#212121]">Disclosure Quality</strong> — Untuk menilai potensi manipulasi
                laporan keuangan. Jika Disclosure Quality bagus maka berkurang kemungkinan perusahaan untuk melakukan
                manipulasi laporan keuangan (Beneish, 1999).
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-[#212121] mr-2">•</span>
              <div>
                <strong className="text-[#212121]">Compliance Exposure</strong> — Untuk menilai potensi risiko
                litigasi yang akan dihadapi perusahaan. Jika Compliance Exposure bagus maka berkurang kemungkinan
                perusahaan untuk menghadapi gugatan hukum (Karpoff, 2017 dan Dyck, 1996)
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-[#212121] mr-2">•</span>
              <div>
                <strong className="text-[#212121]">Ethic Institution</strong> — Untuk menilai potensi terjadinya fraud
                atau perilaku tidak etis lainnya dalam perusahaan. Jika ethic institution bagus maka berkurang
                kemungkinan perusahaan untuk melakukan berbagai bentuk kecurangan fraud atau perilaku tidak etis lain
                (Cressey, 1953 dan Skousen, 2009).
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-[#212121] mr-2">•</span>
              <div>
                <strong className="text-[#212121]">Strategy Readiness</strong> — Untuk menilai kapasitas perusahaan
                untuk mencapai tujuan strategis perusahaan. Jika strategic readiness bagus maka besar kemungkinan
                perusahaan untuk mencapai visi misi perusahaan dan menjadi market leader di industrinya (Miles & Snow,
                1978 dan Porter, 1998)
              </div>
            </li>

            <li className="flex items-start">
              <span className="text-[#212121] mr-2">•</span>
              <div>
                <strong className="text-[#212121]">Financial Resilience</strong> — Untuk menilai risiko keamanan
                financial perusahaan hingga risiko kebangkrutan. Jika financial resilience bagus maka perusahaan untuk
                bertahan dan pulih dari guncangan finansial. Perusahaan dengan financial resilience yang kuat
                cenderung memiliki lebih banyak sumber daya untuk mengatasi masalah keuangan (Altman, 1968)
              </div>
            </li>
          </ul>

          <p>Pelajari lebih lanjut tentang pendekatan dan indikator yang kami gunakan dalam penilaian.</p>

          <Button variant="outline" className="mt-6">
            Lihat Pertanyaan Lainnya
          </Button>
        </div>
      </article>
    </div>
  )
}
