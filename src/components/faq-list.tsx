"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer?: string
}

const faqData: FAQItem[] = [
  {
    id: "1",
    question: "Apa itu INSTAR?",
    answer: `Indeks Integritas Bisnis Lestari (INSTAR) adalah sebuah alat pengukuran yang digunakan untuk menilai sejauh mana perusahaan atau organisasi menerapkan praktik bisnis yang berintegritas dan berkelanjutan. Indeks ini disusun oleh Transparency International Indonesia (TII) berkolaborasi dengan TEMPO Data Science.

Indeks ini mengevaluasi tiga aspek dalam prinsip operasi bisnis yang berintegritas dan berkelanjutan yakni:
1.) Aspek Bisnis Berintegritas
2.) Aspek Bisnis dan Hak Asasi Manusia, serta
3.) Aspek Lingkungan Hidup.

Tiga aspek yang dinilai dalam indeks ini merupakan turunan dari tiga fokus utama dalam pendekatan ESG (Environmental, Social, and Governance).`,
  },
  {
    id: "2",
    question: "Mengapa INSTAR penting?",
  },
  {
    id: "3",
    question: "Kenapa Transparency International Indonesia dan TEMPO Data Science melakukan Penilaian INSTAR?",
  },
  {
    id: "4",
    question: "Apa yang membedakan INSTAR dengan Produk Pengukuran ESG yang lain?",
  },
  {
    id: "5",
    question: "Bagaimana Transparency International Indonesia (TII) dan TEMPO Data Science menyusun INSTAR?",
  },
  {
    id: "6",
    question: "Question 6",
  },
  {
    id: "7",
    question: "Question 7",
  },
  {
    id: "8",
    question: "Question 8",
  },
  {
    id: "9",
    question: "Question 9",
  },
  {
    id: "10",
    question: "Question 10",
  },
  {
    id: "11",
    question: "Question 11",
  },
]

export function FAQList() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(["1"]))

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="space-y-2">
      {faqData.map((item) => (
        <div key={item.id} className="bg-[#ffffff] border border-[#e0e0e0] rounded-lg overflow-hidden">
          <button
            onClick={() => toggleItem(item.id)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#fcfcfc] transition-colors"
          >
            <span className="text-[#212121] font-medium text-base">{item.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#424242] transition-transform duration-200 ${
                openItems.has(item.id) ? "rotate-180" : ""
              }`}
            />
          </button>

          {openItems.has(item.id) && item.answer && (
            <div className="px-6 pb-6">
              <div className="text-[#424242] text-sm leading-relaxed whitespace-pre-line">{item.answer}</div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
