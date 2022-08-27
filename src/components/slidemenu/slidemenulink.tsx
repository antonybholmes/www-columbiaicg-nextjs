import React, { ReactNode } from "react"
import BaseLink from "../buttons/baselink"

type SlideMenuLinkProps = {
  to: string
  active: boolean
  children?: ReactNode
}

const SlideMenuLink: React.FC<SlideMenuLinkProps> = ({
  to,
  active,
  children,
}) => (
  <BaseLink to={to}>
    <div className="py-3 px-6 hover:bg-slate-300">
      {children}
      {/* {!active && (
        <div>
          <FaChevronRight />
        </div>
      )} */}
    </div>
  </BaseLink>
)

export default SlideMenuLink
