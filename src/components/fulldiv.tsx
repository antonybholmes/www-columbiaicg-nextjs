import React, { ReactNode } from "react"

type FullDivProps = {
  className?: string
  children?: ReactNode
}

const FullDiv = ({ className, children }: FullDivProps) => (
  <div className={`w-full ${className}`}>{children}</div>
)

export default FullDiv
