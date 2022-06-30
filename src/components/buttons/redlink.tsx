import React from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
}

const RedLink: React.FC<LinkProps> = ({
  to,
  className,
  activeClassName,
  children,
}) => (
  <ColorLink
    color="red"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

RedLink.defaultProps = {
  className: "",
  activeClassName: "",
}

export default RedLink
