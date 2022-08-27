import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPhone } from "@fortawesome/free-solid-svg-icons"

type PhoneLinkProps = {
  phone: string
  color?: string
  hoverColor?: string
  iconSize?: string
}

const PhoneLink = ({
  phone,
  color = "text-slate-500",
  hoverColor = "text-blue-500",
  iconSize = "text-xl",
}: PhoneLinkProps) => (
  <IconLink
    to={`tel:${phone}`}
    icon={<FontAwesomeIcon icon={faPhone} className={`${iconSize}`} />}
    color={color}
    hoverColor={hoverColor}
  >
    {phone}/
  </IconLink>
)

export default PhoneLink
