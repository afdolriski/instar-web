import { Button } from "../ui/button"
import HighlightCard from "../highlight-card"
import ProfileCard from "../profile-card"

const highlights = [
  {
    title: 'Bisnis Berintegritas',
    description: 'Berdasarkan Transparency in Corporate Reporting (TRAC) dari Transparency International.',
    icon: 'icons/integritas.svg',
  },
  {
    title: 'Lingkungan Hidup',
    description: 'Mengacu pada standar Global Reporting Initiative (GRI) dan Taksonomi Hijau dari OJK.',
    icon: 'icons/lingkungan-hidup.svg',
  },{
    title: 'Sosial & Hak Asasi Manusia',
    description: 'Berdasarkan UN Guiding Principles on Business and Human Rights (UNGPs).',
    icon: 'icons/social.svg',
  },
];

const verifications = [
  {
    title: 'Media Monitoring',
    description: 'Menelusuri pemberitaan negatif dari media kredibel untuk mendeteksi praktik greenwashing atau whitewashing.',
    icon: 'icons/monitoring.svg',
  },
  {
    title: 'Corporate Resilience Check',
    description: 'Analisis ini mengevaluasi kualitas pelaporan, potensi manipulasi dan fraud, risiko litigasi, serta ketahanan strategi dan keuangan perusahaan.',
    icon: 'icons/report.svg',
  },
];

const profiles = [
  {
    name: 'Sonny Mumbunan',
    title: 'Climate Policy Lab, Faculty of Social Sciences (UIII)',
    image: '/images/Sonny-Mumbunan.png',
  },
  {
    name: 'Erry Riyana Hardjapamekas',
    title: 'Ketua Koalisi Anti Korupsi',
    image: '/images/Erry-Riyana.png',
  },
  {
    name: 'Natalia Soebagjo',
    title: 'International Council Member, Transparency International',
    image: '/images/Natalia-Soebagjo.png',
  },
  {
    name: 'Jeffrey S. Siregar',
    title: 'Executive Director, Komite Nasional Kebijakan Governansi',
    image: '/images/Jeffrey-Siregar.png',
  },
];

export default function Methodology() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16">
      <div className="space-y-8 md:space-y-12">
        <div className="space-y-4">
          <h2>Standar Penilaian INSTAR Berdasarkan Prinsip ESG International</h2>
          <p>
            Penilaian INSTAR dilakukan secara objektif, periodik dan tidak mencari keuntungan yang berlebihan dari
            perusahaan yang dinilai.
          </p>
        </div>

        <div className="space-y-4">
          <div>
            <h3>1. Desk Research oleh Transparency International Indonesia (TII)</h3>
            <div className="p-4 space-y-4">
              <p>
                TII melakukan penilaian terhadap dokumen resmi perusahaan—seperti Annual Report, Sustainability Report, dan Pedoman Etika—menggunakan 42 indikator yang mencakup:
              </p>
              <div className="space-y-6 md:flex justify-evenly md:space-x-8 md:space-y-0">
                {highlights.map((item, key) => (
                  <HighlightCard key={key} {...item} />
                ))}
              </div>
              <p>
                Hasil dari proses ini membentuk skor Desk Research INSTAR, yang menjadi dasar kelayakan untuk verifikasi lanjutan.
              </p>
            </div>
          </div>

          <div>
            <h3>2. Verifikasi oleh Indonesia Strategy Institute (ISI)</h3>
            <div className="p-4 space-y-4">
              <p>
                Nilai akhir INSTAR memerlukan verifikasi lanjutan dari skor Desk Research. Proses verifikasi lanjutan dilakukan oleh tim Indonesia Strategy Institute dengan melakukan: 
              </p>
              <div className="space-y-6 md:flex justify-evenly md:space-x-8 md:space-y-0">
                {verifications.map((item, key) => (
                  <HighlightCard key={key} {...item} />
                ))}
              </div>
              <p>
                Penilaian ini mengikuti agar hanya perusahaan yang terbaik, benar berintegritas dan tangguh yang dapat lolos.
              </p>
            </div>
          </div>
          
          <Button variant={'outline'}>Lihat Metodologi Selengkapnya</Button>
        </div>

        <div className="p-8 bg-tertiary-900 space-y-8 md:p-8">
          <div className="space-y-4">
            <h2 className="text-white">Profil Pakar INSTAR 2025</h2>
            <p className="text-white md:max-w-[60%]">
              Penilaian dilakukan oleh para pakar dan spesialis bersama para pakar dari bidang HAM dan lingkungan, Dengan
              pengalaman bertahun-tahun, mereka untuk memastikan hasil yang kredibel dan akurat saat.
            </p>
          </div>

          <div className="space-y-6 md:grid md:grid-cols-4 gap-4 md:space-y-0">
            {profiles.map((item, key) => (
              <ProfileCard key={key} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
