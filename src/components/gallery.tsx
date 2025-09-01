'use client'

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { detailTemplateUrl, thumbnailTemplateUrl } from "@/lib/utils";
import { galeryImages } from "@/data/galery";
import { ZoomLoader } from "./zoom-loader";
import { ControlledImageZoom } from "./ui/controlled-image-zoom";

export default function Gallery() {
  const [limit, setLimit] = useState(9);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIndex === null) {
        return
      }
      if (e.key === 'ArrowLeft') {
        setActiveIndex((prevIndex) => Math.max((prevIndex ?? 0) - 1, 0));
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prevIndex) => Math.min((prevIndex ?? 0) + 1, galeryImages.length - 1));
      }
    },
    [activeIndex]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [handleKeyDown])


  const bodyScrollEnable = () => {
    document.body.style.width = ''
    document.body.style.overflow = ''
  }


  const handleZoomChange = useCallback(
    async (isZoomed: boolean, index: number) => {
      if (isZoomed) {
        setActiveIndex(index);
      } else if (!isZoomed && index === activeIndex) {
        setActiveIndex(null);
        setTimeout(() => {
          bodyScrollEnable();
        }, 200);
      }
    },
    [activeIndex]
  );

  const increment = 9;
  return (
    <div className="mx-auto">
      <h1 className="text-3xl font-semibold mb-8">Gallery</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
        {galeryImages.slice(0, limit).map((image, i) => {
          return (
            <div key={image} className="shadow-sm">
              <ControlledImageZoom 
                zoomImg={{ src: detailTemplateUrl(image) }} 
                ZoomContent={ZoomLoader} 
                isZoomed={activeIndex === i} 
                onZoomChange={(isZoomed) => handleZoomChange(isZoomed, i)}
              >
                <img src={thumbnailTemplateUrl(image)} alt="Malam anugrah" className="w-full h-auto max-h-[250px] object-cover" />
              </ControlledImageZoom>
            </div>
          )
        })}
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
