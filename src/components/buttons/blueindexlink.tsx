import React from "react"
import IndexLink from "./indexlink"

type IndexLinkProps = {
  to: string
  className?: string
  onClick?: any
}

const BlueIndexLink: React.FC<IndexLinkProps> = ({
  to,
  className,
  onClick,
  children,
}) => (
  <IndexLink color="blue" to={to} className={className} onClick={onClick}>
    {children}
  </IndexLink>
)

BlueIndexLink.defaultProps = {
  className: "",
}

export default BlueIndexLink
