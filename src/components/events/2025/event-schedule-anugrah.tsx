const scheduleItems = [
  {
    time: "18.00 - 19.00",
    title: "Open Registration",
    highlighted: false,
  },
  {
    time: "19.00 - 20.00",
    title: "Gala Dinner",
    highlighted: false,
  },
  {
    time: "20.00 - 20.10",
    title: "Opening",
    highlighted: false,
  },
  {
    time: "20.10 - 20.30",
    title: "Opening Speech + Keynote Speaker",
    highlighted: true,
  },
  {
    time: "20.30 - 21.30",
    title: "Pemberian Penghargaan (Malam Puncak)",
    highlighted: true,
  },
  {
    time: "21.30 - 22.00",
    title: "Entertainment",
    highlighted: false,
  },
  {
    time: "22.00 - 22.15",
    title: "Closing",
    highlighted: false,
  },
]


export default function EventScheduleAnugrah() {
  return (
    <div className="mx-auto">
      <h1 className="text-xl mb-8">Rundown Acara - Malam Anugrah</h1>

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
