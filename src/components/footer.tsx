import Image from "next/image"
import { MapPin, Phone, Mail } from "lucide-react"
import { Separator } from "./ui/separator"

export default function Footer() {
  return (
    <footer className="bg-[#fefefe] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Navigation */}
          <div className="space-y-6">
            <nav className="space-y-4">
              <a href="#" className="block text-[#212121] text-lg hover:text-[#194793] transition-colors">
                Peringkat INSTAR
              </a>
              <a href="#" className="block text-[#212121] text-lg hover:text-[#194793] transition-colors">
                Event
              </a>
              <a href="#" className="block text-[#212121] text-lg hover:text-[#194793] transition-colors">
                Solusi
              </a>
              <a href="#" className="block text-[#212121] text-lg hover:text-[#194793] transition-colors">
                Tentang
              </a>
              <a href="#" className="block text-[#212121] text-lg hover:text-[#194793] transition-colors">
                FAQ
              </a>
            </nav>
          </div>

          {/* Right Column - Logos */}
          <div className="space-y-8">
            {/* INSTAR Logo */}
            <div className="flex items-center space-x-4">
              <Image
                src="/images/instar.png"
                alt="Instar"
                width={190}
                height={48}
                className="w-[190px] h-auto rounded-lg"
                priority
              />
            </div>

            {/* TEMPO Logos */}
            <div className="flex items-center space-x-8">
              <Image
                src="/images/tempo.png"
                alt="Tempo"
                width={105}
                height={48}
                className="w-[105px] h-auto"
                priority
              />
              <Image
                src="/images/tempo-data.png"
                alt="Tempo"
                width={105}
                height={48}
                className="w-[105px] h-auto"
                priority
              />
            </div>

            {/* Partner Logos */}
            <div className="flex items-center space-x-8">
              <Image
                src="/images/tii.png"
                alt="TII"
                width={105}
                height={48}
                className="w-[105px] h-auto rounded-lg"
                priority
              />

              <Image
                src="/images/isi.png"
                alt="Instar"
                width={105}
                height={48}
                className="w-[105px] h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Contact Information */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p className="text-base">Gedung Tempo, Jl. Palmerah Barat No. 8, Jakarta Selatan 12210</p>
          </div>

          <div className="flex flex-row text-sm justify-between">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 " />
              <span className="text-sm">0851-5661-9434</span>
            </div>

            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 " />
              <a
                href="mailto:instar@tempo.co.id"
                className="text-sm"
              >
                instar@tempo.co.id
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
