import Image from "next/image"
import { Button } from "../ui/button"

const chartData = [
  { sector: "Keuangan", failed: 60, passed: 90, total: 150 },
  { sector: "Energi", failed: 57, passed: 78, total: 135 },
  { sector: "Industri", failed: 55, passed: 70, total: 125 },
  { sector: "Infrastruktur", failed: 50, passed: 55, total: 105 },
  { sector: "Teknologi", failed: 40, passed: 50, total: 90 },
  { sector: "Transportasi & Logistik", failed: 40, passed: 45, total: 85 },
  { sector: "Siklus Konsumen", failed: 37, passed: 43, total: 80 },
  { sector: "Konsumen Non-Siklus", failed: 35, passed: 40, total: 75 },
  { sector: "Bahan Dasar", failed: 30, passed: 35, total: 65 },
  { sector: "Kesehatan", failed: 25, passed: 35, total: 60 },
  { sector: "Properties & Real Estate", failed: 20, passed: 30, total: 50 },
]

export default function Section1() {

  return (
    <div className="bg-[#ffffff] p-4 md:px-32 md:py-10">
      <div className="mx-auto">
        {/* Main Headline */}
        <h1 className="text-3xl md:text-3xl font-bold text-[#212121] mb-8 leading-tight">
          Wujudkan Bisnis yang Terpercaya dengan INSTAR
        </h1>

        <div className="space-y-6 mb-12">
          <p className="text-[#424242] leading-relaxed">
            Indeks Integritas Bisnis Lestari (INSTAR) adalah inisiatif bersama antara TEMPO Data Science dan
            Transparency International Indonesia (TII) yang bertujuan mendorong praktik bisnis yang transparan,
            bertanggung jawab, dan berkelanjutan di Indonesia. Melalui pendekatan berbasis data dan evaluasi terbuka,
            INSTAR adalah langkah nyata menuju ekosistem bisnis yang lebih sehat dan dipercaya publik.
          </p>

          <p className="text-[#424242] leading-relaxed">
            Dari 956 perusahaan yang dinilai, terdapat 300 yang memenuhi standar minimum integritas dan keberlanjutan.
          </p>
        </div>

        {/* Chart Section */}
        <div className="bg-[#fcfcfc] border border-[#e0e0e0] rounded-lg p-6 mb-8 relative">
          <h2 className="font-semibold mb-6">
            300 Perusahaan Yang Lolos Desk Research INSTAR 2025
          </h2>

          {/* Legend */}
          {/* <div className="flex items-center gap-6 mb-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#a51621] rounded-sm"></div>
              <span className="text-[#424242]">Tidak Lolos Standar INSTAR</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#194793] rounded-sm"></div>
              <span className="text-[#424242]">Lolos Standar INSTAR</span>
            </div>
          </div> */}

          <Image
            src="/images/chart-lg.png"
            alt="Tempo"
            width={1100}
            height={480}
            className="w-full h-auto"
            priority
          />

          {/* Chart */}
          {/* <div className="space-y-3">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div className="w-32 text-right pr-4 text-sm text-[#424242]">{item.sector}</div>
                <div className="flex-1 flex items-center relative">
                  <div className="flex w-full max-w-md">
                    <div
                      className="bg-[#a51621] h-6 flex items-center justify-end pr-2"
                      style={{ width: `${(item.failed / 150) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">{item.failed}</span>
                    </div>
                    <div
                      className="bg-[#194793] h-6 flex items-center justify-end pr-2"
                      style={{ width: `${(item.passed / 150) * 100}%` }}
                    >
                      <span className="text-white text-xs font-medium">{item.passed}</span>
                    </div>
                  </div>
                  <span className="ml-4 text-sm text-[#424242] font-medium">{item.total}</span>
                </div>
              </div>
            ))}
          </div> */}

        </div>

        <p className="mb-8 font-medium">
          Telusuri 300+ perusahaan yang lolos standar minimum integritas INSTAR.
        </p>

        <Button variant={'outline'}>Lihat Peringkat INSTAR 2025</Button>
      </div>
    </div>
  )
}
