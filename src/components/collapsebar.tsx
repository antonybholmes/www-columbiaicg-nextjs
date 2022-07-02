import React, { useState } from "react"
import ExpandArrow from "./buttons/expandarrow"

type CollapseBarProps = {
  title?: string
  isExpanded: boolean
  onClick: any
  isSmall?: boolean
  className?: string
}

const CollapseBar = ({
  title = "",
  isExpanded,
  onClick,
  isSmall = false,
  className,
}: CollapseBarProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      className={`flex flex-row items-center justify-between w-full ${className}`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {isSmall ? (
        <h4 className="text-default-color">{title}</h4>
      ) : (
        <h2 className="text-default-color">{title}</h2>
      )}

      {/* <FontAwesomeIcon
              icon={_height === "0" ? "plus" : "minus"}
              size="sm"
              className="text-slate-300"
            /> */}

      {/* <FontAwesomeIcon
            icon={_height === "0" ? "chevron-down" : "chevron-up"}
            size="sm"
            className="text-slate-300 cursor-pointer trans-ani hover:text-black"
            onClick={toggle}
          /> */}

      <ExpandArrow isExpanded={isExpanded} hover={hover} />
    </button>
  )
}

export default CollapseBar
