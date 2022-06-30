import React from "react"
import IndexLink from "./indexlink"

type IndexLinkProps = {
  to: string
}

const TextIndexLink: React.FC<IndexLinkProps> = ({ to, children }) => (
  <IndexLink color="text" to={to}>
    {children}
  </IndexLink>
)

export default TextIndexLink
