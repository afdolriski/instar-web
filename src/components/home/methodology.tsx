import { Button } from "@/components/ui/button"
import HighlightCard from "@/components/highlight-card"
import ExpertList from "@/components/experts";

const highlights = [
  {
    title: 'Bisnis Berintegritas',
    description: 'Berdasarkan Transparency in Corporate Reporting (TRAC) dari Transparency International.',
    icon: '/icons/integritas.svg',
  },
  {
    title: 'Lingkungan Hidup',
    description: 'Mengacu pada standar Global Reporting Initiative (GRI) dan Taksonomi Hijau dari OJK.',
    icon: '/icons/lingkungan-hidup.svg',
  },{
    title: 'Sosial & Hak Asasi Manusia',
    description: 'Berdasarkan UN Guiding Principles on Business and Human Rights (UNGPs).',
    icon: '/icons/social.svg',
  },
];

const verifications = [
  {
    title: 'Media Monitoring',
    description: 'Menelusuri pemberitaan negatif dari media kredibel untuk mendeteksi praktik greenwashing atau whitewashing.',
    icon: '/icons/monitoring.svg',
  },
  {
    title: 'Corporate Resilience Check',
    description: 'Analisis ini mengevaluasi kualitas pelaporan, potensi manipulasi dan fraud, risiko litigasi, serta ketahanan strategi dan keuangan perusahaan.',
    icon: '/icons/report.svg',
  },
];

export default function Methodology() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4 md:w-[75%]">
          <h2>Standar Penilaian INSTAR Berdasarkan Prinsip ESG International</h2>
          <p>
            Penilaian INSTAR dilakukan secara objektif, periodik dan tidak mencari keuntungan yang berlebihan dari
            perusahaan yang dinilai.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h4>1. Desk Research oleh Transparency International Indonesia (TII)</h4>
            <div className="p-4 space-y-4">
              <p className="md:w-[75%]">
                TII melakukan penilaian terhadap dokumen resmi perusahaan—seperti Annual Report, Sustainability Report, dan Pedoman Etika—menggunakan 42 indikator yang mencakup:
              </p>
              <div className="space-y-6 md:flex justify-evenly md:space-x-8 md:space-y-0">
                {highlights.map((item, key) => (
                  <HighlightCard key={key} {...item} />
                ))}
              </div>
              <p className="md:w-[75%]">
                Hasil dari proses ini membentuk skor Desk Research INSTAR, yang menjadi dasar kelayakan untuk verifikasi lanjutan.
              </p>
            </div>
          </div>

          <div>
            <h4>2. Verifikasi oleh Indonesia Strategy Institute (ISI)</h4>
            <div className="p-4 space-y-4">
              <p className="md:w-[75%]">
                Nilai akhir INSTAR memerlukan verifikasi lanjutan dari skor Desk Research. Proses verifikasi lanjutan dilakukan oleh tim Indonesia Strategy Institute dengan melakukan: 
              </p>
              <div className="space-y-6 md:flex justify-evenly md:space-x-8 md:space-y-0">
                {verifications.map((item, key) => (
                  <HighlightCard key={key} {...item} />
                ))}
              </div>
              <p className="md:w-[75%]">
                Penilaian ini mengikuti agar hanya perusahaan yang terbaik, benar berintegritas dan tangguh yang dapat lolos.
              </p>
            </div>
          </div>
          
          <Button variant={'outline'} asChild>
            <a href="https://drive.google.com/file/d/1gttKsLrhE6EEzVxn3qTn2kT8YzTKDDag/view" target="_blank">Lihat Metodologi Selengkapnya</a>
          </Button>
        </div>

        <ExpertList />
      </div>
    </div>
  )
}
