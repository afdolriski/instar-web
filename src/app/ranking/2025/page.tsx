import { Separator } from "@/components/ui/separator"
import Hero from "@/components/ranking/2025/hero"
import CompanyTable from "@/components/ranking/table"
import Methodology from "@/components/ranking/2025/methodology"
import VerificationBanner from "@/components/ranking/2025/verification-banner"
import { DataTable } from "@/components/ranking/2025/data-table"
import { pageWrapper, sectionWrapper } from "@/lib/utils"
import { rank2025Items } from "@/data/rank-2025"
import { columns } from "@/components/ranking/2025/columns"
import ExpertList from "@/components/experts"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4 pb-16">
      <div className="space-y-4 md:space-y-8">
        <Hero />
        <div className={sectionWrapper()}>
          <div className="mx-auto leading-tight">
            <div className="space-y-4 mx-auto leading-tight">
              <h2 className="text-2xl font-bold">
                Hasil Verifikasi Independen oleh Indonesia Strategy Institute (ISI)
              </h2>
              <p className="leading-relaxed">
                Dari total 956 perusahaan yang dianalisis oleh Transparency International Indonesia (TII), hanya 421 yang lolos standar minimum integritas dan keberlanjutan.
              </p>
            </div>
          </div>
        </div>
        <div className={sectionWrapper()}>
          <DataTable columns={columns} data={rank2025Items} />
        </div>
        <div className={sectionWrapper()}>
          <VerificationBanner />
        </div>
        <div className={sectionWrapper()}>
          <Methodology />
        </div>
        <div className={sectionWrapper()}>
          <ExpertList />
        </div>
      </div>
    </div>
  )
}
