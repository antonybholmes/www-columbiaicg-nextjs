import  { ReactNode } from "react"
import Row from "./row"

type DivProps = {
  className?: string
  style?: any
  size?: string
  onClick?: any
  children?: ReactNode
}

const RightDiv = ({
  className,
  style,
  size = "md",
  onClick,
  children,
}: DivProps) => (
  <Row
    isVCentered={false}
    className={`${size !== "" ? `${size}:` : ""}justify-end ${className}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </Row>
)

export default RightDiv
