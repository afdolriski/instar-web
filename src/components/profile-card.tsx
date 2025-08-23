import Image from "next/image"

type ProfileCardProps = {
  title: string;
  name: string;
  image: string
}

export default function ProfileCard({ title, name, image}: ProfileCardProps) {
  return (
    <div className="bg-tertiary-50 flex flex-col">
      <Image
        src={image}
        alt={name}
        width={266}
        height={200}
        className="w-[266px] h-[200px] mx-auto object-contain"
      />

      <div className="p-6 space-y-2 bg-white h-full">
        <h1>{name}</h1>
        <p>{title}</p>
      </div>
    </div>
  )
}