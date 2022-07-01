import React from "react"

type ImageProps = {
  image: any
  alt: string
  className?: string
  style?: any
  imgStyle?: any
  isCircle?: boolean
  onMouseEnter?: any
  onMouseLeave?: any
}

export const BaseImage: React.FC<ImageProps> = ({
  image,
  alt,
  className,
  style,
  imgStyle,
  isCircle,
  onMouseEnter,
  onMouseLeave,
}) => {
  const handleMouseEnter = (e: any) => {
    if (onMouseEnter !== null) {
      onMouseEnter(e)
    }
  }

  const handleMouseLeave = (e: any) => {
    if (onMouseLeave !== null) {
      onMouseLeave(e)
    }
  }

  return (
    <div>image</div>
  )
}

BaseImage.defaultProps = {
  className: "",
  style: {},
  imgStyle: {},
  isCircle: false,
  onMouseEnter: null,
  onMouseLeave: null,
}

export default BaseImage
