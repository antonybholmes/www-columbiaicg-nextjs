import React, { ReactNode } from "react"
import ColorLink from "./colorlink"

type WhiteLinkProps = {
  to: string
  children?: ReactNode
}

const WhiteLink = ({ to, children }: WhiteLinkProps) => (
  <ColorLink color="white" to={to}>
    {children}
  </ColorLink>
)

export default WhiteLink
