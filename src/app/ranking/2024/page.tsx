import Hero from "@/components/ranking/2024/hero"
import Methodology from "@/components/ranking/2024/methodology"
import { DataTable } from "@/components/ranking/2024/data-table"
import { columns } from "@/components/ranking/2024/columns"
import { rank2024Items } from "@/data/rank-2024"
import { sectionWrapper } from "@/lib/utils"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <Hero />
      <div className="px-4 md:px-32 pt-8">
        <h2 className="text-2xl font-bold">Hasil Peringkat INSTAR 2024</h2>
      </div>
      <DataTable columns={columns} data={rank2024Items} />
      <div className={sectionWrapper()}>
        <Methodology />
      </div>
    </div>
  )
}
