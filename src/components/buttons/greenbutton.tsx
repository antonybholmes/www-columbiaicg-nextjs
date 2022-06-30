import React from "react"
import { BUTTON_CLASSES } from "./bluebutton"

export const GREEN_BUTTON_CLASSES = "bg-green-600 hover:bg-green-700"

type ButtonProps = {
  onClick: any
  className?: string
}

const GreenButton: React.FC<ButtonProps> = ({
  onClick,
  className,
  children,
}) => (
  <button
    onClick={onClick}
    // className="border-b-4 border-solid border-blue-600 bg-default-blue text-white hover:bg-blue-600 trans-ani px-8 py-4 rounded-md uppercase"
    className={`${BUTTON_CLASSES} ${GREEN_BUTTON_CLASSES} ${className}`}
  >
    {children}
  </button>
)

GreenButton.defaultProps = {
  className: "",
}

export default GreenButton

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
