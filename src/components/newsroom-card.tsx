import Image from "next/image";
import { Card, CardContent } from "./ui/card";

type NewsroomCardProps = {
  title: string;
  description: string;
  image: string
}

export default function NewsroomCard({ title, description, image }: NewsroomCardProps) {
  return (
    <Card className="flex-1 bg-[#ffffff] border-[#e0e0e0]">
      <CardContent className="p-0">
        <Image
          src={image}
          width={250}
          height={160}
          alt={title}
          className="w-full h-auto mx-auto"
        />
        <div className="p-3">
          <p className="text-sm text-[#616161] leading-relaxed">
            {description}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}