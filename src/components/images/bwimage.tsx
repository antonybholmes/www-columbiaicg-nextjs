import React, { useState } from "react"
import BaseImage from "./baseimage"

type ImageProps = {
  image: any
  extZoom?: any
  alt: string
  className?: string
  isCircle?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
}

export const BWImage: React.FC<ImageProps> = ({
  image,
  extZoom,
  alt,
  className,
  isCircle,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [hover, setHover] = useState(false)

  //const photoEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       photoEl.current,
  //       0,
  //       { opacity: extZoom ? 1 : 0.9, ease: "power3.inOut" },
  //       0
  //     )
  //     .to(
  //       photoEl.current,
  //       0.5,
  //       {
  //         filter: extZoom ? "grayscale(0)" : "grayscale(1)",
  //         ease: "power3.inOut",
  //       },
  //       0
  //     )
  // }, [extZoom])

  const handleMouseEnter = (e: any) => {
    setHover(true)

    if (onMouseEnter !== null) {
      onMouseEnter(e)
    }
  }

  const handleMouseLeave = (e: any) => {
    setHover(false)

    if (onMouseLeave !== null) {
      onMouseLeave(e)
    }
  }

  return (
    <BaseImage
      image={image}
      style={{
        filter: `grayscale(${extZoom || hover ? "0" : "1"})`,
        transition: "all 0.4s ease-in-out",
      }}
      className={className}
      alt={alt}
      isCircle={isCircle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

BWImage.defaultProps = {
  className: "",
  extZoom: null,
  isCircle: false,
  onMouseEnter: null,
  onMouseLeave: null,
}

export default BWImage
