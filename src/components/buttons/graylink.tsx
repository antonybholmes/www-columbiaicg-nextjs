import { ReactNode } from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  className?: string
  activeClassName?: string
  children?: ReactNode
}

const GrayLink = ({ to, children, className, activeClassName }: LinkProps) => (
  <ColorLink
    color="gray"
    to={to}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

export default GrayLink
