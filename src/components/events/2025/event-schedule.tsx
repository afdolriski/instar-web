export default function EventSchedule() {
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
      time: "09.40 - 09.55",
      title: "INSTAR Introduction (Methodology, Expertise)",
      highlighted: true,
    },
    {
      time: "09.55 - 10.10",
      title: "Product Knowledge INSTAR",
      highlighted: true,
    },
    {
      time: "10.10 - 11.10",
      title: "Diskusi - Membangun Bisnis Berintegritas Menuju Keberlanjutan Ekonomi dan Lingkungan",
      highlighted: true,
    },
    {
      time: "11.10 - 11.40",
      title: "Discussion and QnA Session",
      highlighted: true,
    },
    {
      time: "11.40 - 11.50",
      title: "Summary Point",
      highlighted: true,
    },
    {
      time: "11.50 - 12.30",
      title: "Closing + Entertainment",
      highlighted: false,
    },
  ]

  return (
    <div className="mx-auto">
      <h1 className="text-xl mb-8">Rundown Acara</h1>

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
