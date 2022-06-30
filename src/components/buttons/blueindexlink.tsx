import React, { ReactNode } from "react"
import IndexLink from "./indexlink"

type IndexLinkProps = {
  to: string
  className?: string
  onClick?: any
  children?: ReactNode
}

const BlueIndexLink  = ({
  to,
  className,
  onClick,
  children,
} : IndexLinkProps) => (
  <IndexLink color="blue" to={to} className={className} onClick={onClick}>
    {children}
  </IndexLink>
)

BlueIndexLink.defaultProps = {
  className: "",
}

export default BlueIndexLink
