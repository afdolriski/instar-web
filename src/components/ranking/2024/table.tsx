import { Search, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn, sectionWrapper } from "@/lib/utils"

const companies = [
  { kode: "BBCA", perusahaan: "Alphatech", sektor: "Teknologi", subSektor: "Teknologi" },
  { kode: "BBCA", perusahaan: "AeroEnergy Corp", sektor: "Energi Terbarukan", subSektor: "Energi Terbarukan" },
  { kode: "BBCA", perusahaan: "AssetPlus Finance", sektor: "Keuangan Digital", subSektor: "Keuangan Digital" },
  { kode: "BBCA", perusahaan: "Adept Industries", sektor: "Manufaktur", subSektor: "Manufaktur" },
  { kode: "BBCA", perusahaan: "AquaWave Enterprises", sektor: "Pertanian", subSektor: "Pertanian" },
  { kode: "BBCA", perusahaan: "AeroSpace Solutions", sektor: "Kesehatan", subSektor: "Kesehatan" },
  { kode: "BBCA", perusahaan: "BioBridge Solutions", sektor: "Transportasi", subSektor: "Transportasi" },
  { kode: "BBCA", perusahaan: "BrightHome Technologies", sektor: "Pendidikan", subSektor: "Pendidikan" },
  { kode: "BBCA", perusahaan: "BioTech Ventures", sektor: "Pariwisata", subSektor: "Pariwisata" },
  { kode: "BBCA", perusahaan: "BankTech Innovations", sektor: "Perdagangan", subSektor: "Perdagangan" },
  { kode: "BBCA", perusahaan: "Alphatech", sektor: "Teknologi", subSektor: "Teknologi" },
  { kode: "BBCA", perusahaan: "AeroEnergy Corp", sektor: "Energi Terbarukan", subSektor: "Energi Terbarukan" },
  { kode: "BBCA", perusahaan: "AssetPlus Finance", sektor: "Keuangan Digital", subSektor: "Keuangan Digital" },
  { kode: "BBCA", perusahaan: "Adept Industries", sektor: "Manufaktur", subSektor: "Manufaktur" },
  { kode: "BBCA", perusahaan: "AquaWave Enterprises", sektor: "Pertanian", subSektor: "Pertanian" },
  { kode: "BBCA", perusahaan: "AeroSpace Solutions", sektor: "Kesehatan", subSektor: "Kesehatan" },
  { kode: "BBCA", perusahaan: "BioBridge Solutions", sektor: "Transportasi", subSektor: "Transportasi" },
  { kode: "BBCA", perusahaan: "BrightHome Technologies", sektor: "Pendidikan", subSektor: "Pendidikan" },
  { kode: "BBCA", perusahaan: "BioTech Ventures", sektor: "Pariwisata", subSektor: "Pariwisata" },
  { kode: "BBCA", perusahaan: "BankTech Innovations", sektor: "Perdagangan", subSektor: "Perdagangan" },
]

type Companies = {
  name: string,
  sector: string,
  all: number,
  anti_coruption: number,
  environment: number,
  social: number
}

export default function CompanyTable() {
  return (
    <div className={cn(sectionWrapper(), "md:pt-8")}>
      <div className="mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#757575] w-4 h-4" />
            <Input placeholder="Pencarian" className="pl-10 border-[#e0e0e0] text-[#424242]" />
          </div>

          <div className="flex items-center gap-2">
            <Button variant="outline" className="border-[#e0e0e0] text-[#424242] bg-[#ffffff]">
              Sektor
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>

            <Button variant="outline" className="border-[#e0e0e0] text-[#424242] bg-[#ffffff]">
              Sub Sektor
              <ChevronDown className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-[#ffffff] border border-[#e0e0e0] overflow-x-scroll">
          <table className="w-full">
            <thead>
              <tr className="bg-[#2f5951]">
                <th className="text-left py-4 px-6 text-[#ffffff]">Kode</th>
                <th className="text-left py-4 px-6 text-[#ffffff]">Perusahaan</th>
                <th className="text-left py-4 px-6 text-[#ffffff]">Sektor</th>
                <th className="text-left py-4 px-6 text-[#ffffff]">Sub Sektor</th>
              </tr>
            </thead>
            <tbody>
              {companies.map((company, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-[#ffffff]" : "bg-[#eef6f4]"}>
                  <td className="py-4 px-6 text-[#424242]">{company.kode}</td>
                  <td className="py-4 px-6 text-[#424242]">{company.perusahaan}</td>
                  <td className="py-4 px-6 text-[#424242]">{company.sektor}</td>
                  <td className="py-4 px-6 text-[#424242]">{company.subSektor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <Button variant="outline" size="sm" className="border-[#e0e0e0] text-[#424242] bg-transparent">
            <ChevronDown className="w-4 h-4 rotate-90" />
          </Button>

          {[1, 2, 3].map((page) => (
            <Button
              key={page}
              variant={page === 1 ? "default" : "outline"}
              size="sm"
              className={
                page === 1
                  ? "bg-[#2f5951] text-[#ffffff] hover:bg-[#2f5951]/90"
                  : "border-[#e0e0e0] text-[#424242] bg-[#ffffff]"
              }
            >
              {page}
            </Button>
          ))}

          <span className="text-[#757575] px-2">...</span>

          {/* {[8, 9, 10].map((page) => (
            <Button key={page} variant="outline" size="sm" className="border-[#e0e0e0] text-[#424242] bg-[#ffffff]">
              {page}
            </Button>
          ))} */}

          <Button variant="outline" size="sm" className="border-[#e0e0e0] text-[#424242] bg-transparent">
            <ChevronDown className="w-4 h-4 -rotate-90" />
          </Button>
        </div>
      </div>
    </div>
  )
}
