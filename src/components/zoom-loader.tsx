import { UncontrolledProps } from "react-medium-image-zoom"
import { Spinner } from "./ui/shadcn-io/spinner"

export const ZoomLoader: UncontrolledProps['ZoomContent'] = ({
  img,
  isZoomImgLoaded,
}) => {

  return (
    <>
      {img}
      {!isZoomImgLoaded && (
        <div className="h-full w-full">
          <Spinner className="text-neutral-900 h-full m-auto" size={32} />
        </div>
      )}
    </>
  )
}