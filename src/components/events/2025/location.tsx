import { MapEmbed } from "@/components/map-embed"

export default function Location() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-bold mb-4">Aroem Restaurant & Ballroom</h2>
          <p className="text-normal leading-relaxed">
            Jl. Mahakam No.15, RT.1/RW.6, Kramat Pela, Kec. Kby. Baru, Kota Jakarta Selatan,
            <br />
            Daerah Khusus Ibukota Jakarta 12130
          </p>
        </div>

        <div className="relative col-start-1 row-start-1 md:col-start-2">
          <MapEmbed 
            title="Aroem Restaurant & Ballroom"
            embedSrc="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1983.071891951493!2d106.795718!3d-6.244775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1898798e1c5%3A0x723c96e71ecc7511!2sAroem%20Mahakam%20Resto%2C%20Cafe%20%26%20Ballroom!5e0!3m2!1sen!2sid!4v1755954594383!5m2!1sen!2sid" 
            mapsUrl="https://maps.app.goo.gl/U4PeWywcSYBUu2Sg6"
          />
        </div>
      </div>
    </div>
  )
}
