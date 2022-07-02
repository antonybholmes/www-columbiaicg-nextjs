import { ReactNode } from "react"
import ColorLink from "./colorlink"

type LinkProps = {
  to: string
  underline?: boolean
  className?: string
  activeClassName?: string
  children?: ReactNode
}

const BlueLink = ({
  to,
  underline = true,
  className,
  activeClassName,
  children,
}: LinkProps) => (
  <ColorLink
    color="blue"
    to={to}
    underline={underline}
    className={className}
    activeClassName={activeClassName}
  >
    {children}
  </ColorLink>
)

export default BlueLink
