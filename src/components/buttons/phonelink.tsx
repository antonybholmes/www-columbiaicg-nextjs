import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

type PhoneLinkProps = {
  name?: string
  phone: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const PhoneLink: React.FC<PhoneLinkProps> = ({
  name,
  phone,
  color,
  hoverColor,
  size,
  iconSize,
}) => (
  <IconLink
    name={name}
    to={`tel:${phone}`}
    icon={<FontAwesomeIcon icon={faPhone} className={`${iconSize}`} />}
    content={phone}
    color={color}
    hoverColor={hoverColor}
  />
)

PhoneLink.defaultProps = {
  name: "Phone",
  color: "text-gray-500",
  hoverColor: "text-blue-500",
  size: "text-xl",
  iconSize: "text-xl",
}

export default PhoneLink
