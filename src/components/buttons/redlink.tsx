import { ReactNode } from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
  children?: ReactNode
}

const RedLink = ({ to, className, activeClassName, children }: LinkProps) => (
  <ColorLink
    color="red"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

export default RedLink
