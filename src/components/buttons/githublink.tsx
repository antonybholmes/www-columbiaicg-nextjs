import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

type LinkProps = {
  github?: string
  color?: string
  hoverColor?: string
  iconSize?: string
}

const GitHubLink = ({
  github,
  color = "text-slate-500",
  hoverColor = "text-blue-500",
  iconSize = "text-xl",
}: LinkProps) => (
  <IconLink
    to={`https://github.com/${github}`}
    icon={<FontAwesomeIcon icon={faGithub} className={`${iconSize}`} />}
    color={color}
    hoverColor={hoverColor}
  >
    {github}
  </IconLink>
)

export default GitHubLink
