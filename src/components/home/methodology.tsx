import Image from "next/image"
import { Button } from "../ui/button"
import HighlightCard from "../highlight-card"

function ProfileCard() {
  return (
    <div className="max-w-md mx-auto bg-[#ffffff] mb-8 ">
      <div>
        <Image
          src="/images/Sonny-Mumbunan.png"
          alt="Sonny Mumbunan"
          width={400}
          height={400}
          className="w-full h-auto rounded-lg"
          priority
        />
      </div>

      <div className="py-4 px-4">
        <h1 className="text-xl font-bold text-[#212121] leading-tight">Sonny Mumbunan</h1>

        <p className="text-sm text-[#424242] leading-relaxed">Climate Policy Lab, Faculty of Social Sciences (UIII)</p>
      </div>
    </div>
  )
}


export default function Methodology() {
  return (
    <div className="bg-[#fcfcfc] p-4 mb-4">
      <div className="max-w-2xl mx-auto">

        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-1">Standar Penilaian INSTAR Berdasarkan Prinsip ESG International</h2>
            <p className="text-sm leading-relaxed">
              Penilaian INSTAR dilakukan secara objektif, periodik dan tidak mencari keuntungan yang berlebihan dari
              perusahaan yang dinilai.
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="justify-center font-bold text-lg">
                1.
              </div>
              <div>
                <h3 className="font-bold text-[#212121] mb-2">Desk Research oleh Transparency International Indonesia (TII)</h3>
              </div>
            </div>
            <p className="text-sm text-[#424242] leading-relaxed">
              TII melakukan penilaian terhadap dokumen resmi perusahaan—seperti Annual Report, Sustainability Report, dan Pedoman Etika—menggunakan 42 indikator yang mencakup:
            </p>
          </div>

          <HighlightCard />
          <HighlightCard />
          <HighlightCard />

          <div className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="justify-center font-bold text-lg">
                2.
              </div>
              <div>
                <h3 className="font-bold text-[#212121] mb-2">Verifikasi oleh Indonesia Strategy Institute (ISI)</h3>
              </div>
            </div>
            <p className="text-sm text-[#424242] leading-relaxed">
              Nilai akhir INSTAR memerlukan verifikasi lanjutan dari skor Desk Research. Proses verifikasi lanjutan dilakukan oleh tim Indonesia Strategy Institute dengan melakukan: 
            </p>
          </div>

          <HighlightCard />
          <HighlightCard />

          <div className="p-6">
            <p className="text-sm text-[#424242] leading-relaxed">
              Penilaian ini mengikuti agar hanya perusahaan yang terbaik, benar berintegritas dan tangguh yang dapat
              lolos.
            </p>
          </div>
          
          <Button variant={'outline'}>Lihat Metodologi Selengkapnya</Button>
        </div>


        {/* Expert Profiles Header */}
        {/* <div className="bg-[#2f5951] text-white p-6">
          <h2 className="text-xl font-bold mb-2">Profil Pakar INSTAR 2025</h2>
          <p className="text-sm leading-relaxed">
            Penilaian dilakukan oleh para pakar dan spesialis bersama para pakar dari bidang HAM dan lingkungan. Dengan
            pengalaman bertahun-tahun, mereka untuk memastikan hasil yang kredibel dan akurat saat.
          </p>
        </div> */}

        {/* <ProfileCard /> */}

        {/* Expert Profiles */}
        <div className="space-y-0 px-4 bg-[#24443e] py-8">
          <div className="text-white mb-4">
            <h2 className="text-xl font-bold mb-2">Profil Pakar INSTAR 2025</h2>
            <p className="text-sm leading-relaxed">
              Penilaian dilakukan oleh para pakar dan spesialis bersama para pakar dari bidang HAM dan lingkungan. Dengan
              pengalaman bertahun-tahun, mereka untuk memastikan hasil yang kredibel dan akurat saat.
            </p>
          </div>

          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />
          <ProfileCard />


        </div>
      </div>
    </div>
  )
}
