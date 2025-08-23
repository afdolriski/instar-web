'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ImageZoom } from "./ui/shadcn-io/image-zoom";
import { detailTemplateUrl, thumbnailTemplateUrl } from "@/lib/utils";
import { galeryImages } from "@/data/galery";
import { ZoomLoader } from "./zoom-loader";

export default function Gallery() {
  const [limit, setLimit] = useState(9);

  const increment = 9;
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {galeryImages.slice(0, limit).map((image) => (
          <div key={image} className="shadow-sm">
            <ImageZoom zoomImg={{ src: detailTemplateUrl(image) }} ZoomContent={ZoomLoader}>
              <img src={thumbnailTemplateUrl(image)} alt="Malam anugrah" className="w-full h-auto max-h-[250px] object-cover" />
            </ImageZoom>
          </div>
        ))}
      </div>

      {limit <= galeryImages.length && (
        <div className="flex justify-center w-full">
          <Button className="w-full max-w-xl mx-auto cursor-pointer" onClick={() => setLimit(limit + increment)}>
            Load more
          </Button>
        </div>
      )}
    </div>
  )
}
