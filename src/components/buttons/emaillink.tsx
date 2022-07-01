import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

type EmailLinkProps = {
  name?: string
  to: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const EmailLink = ({
  to,
  name = "Email Address",
  color = "text-gray-500",
  hoverColor = "text-blue-500",
  size = "text-xl",
  iconSize = "text-xl",
} :EmailLinkProps) => (
  <IconLink
    name={name}
    to={`mailto:${to}`}
    icon={
      <FontAwesomeIcon icon={faEnvelope} className={iconSize} />
    }
    content={to}
    color={color}
    hoverColor={hoverColor}
  />
)



export default EmailLink
