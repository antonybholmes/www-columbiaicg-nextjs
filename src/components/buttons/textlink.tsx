import React from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
}

const TextLink: React.FC<LinkProps> = ({
  to,
  className,
  activeClassName,
  children,
}) => (
  <ColorLink
    color="text"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

TextLink.defaultProps = {
  className: "",
  activeClassName: "",
}

export default TextLink
