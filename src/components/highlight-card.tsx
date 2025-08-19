import Image from "next/image";

type HighlightCardProps = {
  title: string;
  description: string;
  icon: string
}

export default function HighlightCard({ title, description, icon }: HighlightCardProps) {
  return (
    <div className="bg-[#eef6f4] flex items-center justify-center p-6 mb-4">
      <div>
        <div className="flex items-start gap-6">
          <div className="flex-shrink-0">
            <Image
              src={icon}
              width={44}
              height={44}
              alt={title}
            />
          </div>

          <div className="flex-1">
            <h1 className="text-[#212121] font-bold mb-2 leading-tight">{title}</h1>
            <p className="text-[#2f5951] text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}