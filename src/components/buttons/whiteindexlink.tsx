import React from "react"
import IndexLink from "./indexlink"

type IndexLinkProps = {
  to: string
}

const WhiteIndexLink: React.FC<IndexLinkProps> = ({ to, children }) => (
  <IndexLink color="white" to={to}>
    {children}
  </IndexLink>
)

export default WhiteIndexLink
