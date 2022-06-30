import React, { useState, useRef, ReactNode } from "react"
import ColorLink from "./colorlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import Row from "../row"


import {
  faChevronRight
} from "@fortawesome/free-solid-svg-icons"


type LinkProps = {
  to: string
  color: string
  onClick?: any
  className?: string
  children?: ReactNode
}

const IndexLink  = ({
  to,
  color,
  onClick,
  className,
  children,
}: LinkProps) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       iconEl.current,
  //       { marginLeft: hover ? "0.25rem" : "0", ease: "power3.out", duration: 0.4 },
  //       0
  //     )
  // }, [hover])

  const onMouseEnter = (e: any) => {
    setHover(true)

    gsap
      .timeline()
      .to(iconEl.current, { x: "0.2rem", duration: 0.4, ease: "power3.out" }, 0)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)

    gsap
      .timeline()
      .to(iconEl.current, { x: 0, duration: 0.4, ease: "power3.out" })
  }

  let chevronColor

  switch (color) {
    case "red":
      chevronColor = "text-red-500"
      break
    case "blue":
      chevronColor = "text-cuimc-button-blue"
      break
    case "white":
      chevronColor = "text-white-98"
      break
    default:
      chevronColor = "text"
      break
  }

  return (
    <Row onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <ColorLink color={color} to={to} className={className} onClick={onClick}>
        {children}
      </ColorLink>

      <div ref={iconEl} className="ml-2">
        <FontAwesomeIcon icon={faChevronRight} className={`${chevronColor}`} />
      </div>
    </Row>
  )
}

IndexLink.defaultProps = {
  className: "",
}

export default IndexLink
