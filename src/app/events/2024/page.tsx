import Hero from "@/components/events/2024/hero"
import Gallery from "@/components/gallery"
import { Calendar, MapPin } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import Thumbnail from "@/components/events/2024/thumbnail"

const wrapper = () => 'px-4 py-8 md:px-32 md:py-10 space-y-8';
const thumbnail = 'YOU_9038.jpg';

export default function Page() {
  return (
    <div className="flex flex-1 flex-col gap-8">
      <Hero />
      <div className={wrapper()}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold leading-tight">Malam Anugerah</h2>

            <p className="text-medium leading-relaxed max-w-3xl">
              Puncak acara INSTAR dengan mengundang perusahaan yang dinilai dan pengumuman skor akhir.
            </p>

            <div className="space-y-3 pt-4">
              <div className="flex items-start gap-3">
                <Calendar className="w-5 h-5" />
                <span className="text-base font-bold">10 Desember 2024</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5" />
                <span className="text-base font-bold">Salihara Arts Center, Jakarta Selatan</span>
              </div>
            </div>
          </div>

          <div className="col-start-1 row-start-1 md:col-start-2">
            <Thumbnail />
          </div>
        </div>
      </div>

      <Separator />

      <div className={wrapper()}>
        <Gallery />
      </div>
    </div>
  )
}
