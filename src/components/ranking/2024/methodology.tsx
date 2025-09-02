import { Button } from "@/components/ui/button";

export default function Methodology() {
  return (
    <div className="md:px-16">
      <div className="">
        <article className="p-8 md:p-12">
          <h1 className="text-2xl font-bold text-center mb-8">Metodologi INSTAR 2024</h1>

          <div className="space-y-6 leading-relaxed">
            <p>
              Indeks Integritas Bisnis Lestari (INSTAR) dihimpun dengan menggunakan metodologi yang diadaptasi dari metode penilaian TRAC (Transparency In Corporate Reporting) sebuah metode penilaian pelaporan perusahaan yang dikembangkan oleh Transparency International Secretariat (TI-S) di Berlin, Jerman untuk menanggulangi praktik korupsi di sektor bisnis.
            </p>

            <p>
              Adaptasi dalam penilaian INSTAR dilakukan dengan mengembangkan metode penilaian TRAC yang sebelumnya fokus pada Anti Korupsi (Aspek Bisnis Berintegritas), ditambahkan dengan dua aspek penilaian lain yakni: Aspek Bisnis dan Hak Asasi Manusia serta Aspek Lingkungan Hidup.
            </p>

            <p>
              Dalam melakukan pengembangan indikator aspek Bisnis dan Hak Asasi Manusia (BHR) dengan referensi pada United Nations Guiding Principles on Business and Human Rights (UNGPs on BHR) untuk pengembangan indikator: penghormatan HAM, warisan budaya, hak pekerja, keadilan gender, jaminan kesehatan untuk masyarakat terdampak, dan penyaluran CSR perusahaan agar tepat sasaran, kami mengambil referensi pada UNGP on BHR.
            </p>

            <p>
              Sedangkan untuk aspek lingkungan, kami mengambil referensi pada standar pelaporan perusahaan dari Global Reporting Initiative (GRI) untuk penentuan indikator: pengelolaan air, emisi gas rumah kaca (GRK), konsumsi energi perusahaan, dan perlindungan terhadap keanekaragaman hayati
            </p>

            <p className="mb-0">
              Indeks ini mengevaluasi tiga aspek dalam prinsip operasi bisnis yang berintegritas dan berkelanjutan yakni:
            </p>
            <ul className="space-y-4 ml-6">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div className="font-secondary">
                  Aspek Bisnis Berintegritas
                </div>
              </li>

              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div className="font-secondary">
                  Aspek Bisnis dan Hak Asasi Manusia, serta
                </div>
              </li>

              <li className="flex items-start">
                <span className="mr-2">•</span>
                <div className="font-secondary">
                  Aspek Lingkungan Hidup.
                </div>
              </li>
            </ul>

            <p>
              Tiga aspek yang dinilai dalam indeks ini merupakan turunan dari tiga fokus utama dalam pendekatan ESG (Environmental, Social, and Governance).
            </p>

            <p className="font-bold">Pelajari lebih lanjut tentang pendekatan dan indikator yang kami gunakan dalam penilaian.</p>

            <Button variant={'outline'} asChild>
              <a href="https://img.tempo.co/bisnis-lestari/IIBL2024-ExcutiveSummary.pdf?in=1&n_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbiI6ImM4NjUyNWU1ZDdlZjhkODY0ZDk2OWY3MGJiYjRhYjZkIn0.PPjoUDdapD_MrMYqqmTgvb1W518KVQJMF9cQoo8Fhls" target="_blank">Lihat Metodologi Selengkapnya</a>
            </Button>
          </div>
        </article>
      </div>
    </div>
  )
}
