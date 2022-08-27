import { ReactNode } from "react"
import BlueButton from "./bluebutton"

type ButtonProps = {
  onClick: any
  children?: ReactNode
}

const Button = ({ onClick, children }: ButtonProps) => (
  <BlueButton onClick={onClick}>{children}</BlueButton>
)

export default Button
