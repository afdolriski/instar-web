import Icon1 from "@/icons/home/icon1"

export default function HighlightCard() {
  return (
    <div className="bg-[#eef6f4] flex items-center justify-center p-4 mb-4">
      <div>
        <div className="flex items-start gap-6">
          {/* Icon */}
          <div className="flex-shrink-0">
            <Icon1 />
          </div>

          {/* Content */}
          <div className="flex-1">
            <h1 className="text-[#212121] font-bold mb-4 leading-tight">Bisnis Berintegritas</h1>
            <p className="text-[#2f5951] text-sm">
              Berdasarkan Transparency in Corporate Reporting (TRAC) dari Transparency International.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}