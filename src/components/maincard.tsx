import React, { ReactNode } from "react"

type MainCard = {
  className?: string
  children?: ReactNode
}

const MainCard = ({ className, children }: MainCard) => (
  <div className={`bg-slate-100 p-8 rounded ${className}`}>{children}</div>
)

export default MainCard
