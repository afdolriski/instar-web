import Hero from "@/components/ranking/2024/hero"
import CompanyTable from "@/components/ranking/table"
import Methodology from "@/components/ranking/2024/methodology"

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-4">
      <Hero />
      <div className="p-4 md:px-32">
        <h2 className="text-xl mb-4 font-bold">Hasil Peringkat INSTAR 2024</h2>
        <CompanyTable />
        <Methodology />
      </div>
    </div>
  )
}
