import React, { Ref } from "react"

interface RowProps {
  w?: string
  size?: string
  isMobile?: boolean
  isCentered?: boolean
  isVCentered?: boolean
  wrap?: boolean
  onClick?: any
  className?: string
  style?: any
  onMouseEnter?: any
  onMouseLeave?: any
  id?: string
}

const Row = React.forwardRef<RowProps, any>(
  (
    {
      id,
      w,
      size,
      isCentered,
      isVCentered,
      wrap,
      onClick,
      className,
      style,
      onMouseEnter,
      onMouseLeave,
      children,
    },
    ref?: any
  ) => {
    const baseClass = `flex flex-row relative ${
      w !== "" ? `w-full ${size}:${w}` : ""
    } ${isCentered ? "justify-center" : ""} ${
      isVCentered ? "items-center" : ""
    } ${wrap ? "flex-wrap" : ""}`

    return (
      <div
        id={id}
        className={`${baseClass} ${className}`}
        style={style}
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={ref}
      >
        {children}
      </div>
    )
  }
)

Row.defaultProps = {
  id: "",
  w: "",
  size: "md",
  className: "",
  style: null,
  isMobile: false,
  isCentered: false,
  isVCentered: true,
  wrap: false,
  onMouseEnter: null,
  onMouseLeave: null,
}

export default Row
