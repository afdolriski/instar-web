import Image from "next/image"
import { Button } from "@/components/ui/button"
import ImageZoomClient from "../image-zoom-client";
import Link from "next/link";

export default function Section1() {
  return (
    <div className="py-8 px-4 md:px-32 md:py-16">
      <div className="mx-auto space-y-8 md:space-y-12">
        <div className="space-y-4 md:w-[75%]">
          <h2 className="">
            Wujudkan Bisnis yang Terpercaya dengan INSTAR
          </h2>

          <div className="space-y-4">
            <p>
              Indeks Integritas Bisnis Lestari (INSTAR) adalah inisiatif bersama antara TEMPO Data Science dan
              Transparency International Indonesia (TII) yang bertujuan mendorong praktik bisnis yang transparan,
              bertanggung jawab, dan berkelanjutan di Indonesia. Melalui pendekatan berbasis data dan evaluasi terbuka,
              INSTAR adalah langkah nyata menuju ekosistem bisnis yang lebih sehat dan dipercaya publik.
            </p>

            <p>
              Dari 956 perusahaan yang dinilai, terdapat 300 yang memenuhi standar minimum integritas dan keberlanjutan.
            </p>
          </div>

        </div>

        <div className="border rounded-lg p-6 relative">
          <h2 className="font-semibold mb-6">
            421 Perusahaan Yang Lolos Desk Research INSTAR 2025
          </h2>

          <ImageZoomClient>
            <Image
              src="/images/chart.png"
              alt="Tempo"
              width={1100}
              height={480}
              className="w-full h-auto"
              unoptimized
            />
          </ImageZoomClient>
        </div>

        <div className="space-y-4">
          <p className="font-medium">
            Telusuri 479 perusahaan yang lolos standar minimum integritas INSTAR.
          </p>

          <Button asChild variant={'outline'}>
            <Link href="/ranking/2025">
              Lihat Peringkat INSTAR 2025
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
