import React from "react"
import BlueButton from "./bluebutton"

type ButtonProps = {
  onClick: any
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => (
  <BlueButton onClick={onClick}>{children}</BlueButton>
)

export default Button
