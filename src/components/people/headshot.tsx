import React, { useState } from "react"
import Circle from "../circle"
import BaseImage from "../images/baseimage"

type HeadShotProps = {
  person: any
  imageMap: any
  size?: number
  rounded?: boolean
  className?: string
}

const HeadShot: React.FC<HeadShotProps> = ({
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

  const fluid =
    person.frontmatter.personId in imageMap
      ? imageMap[person.frontmatter.personId]
      : imageMap["generic"]

  return (
    // <Circle
    //   className={`${rounded ? "border border-solid border-cuimc-gray" : ""}`}
    // >
    <BaseImage
      image={fluid}
      alt={person.frontmatter.name}
      className={className}
    />
    // </Circle>
  )
}

HeadShot.defaultProps = {
  size: 80,
  rounded: true,
  className: "w-80 h-80",
}

export default HeadShot
