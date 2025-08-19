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
    <div className="md:grid md:grid-cols-4 gap-4">
      {profiles.map((item, key) => (
        <ProfileCard key={key} {...item} />
      ))}
    </div>
  )
}