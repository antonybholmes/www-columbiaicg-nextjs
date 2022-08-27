import { ReactNode } from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
  children?: ReactNode
}

const TextLink = ({ to, className, activeClassName, children }: LinkProps) => (
  <ColorLink
    color="text"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

export default TextLink
