import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function Newsroom() {
  return (
    <div className="min-h-screen bg-[#fcfcfc] text-[#212121] p-4">
      <div className="max-w-md mx-auto">
        {/* Header */}
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
            <Card className="flex-1 bg-[#ffffff] border-[#e0e0e0]">
              <CardContent className="p-0">
                <img
                  src="/placeholder-ntewk.png"
                  alt="News article"
                  className="w-full h-24 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <p className="text-sm text-[#616161] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="flex-1 bg-[#ffffff] border-[#e0e0e0]">
              <CardContent className="p-0">
                <img
                  src="/business-meeting.png"
                  alt="News article"
                  className="w-full h-24 object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <p className="text-sm text-[#616161] leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="p-4">
          <h2 className="text-2xl font-bold text-[#212121] mb-2">Frequently Asked Questions (FAQ)</h2>
          <p className="text-[#616161] mb-6">Indeks Integritas Bisnis Lestari (INSTAR)</p>

          <div className="space-y-4">
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

          </div>

          {/* See More Button */}
          <div className="mt-6">
            <Button variant="outline">
              Lihat Pertanyaan Lainnya
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
