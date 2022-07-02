import React from "react"
import { Link } from "gatsby"

type SlideMenuLinkProps = {
  to: string
  active: boolean
}

const SlideMenuLink: React.FC<SlideMenuLinkProps> = ({
  to,
  active,
  children,
}) => (
  <Link to={to}>
    <div className="py-3 px-6 hover:bg-slate-300">
      {children}
      {/* {!active && (
        <div>
          <FaChevronRight />
        </div>
      )} */}
    </div>
  </Link>
)

export default SlideMenuLink
