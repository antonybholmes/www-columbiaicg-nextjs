import { ReactNode } from "react"
import { BUTTON_CLASSES } from "./bluebutton"

export const TEAL_BUTTON_CLASSES = "bg-teal-500 hover:bg-teal-600"

type ButtonProps = {
  onClick: any
  className?: string
  children?: ReactNode
}

const TealButton = ({ onClick, className, children }: ButtonProps) => (
  <button
    onClick={onClick}
    // className="border-b-4 border-solid border-blue-600 bg-default-blue text-white hover:bg-blue-600 trans-ani px-8 py-4 rounded-md uppercase"
    className={`${BUTTON_CLASSES} ${TEAL_BUTTON_CLASSES} ${className}`}
  >
    {children}
  </button>
)

export default TealButton

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
