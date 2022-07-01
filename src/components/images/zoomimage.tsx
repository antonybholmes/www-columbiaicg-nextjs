import React, { useState, useRef } from "react"
import BaseImage from "./baseimage"

type ZoomImageProps = {
  image: any
  extZoom?: any
  zoom?: number
  alt: string
  className?: string
}

export const ZoomImage: React.FC<ZoomImageProps> = ({
  image,
  extZoom,
  zoom,
  alt,
  className,
}) => {
  const [hover, setHover] = useState(false)

  const photoEl = useRef(null)

  // useEffect(() => {
  //   if (!extZoom) {
  //     gsap.timeline().to(photoEl.current, 0.5, { scale: hover ? 1.15: 1, ease:"power3.inOut"}, 0)
  //   }
  // }, [hover])

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       photoEl.current,
  //       0.5,
  //       { scale: extZoom ? zoom : 1,  },
  //       0
  //     )
  // }, [extZoom])

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(true)
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(false)
  }

  return (
    <div
      className={`overflow-hidden trans-ani transform w-full h-full ${
        extZoom ? "scale-105" : "scale-100"
      } ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={photoEl}
    >
      <BaseImage
        image={image}
        className={`block overflow-hidden trans-ani`}
        alt={alt}
      />
    </div>
  )
}

ZoomImage.defaultProps = {
  className: "",
  extZoom: null,
  zoom: 1.05,
}

export default ZoomImage
