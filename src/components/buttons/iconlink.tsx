import React, { ReactNode, useEffect, useRef, useState } from "react"
import Row from "../row"
import { gsap } from "gsap"
import ColorLink from "./colorlink"
import BlueLink from "./bluelink"
import HideSmall from "../hidesmall"

type IconLinkBodyProps = {
  to: string
  icon: any
  color?: string
  hoverColor?: string
  className?: string
  children?: ReactNode
}

const IconLinkBody = ({ to, icon, children }: IconLinkBodyProps) => {
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

        <div>
          <BlueLink to={to}>{children}</BlueLink>
        </div>
      </Row>
    </>
  )
}

interface LinkProps {
  to: string
  icon: any
  color?: string
  hoverColor?: string
  children?: ReactNode
}

const IconLink = ({
  to,
  icon,
  color = "text-slate-400",
  hoverColor = "text-blue-900",
  children,
}: LinkProps) => (
  <IconLinkBody to={to} icon={icon} color={color} hoverColor={hoverColor}>
    {children}
  </IconLinkBody>
)

export default IconLink
