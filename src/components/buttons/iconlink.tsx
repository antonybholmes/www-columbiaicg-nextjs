import React, { useEffect, useRef, useState } from "react"
import Row from "../row"
import { gsap } from "gsap"
import ColorLink from "./colorlink"
import BlueLink from "./bluelink"
import HideSmall from "../hidesmall"

type IconLinkBodyProps = {
  name?: string
  to?: string
  icon: any
  content: any
  color?: string
  hoverColor?: string
  className?: string
}

const IconLinkBody: React.FC<IconLinkBodyProps> = ({
  name,
  to,
  icon,
  content,
  color,
  hoverColor,
  className,
}) => {
  const [hover, setHover] = useState(false)

  let iconEl = useRef(null)

  // useEffect(() => {
  //   if (!extZoom) {
  //     gsap.timeline().to(photoEl.current, 0.5, { scale: hover ? 1.15: 1, ease:"power3.inOut"}, 0)
  //   }
  // }, [hover])

  useEffect(() => {
    gsap
      .timeline()
      .to(
        iconEl.current,
        { duration: 0.4, x: hover ? "-0.2rem" : 0, ease: "power3.out" },
        0
      )
  }, [hover])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <>
      {/* {name !== "" && <div className={`text-sm opacity-60`}>{name}</div>} */}

      <Row
        className={`mt-1 pb-2 trans-ani`}
        isVCentered={true}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="w-7 text-cuimc-button-blue" ref={iconEl}>
          {icon}
        </div>

        {to !== "" ? (
          <div>
            <BlueLink to={to}>{content}</BlueLink>
          </div>
        ) : (
          <div className="text-cuimc-button-blue">{content}</div>
        )}
      </Row>
    </>
  )
}

IconLinkBody.defaultProps = {
  className: "",
}

type IconLinkProps = {
  name?: string
  to?: string
  icon: any
  content: string
  color?: string
  hoverColor?: string
}

const IconLink: React.FC<IconLinkProps> = ({
  name,
  to,
  icon,
  content,
  color,
  hoverColor,
}) => (
  <IconLinkBody
    to={to}
    name={name}
    icon={icon}
    content={content}
    color={color}
    hoverColor={hoverColor}
  />
)

IconLink.defaultProps = {
  name: "",
  to: "",
  color: "text-gray-400",
  hoverColor: "text-blue-900",
}

export default IconLink
