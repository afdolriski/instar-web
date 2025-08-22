import ProfileCard from "./profile-card";

const profiles = [
  {
    name: 'Sonny Mumbunan',
    title: 'Climate Policy Lab, Faculty of Social Sciences (UIII)',
    image: '/images/Sonny-Mumbunan.png',
  },
  {
    name: 'Erry Riyana Hardjapamekas',
    title: 'Ketua Koalisi Anti Korupsi',
    image: '/images/Erry-Riyana.png',
  },
  {
    name: 'Natalia Soebagjo',
    title: 'International Council Member, Transparency International',
    image: '/images/Natalia-Soebagjo.png',
  },
  {
    name: 'Jeffrey S. Siregar',
    title: 'Executive Director, Komite Nasional Kebijakan Governansi',
    image: '/images/Jeffrey-Siregar.png',
  },
];

export default function ExpertList() {
  return (
    <div className="p-8 bg-tertiary-900 space-y-8 md:p-8">
      <div className="space-y-4">
        <h2 className="text-white">Profil Pakar INSTAR 2025</h2>
        <p className="text-white md:max-w-[60%]">
          Penilaian dilakukan oleh para pakar dan spesialis bersama para pakar dari bidang HAM dan lingkungan, Dengan
          pengalaman bertahun-tahun, mereka untuk memastikan hasil yang kredibel dan akurat saat.
        </p>
      </div>

      <div className="space-y-6 md:grid md:grid-cols-4 gap-4 md:space-y-0">
        {profiles.map((item, key) => (
          <ProfileCard key={key} {...item} />
        ))}
      </div>
    </div>
  )
}