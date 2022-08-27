import React, { ReactNode } from "react"
import IndexLink from "./indexlink"

type IndexLinkProps = {
  to: string
  children?: ReactNode
}

const WhiteIndexLink: React.FC<IndexLinkProps> = ({ to, children }) => (
  <IndexLink color="white" to={to}>
    {children}
  </IndexLink>
)

export default WhiteIndexLink
