import { Button } from "@/components/ui/button"
import { WA_NUMBER } from "@/config/app";
import { WhatsappIcon } from "@/icons/whatsapp"
import Image from "next/image"

const MESSAGE = encodeURI("Halo Tim INSTAR, saya tertarik untuk mengetahui lebih lanjut mengenai peluang kolaborasi atau sponsorship pada acara INSTAR. Mohon informasinya lebih lanjut. Terima kasih.");
const link = `https://wa.me/${WA_NUMBER}/?text=${MESSAGE}`

export default function Collab() {
  return (
    <div className="bg-tertiary-200 px-8 py-4 md:flex md:flex-col-reverse">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">Kesempatan Kolaborasi</h2>
          <p className="text-normal md:text-lg leading-relaxed">
            Dukung penguatan integritas dalam dunia bisnis. Melalui sponsorship, perusahaan Anda dapat menunjukkan
            komitmen pada praktik yang transparan dan berkelanjutan di hadapan para pemimpin lintas sektor.
          </p>
          <Button asChild className="bg-[#29a71a] hover:bg-[#86cb99] text-white px-6 py-3">
            <a className="flex items-center space-x-3" href={link} target="_blank">
              <WhatsappIcon className="w-5 h-5 " />
              <span className="text-sm">Hubungi Kami</span>
            </a>
          </Button>
        </div>

        <Image
          src="/images/Banner-Section.png"
          alt="Business Presentation 1"
          width={700}
          height={500}
          className="w-full h-auto col-start-1 row-start-1 md:col-start-2"
        />
      </div>
    </div>
  )
}
