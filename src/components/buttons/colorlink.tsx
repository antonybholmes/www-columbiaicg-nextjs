import React, { ReactNode } from "react"
import BaseLink from "./baselink"

type LinkProps = {
  to: string
  color?: string
  color2?: string
  underlineColor?: string
  underline?: boolean
  target?: string
  onClick?: any
  aria?: string
  className?: string
  activeClassName?: string
  children?: ReactNode
}


const ColorLink = ({
  to,
  color = "",
  color2 = "",
  underlineColor = "",
  underline = true,
  target = "_blank",
  aria = "",
  onClick,
  className,
  activeClassName,
  children,
} : LinkProps) => {
  if (color2 === "") {
    color2 = color
  }

  if (underlineColor === "") {
    underlineColor = color2
  }

  let cls = "trans-ani"

  switch (color) {
    case "green":
      cls = `${cls} text-default-green`
      break
    case "red":
      cls = `${cls} text-red-500`
      break
    case "blue":
      cls = `${cls} text-cuimc-button-blue`
      break
    case "blue2":
      cls = `${cls} text-cuimc-button-blue-60`
      break
    case "blue3":
      cls = `${cls} text-cuimc-blue`
      break
    case "white":
      cls = `${cls} text-white-98`
      break
    case "gray":
      cls = `${cls} text-default-gray`
      break
    case "default":
      cls = `${cls} text-default-color`
      break
    default:
      cls = `${cls} ${color}`
      break
  }

  // Allow switching between colors e.g. gray to blue.
  if (color2 !== "") {
    switch (color2) {
      case "green":
        cls = `${cls} hover:text-default-green`
        break
      case "red":
        cls = `${cls} hover:text-red-500`
        break
      case "blue":
        cls = `${cls} hover:text-cuimc-button-blue`
        break
      case "white":
        cls = `${cls} hover:text-white-98`
        break
      case "gray":
        cls = `${cls} hover:text-default-gray`
        break
      case "default":
        cls = `${cls} hover:text-default-color`
        break
      default:
        cls = `${cls} hover:${color2}`
        break
    }
  }

  if (underline) {
    cls = `${cls} border-b border-solid border-transparent`

    switch (underlineColor) {
      case "green":
        cls = `${cls} hover:border-default-green`
        break
      case "red":
        cls = `${cls} hover:border-red-500`
        break
      case "blue":
        cls = `${cls} hover:border-cuimc-button-blue`
        break
      case "gray":
        cls = `${cls} hover:border-default-gray`
        break
      case "white":
        cls = `${cls} hover:border-white-98`
        break
      case "default":
        cls = `${cls} hover:border-default-color`
        break
      default:
        cls = `${cls} hover:${color2.replace("text", "border")}`
        break
    }
  }

  return (
    <BaseLink
      to={to}
      className={`${cls} ${className}`}
      activeClassName={activeClassName}
      onClick={onClick}
    >
      {children}
    </BaseLink>
  )
}



export default ColorLink
