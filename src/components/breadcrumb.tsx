import React from "react"
//import WhiteLink from "./buttons/whitelink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import HideSmall from "./hidesmall"
import Row from "./row"
import ColorLink from "./buttons/colorlink"
import BaseLink from "./buttons/baselink"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import ICrumb from "../types/crumb"

type DividerProps = {
  color?: string
  opacity?: number
}

const Divider = ({ color, opacity }: DividerProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 12 20"
    preserveAspectRatio="xMinYMin"
    className="h-4 mx-3"
  >
    <g id="arrowGroup">
      <path
        id="arrow"
        d="M 1,1 L 10,10 L 1,19"
        style={{
          fill: "none",
          stroke: color,
          strokeWidth: 1,
          strokeLinecap: "round",
          strokeLinejoin: "miter",
          strokeOpacity: opacity,
        }}
      />
    </g>
  </svg>
)

Divider.defaultProps = {
  color: "white",
  opacity: 1,
}

interface BreadcrumbProps {
  crumbs?: ICrumb[]
  color?: string
  color2?: string
  opacity?: number
  content?: any
  fontSize?: string
  className?: string
}

const Breadcrumb = ({
  crumbs = [],
  color = "white",
  color2 = "white",
  content,
  fontSize = "text-sm",
  className,
}: BreadcrumbProps) => {
  if (crumbs !== null && crumbs.length > 0) {
    const ret = []

    let cls = "trans-ani"

    switch (color) {
      case "blue":
        cls = `${cls} text-cuimc-button-blue`
        break
      case "blue2":
        cls = `${cls} text-cuimc-button-blue-60 hover:text-cuimc-button-blue`
        break
      case "blue3":
        cls = `${cls} text-cuimc-blue hover:text-cuimc-button-blue`
        break
      case "gray":
        cls = `${cls} text-slate-400 hover:text-cuimc-button-blue`
        break
      case "white":
        cls = `${cls} text-white-70 hover:text-white`
        break
      default:
        cls = `${cls} text-default-color-70 hover:text-default-color`
        break
    }

    ret.push(
      <li key={`crumb-0`}>
        <BaseLink to="/">
          <FontAwesomeIcon icon={faHome} className={cls} size="lg" />
        </BaseLink>
      </li>
    )

    crumbs.forEach((crumb, index: number) => {
      ret.push(
        <li key={`divider-${index}`}>
          <Divider color={`rgba(0, 0, 0, 0.5)`} />
        </li>
      )

      ret.push(
        <li key={`crumb-${ret.length}`}>
          <ColorLink
            to={crumb[1]}
            color={color}
            color2={color2}
            underline={true}
          >
            {crumb[0]}
          </ColorLink>
        </li>
      )
    })

    return (
      <HideSmall className={className} size="md">
        <Row className="justify-between">
          <ul className={`flex flex-row items-center ${fontSize}`}>{ret}</ul>

          {content && <div>{content}</div>}
        </Row>
      </HideSmall>
    )
  } else {
    return <></>
  }
}

export default Breadcrumb
