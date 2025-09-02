import { ArrowRight } from "lucide-react";

/**
 * This component displays the INSTAR 2025 timeline.
 * It's designed to be responsive, showing a horizontal layout on desktop
 * and a vertical layout on mobile screens.
 */
const TimelineInstar2025 = () => {
  // Data for the timeline events. This could also come from a CMS or API.
  const events = [
    {
      title: "Executive Briefing",
      description: "Pengenalan awal INSTAR kepada perusahaan hasil seleksi awal",
      date: "10 September 2025",
      link: { href: "#", text: "Lihat Executing Briefing" },
    },
    {
      title: "Verifikasi",
      description: "Perusahaan dapat menyanggah penilaian awal dan hasilnya akan menentukan skor akhir",
      date: "1 September - 24 Oktober 2025",
      link: null,
    },
    {
      title: "Forum & Malam Anugerah",
      description: "Puncak acara INSTAR dengan mengundang perusahaan yang dinilai dan pengumuman skor akhir",
      date: "14 November 2025",
      link: { href: "#", text: "Lihat Forum & Malam Anugerah" },
    },
  ];

  return (
    <div className="relative block h-full">
      {/* The main horizontal timeline */}
      <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/40 transform -translate-y-1/2"></div>
      
      {/* Event 1: Executive Briefing (Top Left) */}
      <div className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-full -mt-5 w-64">
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">{events[0].title}</h3>
          <p className="text-sm text-gray-300 mb-2">{events[0].description}</p>
          <p className="font-semibold text-sm mb-4">{events[0].date}</p>
          {events[0].link && (
            <a href={events[0].link.href} className="inline-flex items-center text-sm font-medium hover:underline transition-colors">
              {events[0].link.text} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
        {/* Connector line and dot */}
        <div className="absolute top-full left-0 w-0.5 h-5 bg-white/40"></div>
        <div className="absolute top-full mt-5 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-1/2"></div>
      </div>

      {/* Event 2: Verifikasi (Bottom Center) */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 mt-5 w-64">
        {/* Connector line and dot */}
        <div className="absolute bottom-full left-1/2 w-0.5 h-5 bg-white/40 transform -translate-x-1/2"></div>
        <div className="absolute bottom-full mb-5 left-1/2 w-4 h-4 bg-white rounded-full transform -translate-x-1/2"></div>
        <div className="text-left pt-2">
          <h3 className="text-xl font-bold mb-2">{events[1].title}</h3>
          <p className="text-sm text-gray-300 mb-2">{events[1].description}</p>
          <p className="font-semibold text-sm">{events[1].date}</p>
        </div>
      </div>

      {/* Event 3: Forum & Malam Anugerah (Top Right) */}
      <div className="absolute top-1/2 left-[85%] transform -translate-x-1/2 -translate-y-full -mt-5 w-64">
        <div className="text-left">
          <h3 className="text-xl font-bold mb-2">{events[2].title}</h3>
          <p className="text-sm text-gray-300 mb-2">{events[2].description}</p>
          <p className="font-semibold text-sm mb-4">{events[2].date}</p>
          {events[2].link && (
            <a href={events[2].link.href} className="inline-flex items-center text-sm font-medium hover:underline transition-colors">
              {events[2].link.text} <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          )}
        </div>
        {/* Connector line and dot */}
        <div className="absolute top-full left-0 w-0.5 h-5 bg-white/40"></div>
        <div className="absolute top-full mt-5 left-0 w-4 h-4 bg-white rounded-full transform -translate-x-1/2"></div>
      </div>
    </div>
  );
};

export default TimelineInstar2025;