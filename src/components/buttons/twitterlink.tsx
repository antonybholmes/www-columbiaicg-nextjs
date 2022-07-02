import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LinkProps = {
  twitter?: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const TwitterLink: React.FC<LinkProps> = ({
  twitter,
  color,
  hoverColor,
  size,
  iconSize,
}) => (
  <IconLink
    name="Twitter"
    to={`https://twitter.com/${twitter}`}
    icon={
      <FontAwesomeIcon icon={["fab", "twitter"]} className={`${iconSize}`} />
    }
    content={`@${twitter}`}
    color={color}
    hoverColor={hoverColor}
  />
)

TwitterLink.defaultProps = {
  color: "text-slate-500",
  hoverColor: "text-blue-500",
  size: "text-xl",
  iconSize: "text-xl",
}

export default TwitterLink
