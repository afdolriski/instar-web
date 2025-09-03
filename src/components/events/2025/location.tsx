import { MapEmbed } from "@/components/map-embed"

export default function Location() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Gedung Tempo, Jl. Palmerah Barat No. 8, Jakarta Selatan 12210</h2>
          <p className="text-normal leading-relaxed">
            Jl. Mahakam No.15, RT.1/RW.6, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
            <br />
            Daerah Khusus Ibukota Jakarta 12130
          </p>
        </div>

        <div className="relative col-start-1 row-start-1 md:col-start-2">
          <MapEmbed 
            title="Gedung Tempo, Jl. Palmerah Barat No. 8, Jakarta Selatan 12210"
            embedSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.417547413599!2d106.78736297549071!3d-6.208528310816298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1145bd035f9%3A0xc744bc8572b47d1c!2sPT%20Tempo%20Inti%20Media%20Tbk!5e0!3m2!1sen!2sid!4v1756826371248!5m2!1sen!2sid" 
            mapsUrl="https://maps.app.goo.gl/CucJTWqrNPUdCwMR9"
          />
        </div>
      </div>
    </div>
  )
}
