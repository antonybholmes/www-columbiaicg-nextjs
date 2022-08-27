import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LinkProps = {
  twitter?: string
  color?: string
  hoverColor?: string
  iconSize?: string
}

const TwitterLink: React.FC<LinkProps> = ({
  twitter,
  color = "text-slate-500",
  hoverColor = "text-blue-500",
  iconSize = "text-xl",
}) => (
  <IconLink
    to={`https://twitter.com/${twitter}`}
    icon={
      <FontAwesomeIcon icon={["fab", "twitter"]} className={`${iconSize}`} />
    }
    color={color}
    hoverColor={hoverColor}
  >{`@${twitter}`}</IconLink>
)

export default TwitterLink
