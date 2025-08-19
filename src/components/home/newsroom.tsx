import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import NewsroomCard from "../newsroom-card"

export default function Newsroom() {
  return (
    <div className="bg-[#fcfcfc] p-4 md:px-32 md:py-16">
      <div className="mx-auto">
        <div className="flex items-center justify-between p-4 bg-[#ffffff]">
          <h1 className="text-xl font-semibold text-[#212121]">Newsroom</h1>
          <div className="flex items-center gap-2">
            <button className="p-1">
              <ChevronLeft className="w-5 h-5 text-[#757575]" />
            </button>
            <button className="p-1">
              <ChevronRight className="w-5 h-5 text-[#757575]" />
            </button>
          </div>
        </div>

        {/* News Cards */}
        <div className="p-4 space-y-4">
          <div className="flex gap-4">
            <NewsroomCard
              title="News article"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              image="/images/tii.png"
            />
            <NewsroomCard
              title="News article"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              image="/images/tii.png"
            />
            <NewsroomCard
              title="News article"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              image="/images/tii.png"
            />
            <NewsroomCard
              title="News article"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
              image="/images/tii.png"
            />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-[#212121] mb-2">Frequently Asked Questions (FAQ)</h2>
          <p className="text-[#616161] mb-6">Indeks Integritas Bisnis Lestari (INSTAR)</p>

          <div className="space-y-4 md:w-[80%] mx-auto">
            {/* First FAQ Item - Expanded */}
            <Collapsible defaultOpen className="bg-[#ffffff] rounded-lg border border-[#e0e0e0]">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                <span className="font-semibold text-[#212121]">Apa itu INSTAR?</span>
                <ChevronDown className="w-5 h-5 text-[#757575]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4">
                <div className="text-[#616161] text-sm leading-relaxed space-y-4">
                  <p>
                    Indeks Integritas Bisnis Lestari (INSTAR) adalah sebuah alat pengukuran yang digunakan untuk menilai
                    sejauh mana perusahaan atau organisasi menerapkan praktik bisnis yang berintegritas dan
                    berkelanjutan. Indeks ini disusun oleh Transparency International Indonesia (TII) berkolaborasi
                    dengan TEMPO Data Science.
                  </p>

                  <p>
                    Indeks ini mengevaluasi tiga aspek dalam prinsip operasi bisnis yang berintegritas dan berkelanjutan
                    yakni:
                  </p>

                  <div className="space-y-1">
                    <p>1.) Aspek Bisnis Berintegritas</p>
                    <p>2.) Aspek Bisnis dan Hak Asasi Manusia, serta</p>
                    <p>3.) Aspek Lingkungan Hidup.</p>
                  </div>

                  <p>
                    Tiga aspek yang dinilai dalam indeks ini merupakan turunan dari tiga fokus utama dalam pendekatan
                    ESG (Environmental, Social, and Governance).
                  </p>
                </div>
              </CollapsibleContent>
            </Collapsible>

            {/* Other FAQ Items - Collapsed */}
            <Collapsible className="bg-[#ffffff] rounded-lg border border-[#e0e0e0]">
              <CollapsibleTrigger className="flex items-center justify-between w-full p-4 text-left">
                <span className="font-semibold text-[#212121]">Mengapa INSTAR penting?</span>
                <ChevronDown className="w-5 h-5 text-[#757575]" />
              </CollapsibleTrigger>
              <CollapsibleContent className="px-4 pb-4">
                <p className="text-[#616161] text-sm leading-relaxed">Content for this FAQ item would go here.</p>
              </CollapsibleContent>
            </Collapsible>

            <Button variant="outline" className="mt-6">
              Lihat Pertanyaan Lainnya
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
