import React, { useState, useRef } from "react"

type ZoomImageProps = {
  src: string
  extZoom?: any
  alt?: string
  className?: string
}

export const ZoomImage2: React.FC<ZoomImageProps> = ({
  src,
  extZoom,
  alt,
  className,
}) => {
  const [hover, setHover] = useState(false)

  const photoEl = useRef(null)

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
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      ref={photoEl}
    >
      <img
        src={src}
        className={`trans-ani w-full h-full ${className}`}
        alt={alt}
      />
    </div>
  )
}

ZoomImage2.defaultProps = {
  className: "",
  extZoom: null,
  alt: "",
}

export default ZoomImage2
