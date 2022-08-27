type RoomLinkProps = {
  room: string
  color?: string
  hoverColor?: string
  size?: string
  iconSize?: string
}

const RoomLink = ({ room }: RoomLinkProps) => <div>{`Room ${room}`}</div>

export default RoomLink
