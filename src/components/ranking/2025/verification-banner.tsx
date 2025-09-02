import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function VerificationBanner() {
  return (
    <div>
      <div className="bg-tertiary-100 space-y-8 lg:space-y-0 flex lg:flex-row-reverse flex-col w-full lg:justify-between">
        <Image
          src="/images/illustration-3.png"
          alt="Illustration"
          width={400}
          height={320}
          className="w-[400px] h-auto object-cover m-auto lg:scale-110"
        />
        <div className="flex flex-col items-start justify-between p-8">
          <h1 className="text-tertiary-900 text-2xl font-bold mb-6 leading-tight">
            Verifikasi oleh Indonesia Strategy Institute (ISI)
          </h1>

          <div className="text-tertiary-800 text-lg leading-relaxed mb-8 space-y-4">
            <p>
              Hasil penilaian diatas adalah penilaian desk research oleh TII.
              <br />
              Dapatkan verifikasi penilaian lebih lanjut dan
              <br />
              tingkatkan kredibilitas perusahaan Anda.
            </p>

            <p className="font-medium">
              <strong>
                Daftarkan perusahaan Anda sekarang untuk proses
                <br />
                verifikasi mendalam kami!
              </strong>
            </p>
          </div>

          <Button asChild size="lg">
            <Link href="/solution">
              Verifikasi Sekarang
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
