import { Button } from "@/components/ui/button"
import { NewsroomCarousel } from "../ui/news-carousel"
import { FaqList } from "../ui/faq-list"
import { faqItems } from "@/data/faq"
import Link from "next/link";

const articles = [
  {
    id: "1",
    link: "https://www.tempo.co/ekonomi/ihsg-ditutup-menguat-setelah-bi-turunkan-suku-bunga-acuan-2061124",
    title: "IHSG Ditutup Menguat Setelah BI Turunkan Suku Bunga Acuan",
    excerpt: "Consectetur adipiscing elit sed do eiusmod tempor.",
    imageSrc: "https://statik.tempo.co/data/2013/04/08/id_176342/176342_650.jpg",
    imageAlt: "Newspaper close up",
  },
  {
    id: "2",
    link: "https://www.tempo.co/ekonomi/3-blok-migas-diandalkan-untuk-genjot-produksi-minyak-2061116",
    title: "3 Blok Migas Diandalkan untuk Genjot Produksi Minyak",
    excerpt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    imageSrc: "https://statik.tempo.co/data/2023/06/28/id_1215499/1215499_720.jpg",
  },
  {
    id: "3",
    link: "https://www.tempo.co/ekonomi/menteri-perdagangan-akan-revisi-aturan-minyakita-2061113",
    title: "Menteri Perdagangan akan Revisi Aturan Minyakita",
    excerpt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    imageSrc: "https://statik.tempo.co/data/2025/03/09/id_1383167/1383167_720.jpg",
  },
  {
    id: "4",
    link: "https://www.tempo.co/ekonomi/fitra-minta-pemerintah-perluas-instrumen-baru-pendapatan-negara-2061110",
    title: "Fitra Minta Pemerintah Perluas Instrumen Baru Pendapatan Negara",
    excerpt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    imageSrc: "https://statik.tempo.co/data/2023/03/03/id_1185884/1185884_720.jpg",
  },
  {
    id: "5",
    link: "https://www.tempo.co/ekonomi/kenapa-penurunan-suku-bunga-kredit-perbankan-lamban--2061107",
    title: "Kenapa Penurunan Suku Bunga Kredit Perbankan Lamban?",
    excerpt: "Quis nostrud exercitation ullamco laboris nisi ut aliquip.",
    imageSrc: "https://statik.tempo.co/data/2025/07/28/id_1416581/1416581_720.jpg",
  },
];

const trimmedFaqs = [...faqItems.splice(0, 5)];

export default function Newsroom() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16 space-y-10">
      <NewsroomCarousel items={articles} />

      <div className="mx-auto">
        <div>
          <h2 className="text-2xl font-bold text-[#212121] mb-2">Frequently Asked Questions (FAQ)</h2>
          <p className="text-[#616161] mb-6">Indeks Integritas Bisnis Lestari (INSTAR)</p>

          <div className="space-y-4 md:w-[80%] mx-auto">
            <FaqList items={trimmedFaqs} />
            <Button asChild variant={"outline"}>
              <Link href="/faq">
                Lihat Pertanyaan Lainnya
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
