import React from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
}

const GrayLink: React.FC<LinkProps> = ({
  to,
  children,
  className,
  activeClassName,
}) => (
  <ColorLink
    color="gray"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

GrayLink.defaultProps = {
  className: "",
  activeClassName: "",
}

export default GrayLink
