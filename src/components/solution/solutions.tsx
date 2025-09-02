import { cn, contentWrapper, sectionWrapper } from "@/lib/utils"
import Image from "next/image"

export default function Solutions() {
  return (
    <div className={cn(sectionWrapper(), "space-y-8")}>
      <header className="text-center">
        <h1 className="text-3xl font-bold]">Solusi INSTAR</h1>
      </header>

      <div className="mx-auto px-6 space-y-16">
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/instar-commited.png"
              alt="Tempo"
              width={240}
              height={288}
              className="w-[150px] md:w-[200px] h-auto -translate-x-5 md:-translate-x-10"
              priority
            />

            <Image
              src="/images/instar-verified.png"
              alt="Tempo"
              width={240}
              height={288}
              className="w-[150px] md:w-[200px] h-auto translate-x-5 md:translate-x-10"
              priority
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">INSTAR Badge</h2>
            <p className="leading-relaxed">
              Bukti visual yang kredibel atas komitmen perusahaan terhadap integritas, etika, dan keberlanjutan, yang
              memperkuat kepercayaan publik, mitra, dan investor.
            </p>
            <ul className="space-y-3 font-bold">
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Rayakan pencapaian dengan pengakuan yang kredibel
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Tingkatkan citra brand di media sosial, website, hingga laporan tahunan.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Bangun kesan positif ke publik dan investor melalui simbol yang bermakna.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/illustration-3.png"
            alt="Illustration"
            width={520}
            height={520}
            className="w-full h-auto col-start-1 md:col-start-2"
          />

          <div className="space-y-6 md:col-start-1 md:row-start-1">
            <h2 className="text-2xl font-bold">Microsite Pencapaian Perusahaan</h2>
            <p className="leading-relaxed">
              Halaman eksklusif yang mempublikasikan hasil verifikasi INSTAR secara profesional, kredibel, dan mudah
              diakses publik.
            </p>
            <ul className="space-y-3 font-bold">
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Diakui publik dan investor dengan menunjukkan capaian dari verifikasi independen.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Pesan keberlanjutan disampaikan secara luas dengan mudah, cukup dari satu halaman terpercaya.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Komunikasi eksternal jadi lebih praktis dan konsisten.
              </li>
            </ul>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-12 items-center">
          <Image
            src="/images/malam-anugrah-kit.png"
            alt="Illustration"
            width={520}
            height={520}
            className="w-full h-auto"
          />

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Sponsor Kit Malam Anugerah</h2>
            <p className="leading-relaxed">
              Ajang Malam Anugerah bergengsi yang membuka peluang eksposur premium untuk meningkatkan citra perusahaan
              Anda sebagai pemimpin bisnis berintegritas.
            </p>
            <ul className="space-y-3 font-bold">
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Dapatkan eksposur luas melalui penempatan logo di berbagai materi promosi, baik digital maupun di
                panggung utama.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Perkuat reputasi perusahaan sebagai pionir bisnis berintegritas di Indonesia.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Bangun koneksi strategis melalui kehadiran eksklusif di acara tingkat eksekutif.
              </li>
            </ul>
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <Image
            src="/images/tempo-kit.png"
            alt="Illustration"
            width={520}
            height={520}
            className="w-full h-auto  col-start-1 md:col-start-2"
          />

          <div className="space-y-6 md:col-start-1 md:row-start-1">
            <h2 className="text-2xl font-bold">Media Kit di Tempo Media</h2>
            <p className="leading-relaxed">
              Perkuat pesan strategis perusahaan Anda dengan eksposur menyeluruh di platform media terpercaya yang
              menjangkau audiens cerdas, digital, dan sosial media serentak.
            </p>
            <ul className="space-y-3 font-bold">
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Bangun kredibilitas lewat advertorial penuh di Majalah Tempo yang dibaca oleh pengambil keputusan dan
                opinion leader.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Jangkau audiens digital secara luas melalui publikasi artikel advertorial di Tempo.co.
              </li>
              <li className="flex items-start">
                <span className="text-tertiary-700 mr-2">▶</span>
                Perluas dampak pesan Anda melalui promosi di kanal sosial media Tempo yang menjangkau jutaan pengguna.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  )
}
