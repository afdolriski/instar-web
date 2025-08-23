import Image from "next/image"
import Hero from "@/components/about/hero"
import { cn, pageWrapper } from "@/lib/utils"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Hero />
      <div className={cn(pageWrapper(), "pt-0")}>
        <div className="space-y-8 md:space-y-16">

          <div className="space-y-10 md:px-64">
            <h1 className="text-4xl font-bold text-center">INSTAR</h1>

            <div className="leading-relaxed space-y-4 text-base">
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

              <div className="">
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

          <div className="space-y-4 md:space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Visi</h2>
              <blockquote className="text-3xl leading-relaxed max-w-2xl mx-auto">
                <span className="text-4xl text-tertiary-500 ">“</span>
                <span className="mx-2">
                  Mendorong transformasi dunia usaha Indonesia menuju masa depan yang berkelanjutan, inklusif, dan
                  berintegritas.
                </span>
                <span className="text-4xl text-tertiary-500">“</span>
              </blockquote>
            </div>

            {/* Mission Section */}
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold">Misi</h2>

              <div className="-space-y-12 md:space-y-0 md:flex md:items-center md:justify-center">
                <div className="flex flex-col items-center">
                  <div className="w-60 h-60 md:translate-x-4 rounded-full border-2 border-tertiary-400 flex flex-col items-center justify-center p-6 mb-4">
                    <Image
                      src={"/icons/about-1.svg"}
                      width={52}
                      height={52}
                      alt={"Menyusun indeks ESG yang independen, akurat, dan transparan bagi ekosistem bisnis Indonesia"}
                      className="mb-4"
                    />
                    <p className="font-bold">Menyusun indeks ESG </p>
                    <p className="text-sm text-center leading-tight">
                      yang independen, akurat, dan transparan bagi ekosistem bisnis Indonesia
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-60 h-60 rounded-full border-2 border-tertiary-400 flex flex-col items-center justify-center p-6 mb-4">
                    <Image
                      src={"/icons/about-2.svg"}
                      width={52}
                      height={52}
                      alt={"Menyusun indeks ESG yang independen, akurat, dan transparan bagi ekosistem bisnis Indonesia"}
                      className="mb-4"
                    />
                    <p className="font-bold">Mendorong dunia usaha </p>
                    <p className="text-sm text-center leading-tight">
                      untuk mengintegrasikan prinsip keberlanjutan dan etika dalam strategi bisnis
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-60 h-60 md:-translate-x-4 rounded-full border-2 border-tertiary-400 flex flex-col items-center justify-center p-6 mb-4">
                    <Image
                      src={"/icons/about-3.svg"}
                      width={52}
                      height={52}
                      alt={"Menyusun indeks ESG yang independen, akurat, dan transparan bagi ekosistem bisnis Indonesia"}
                      className="mb-4"
                    />
                    <p className="font-bold">Menjadi sumber informasi</p>
                    <p className="text-sm text-center leading-tight">
                      dan acuan terpercaya dalam pengambilan keputusan berbasis ESG
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Partners Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold  mb-8">Partner</h2>

            <div className="flex justify-center items-center gap-12 flex-wrap">
              <Image
                src="/images/tempo-data.png"
                alt="Tempo"
                width={200}
                height={100}
                className="w-[200px] h-auto"
                priority
              />
              <Image
                src="/images/tii.png"
                alt="TII"
                width={200}
                height={100}
                className="w-[200px] h-auto"
                priority
              />
              <Image
                src="/images/isi.png"
                alt="Instar"
                width={200}
                height={100}
                className="w-[200px] h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
