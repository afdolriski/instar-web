'use client'

import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import { ZoomLoader } from "@/components/zoom-loader";
import { detailTemplateUrl, thumbnailTemplateUrl } from "@/lib/utils";

const thumbnail = 'YOU_9038.jpg';

export default function Thumbnail() {
  return (
    <ImageZoom zoomImg={{ src: detailTemplateUrl(thumbnail) }} ZoomContent={ZoomLoader}>
      <img src={thumbnailTemplateUrl(thumbnail)} alt="Malam anugrah" className="w-[400px] h-auto object-cover mx-auto" />
    </ImageZoom>
  )
}