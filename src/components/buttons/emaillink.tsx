import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

type EmailLinkProps = {
  to: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const EmailLink = ({
  to,
  color = "text-slate-500",
  hoverColor = "text-blue-500",
  iconSize = "text-xl",
}: EmailLinkProps) => (
  <IconLink
    to={`mailto:${to}`}
    icon={<FontAwesomeIcon icon={faEnvelope} className={iconSize} />}
    color={color}
    hoverColor={hoverColor}
  >
    {to}
  </IconLink>
)

export default EmailLink
