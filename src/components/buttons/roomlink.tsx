import React from "react"
import IconLink from "./iconlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type RoomLinkProps = {
  room: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const RoomLink: React.FC<RoomLinkProps> = ({
  room,
  color,
  hoverColor,
  size,
  iconSize,
}) => (
  <IconLink
    name="Location"
    color={color}
    hoverColor={hoverColor}
    icon={<FontAwesomeIcon icon="map-marker-alt" className={`${iconSize}`} />}
    content={`Room ${room}`}
  />
)

RoomLink.defaultProps = {
  color: "text-slate-500",
  hoverColor: "text-slate-500",
  size: "text-xl",
  iconSize: "text-xl",
}

export default RoomLink
