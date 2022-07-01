import { ReactNode } from "react"

export const BUTTON_CLASSES =
  "text-white trans-ani px-5 py-3 text-sm font-medium rounded trans-ani"

export const BLUE_BUTTON_CLASSES = "bg-cuimc-button-blue-90 hover:bg-cuimc-blue"

type ButtonProps = {
  onClick: any
  className?: string
  children?: ReactNode
}

const BlueButton = ({
  onClick,
  className,
  children,
}:ButtonProps) => (
  <button
    onClick={onClick}
    // className="border-b-4 border-solid border-blue-600 bg-default-blue text-white hover:bg-blue-600 trans-ani px-8 py-4 rounded-md uppercase"
    className={`${BUTTON_CLASSES} ${BLUE_BUTTON_CLASSES} ${className}`}
  >
    {children}
  </button>
)

BlueButton.defaultProps = {
  className: "",
}

export default BlueButton

//font-medium bg-blue-600 hover:bg-blue-500 text-white shadow-md rounded px-5 py-3 trans-ani"
