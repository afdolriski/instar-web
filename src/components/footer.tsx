import Image from "next/image"
import Link from "next/link"
import { MapPin, Mail } from "lucide-react"
import { WhatsappIcon } from "@/icons/whatsapp"
import { WA_NUMBER } from "@/config/app"

const links = [
  {
    label: 'Peringkat INSTAR',
    href: '/ranking/2025'
  },
  {
    label: 'Event',
    href: '/events/2025'
  },
  {
    label: 'Solusi',
    href: '/solution'
  },
  {
    label: 'Tentang',
    href: '/about'
  },
  {
    label: 'FAQ',
    href: '/faq'
  },
]

export default function Footer() {
  return (
    <footer className="bg-[#fefefe] p-4 border-t md:px-32">
      <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2 md:auto-rows-2 items-start">
        <div className="space-y-4 md:col-start-2">
          <nav className="space-y-4 md:flex md:gap-5 md:justify-end">
            {links.map(item => (
              <Link href={item.href} className="block text-sm transition-colors" key={item.label}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4 md:col-start-1 md:row-start-1">
          <Image
            src="/images/instar.png"
            alt="Instar"
            width={190}
            height={48}
            className="w-[190px] h-auto rounded-lg"
            priority
          />
        </div>

        <div className="grid md:grid-cols-[max-content_1fr] md:col-span-2 gap-4">
          <div className="flex items-center space-x-4">
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
          <div className="flex items-center space-x-4">
            <Image
              src="/images/tii.png"
              alt="TII"
              width={100}
              height={40}
              className="w-[100px] h-auto"
              priority
            />
            <Image
              src="/images/isi.png"
              alt="Instar"
              width={100}
              height={40}
              className="w-[100px] h-auto"
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:justify-between border-t-1 border-neutral-700 pt-4">
        <div className="flex items-start justify-center space-x-3 mb-4 md:mb-0">
          <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
          <p className="text-sm">Gedung Tempo, Jl. Palmerah Barat No. 8, Jakarta Selatan 12210</p>
        </div>

        <div className="flex flex-row text-sm justify-between md:space-x-4">
          <a className="flex items-center space-x-3" href={`https://wa.me/${WA_NUMBER}`} target="_blank">
            <WhatsappIcon className="w-5 h-5 " />
            <span className="text-sm">0851-5661-9434</span>
          </a>

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
    </footer>
  )
}
