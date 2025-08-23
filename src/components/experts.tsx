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
    <div className="p-8 relative bg-tertiary-900 isolate overflow-hidden space-y-8 md:p-8">
      <div className="absolute bottom-[-10rem] left-[-20rem] -z-10 h-[40rem] w-[25rem] md:w-[80rem] rotate-150 transform bg-tertiary-800"></div>
      <div className="absolute right-[-25rem] top-[-15rem] -z-10 h-[50rem] w-[25rem] md:w-[80rem] -rotate-150 transform bg-tertiary-800/30"></div>
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