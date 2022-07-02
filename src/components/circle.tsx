import { ReactNode } from "react"
import Row from "./row"

type CircleProps = {
  className?: string
  style?: any
  children?: ReactNode
}

const Circle = ({ className, style, children }: CircleProps) => (
  <Row
    isCentered={true}
    className={`block  overflow-hidden ${className}`}
    style={style}
  >
    {children}
  </Row>
)

export default Circle
