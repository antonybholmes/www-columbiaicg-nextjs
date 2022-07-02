import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type LinkProps = {
  github?: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const GitHubLink: React.FC<LinkProps> = ({
  github,
  color,
  hoverColor,
  size,
  iconSize,
}) => (
  <IconLink
    name="GitHub"
    to={`https://github.com/${github}`}
    icon={
      <FontAwesomeIcon icon={["fab", "github"]} className={`${iconSize}`} />
    }
    content={github}
    color={color}
    hoverColor={hoverColor}
  />
)

GitHubLink.defaultProps = {
  color: "text-slate-500",
  hoverColor: "text-blue-500",
  size: "text-xl",
  iconSize: "text-xl",
}

export default GitHubLink
