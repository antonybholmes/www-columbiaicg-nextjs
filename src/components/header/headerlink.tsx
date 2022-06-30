import React from "react"
import { Link } from "gatsby"

const HeaderLink = (props: any) => (
  <Link
    className="header-link"
    activeClassName="header-link-active"
    {...props}
  />
)

export default HeaderLink
