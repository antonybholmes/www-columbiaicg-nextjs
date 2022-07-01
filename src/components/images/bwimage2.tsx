import React, { useState } from "react"

type BWImageProps = {
  src: string
  extZoom?: any
  alt?: string
  className?: string
}

export const BWImage2: React.FC<BWImageProps> = ({
  src,
  extZoom,
  alt,
  className,
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

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <div
      className={`ani-t transition-filter w-full h-full`}
      style={{ filter: `grayscale(${extZoom || hover ? "0" : "1"})` }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img
        src={src}
        className={`trans-ani w-full h-full ${className}`}
        alt={alt}
      />
    </div>
  )
}

BWImage2.defaultProps = {
  className: "",
  extZoom: null,
  alt: "",
}

export default BWImage2
