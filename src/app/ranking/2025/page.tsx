import { Separator } from "@/components/ui/separator"
import Hero from "@/components/ranking/2025/hero"
import CompanyTable from "@/components/ranking/table"
import Methodology from "@/components/ranking/methodology"
import VerificationBanner from "@/components/ranking/2025/verification-banner"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className="bg-[#ffffff] p-4 md:px-32 md:py-10">
        <div className="mx-auto">
          <h1 className="text-3xl md:text-3xl font-bold text-[#212121] mb-8 leading-tight">
            Daftar 300 Perusahaan yang Lolos dari Desk Research oleh TII
          </h1>

          <div className="space-y-6">
            <p className="leading-relaxed">
              Dari total 956 perusahaan yang dianalisis oleh Transparency International Indonesia (TII), hanya 300 yang lolos standar minimum integritas dan keberlanjutan.
            </p>
          </div>
        </div>
      </div>
      <CompanyTable />
      <VerificationBanner />
      <Methodology />
    </div>
  )
}
