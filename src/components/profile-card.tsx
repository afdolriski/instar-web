import Image from "next/image"

type ProfileCardProps = {
  title: string;
  name: string;
  image: string
}

export default function ProfileCard({ title, name, image}: ProfileCardProps) {
  return (
    <div className="bg-[#ffffff] flex flex-col gap-2">
      <Image
        src={image}
        alt={name}
        width={266}
        height={200}
        className="w-[266px] h-[200px] mx-auto"
      />

      <div className="py-4 px-4">
        <h1 className="text-xl font-bold leading-tight">{name}</h1>

        <p className="text-sm leading-relaxed">{title}</p>
      </div>
    </div>
  )
}