import React, { ReactNode } from "react"

type LinkProps = {
  to: string
  target?: string
  aria?: string
  onClick?: any
  className?: string
  activeClassName?: string
  children?: ReactNode
}

const BaseLink = ({
  to,
  target = "_blank",
  aria = "",
  onClick,
  className,
  children,
}: LinkProps) => {
  if (to === null || to === undefined) {
    to = ""
  }

  // Determine if link appears to be to an external site or not
  const isExt =
    !to.startsWith("/") || to.startsWith("http") || to.startsWith("www")

  if (isExt) {
    return (
      <a
        href={to}
        aria-label={aria}
        target={target}
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    )
  } else {
    return (
      <a href={to} aria-label={aria} className={className} onClick={onClick}>
        {children}
      </a>
    )
  }
}

export default BaseLink
