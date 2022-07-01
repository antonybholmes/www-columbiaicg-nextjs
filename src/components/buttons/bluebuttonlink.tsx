import React, { ReactNode } from "react"
import { BLUE_BUTTON_CLASSES, BUTTON_CLASSES } from "./bluebutton"
import ColorLink from "./colorlink"

type BlueButtonProps = {
  to: string
  className?: string
  children?: ReactNode
}

const BlueButtonLink  = ({
  to,
  className,
  children,
}:BlueButtonProps) => (
  <ColorLink
    to={to}
    // className="border-b-4 border-solid border-blue-600 bg-default-blue text-white hover:bg-blue-600 trans-ani px-8 py-4 rounded-md uppercase"
    color="white"
    underline={false}
    className={`${BUTTON_CLASSES} ${BLUE_BUTTON_CLASSES} ${className}`}
  >
    {children}
  </ColorLink>
)

export default BlueButtonLink

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
