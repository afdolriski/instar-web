const scheduleItems = [
  {
    time: "08.30 - 09.00",
    title: "Open Registration",
    highlighted: false,
  },
  {
    time: "09.00 - 09.10",
    title: "Opening",
    highlighted: false,
  },
  {
    time: "09.10 - 09.40",
    title: "Opening Speech + Keynote Speaker",
    highlighted: true,
  },
  {
    time: "09.40 - 10.40",
    title: "Forum Sesi 1 - Mengintegrasikan Keberlanjutan dalam Strategi Bisnis",
    highlighted: true,
  },
  {
    time: "10.40 - 11.40",
    title: "Forum Sesi 2 - Bisnis Berkelanjutan untuk Keadilan Sosial",
    highlighted: true,
  },
  {
    time: "11.40 - 13.00",
    title: "Break",
    highlighted: false,
  },
  {
    time: "13.00 - 14.00",
    title: "Forum Sesi 3 - Menciptakan Ekosistem Bisnis Tanpa Pelanggaran HAM",
    highlighted: true,
  },
  {
    time: "14.00 - 16.00",
    title: "Entertainment - Music Performance",
    highlighted: false,
  },
]

export default function EventScheduleForum() {

  return (
    <div className="mx-auto">
      <h1 className="text-xl mb-8">Rundown Acara - Forum</h1>

      <div className="space-y-4">
        {scheduleItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col p-2 md:p-4 space-y-2 md:space-y-0 md:flex-row md:items-center ${
              item.highlighted ? "bg-tertiary-800 text-white" : "bg-neutral-400 text-neutral-950"
            }`}
          >
            <div className="w-32 flex-shrink-0 text-sm font-secondary">{item.time}</div>
            <div className="flex-1 text-sm font-semibold">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
