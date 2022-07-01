import React, { useState } from "react"
import usePersonImageURL from "../../hooks/personimageurl"
import { ZoomImage2 } from "../images/zoomimage2"
//import Img from "gatsby-image"

type HeadShotProps = {
  person: any
  imageMap: any
  size?: number
  rounded?: boolean
  className?: string
}

const HeadShot2: React.FC<HeadShotProps> = ({
  person,
  imageMap,
  size,
  rounded,
  className,
}) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(true)
  }

  const onMouseLeave = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setHover(false)
  }

  return (
    <div
      className={`${className} overflow-hidden bg-white ${
        rounded ? "rounded-full" : ""
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <ZoomImage2
        src={usePersonImageURL(person)}
        alt={person.frontmatter.name}
        extZoom={hover}
      />
    </div>
  )
}

HeadShot2.defaultProps = {
  size: 80,
  rounded: true,
  className: "w-80 h-80",
}

export default HeadShot2
