import { useState } from "react"
import BaseImage from "./base-image"

type ImageProps = {
  src: string
  extZoom?: any
  alt: string
  className?: string
  isCircle?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
}

export const BWImage = ({
  src,
  extZoom,
  alt,
  className,
  onMouseEnter,
  onMouseLeave,
}: ImageProps) => {
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

    if (onMouseEnter) {
      onMouseEnter(e)
    }
  }

  const handleMouseLeave = (e: any) => {
    setHover(false)

    if (onMouseLeave) {
      onMouseLeave(e)
    }
  }

  return (
    <BaseImage
      src={src}
      style={{
        filter: `grayscale(${extZoom || hover ? "0" : "1"})`,
        transition: "all 0.4s ease-in-out",
      }}
      className={className}
      alt={alt}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    />
  )
}

export default BWImage
