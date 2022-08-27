import { ReactNode } from "react"
import IndexLink from "./indexlink"

type LinkProps = {
  to: string
  children?: ReactNode
}

const TextIndexLink = ({ to, children }: LinkProps) => (
  <IndexLink color="text" to={to}>
    {children}
  </IndexLink>
)

export default TextIndexLink
