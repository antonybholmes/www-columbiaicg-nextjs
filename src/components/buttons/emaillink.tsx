import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type EmailLinkProps = {
  name?: string
  to: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const EmailLink: React.FC<EmailLinkProps> = ({
  name,
  to,
  color,
  hoverColor,
  size,
  iconSize,
}) => (
  <IconLink
    name={name}
    to={`mailto:${to}`}
    icon={
      <FontAwesomeIcon icon={["far", "envelope"]} className={`${iconSize}`} />
    }
    content={to}
    color={color}
    hoverColor={hoverColor}
  />
)

EmailLink.defaultProps = {
  name: "Email Address",
  color: "text-gray-500",
  hoverColor: "text-blue-500",
  size: "text-xl",
  iconSize: "text-xl",
}

export default EmailLink
