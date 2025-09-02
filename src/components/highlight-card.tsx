import Image from "next/image";

type HighlightCardProps = {
  title: string;
  description: string;
  icon: string
}

export default function HighlightCard({ title, description, icon }: HighlightCardProps) {
  return (
    <div className="bg-tertiary-50 flex flex-1 flex-grow items-center justify-center p-6">
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
            <h1 className="font-bold mb-2 leading-tight">{title}</h1>
            <p className="text-sm">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}