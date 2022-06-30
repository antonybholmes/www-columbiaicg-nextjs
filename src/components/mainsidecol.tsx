import React, { ReactNode } from "react"
import Row from "./row"

type MainSideColProps = {
  className?: string
  cls1?: string
  cls2?: string
  cls1ext?: string
  cls2ext?: string
  isVCentered?: boolean
  children?: ReactNode
}

const MainSideCol = ({
  className,
  cls1 = "w-full xl:w-3/4",
  cls2 = "hidden xl:block w-full xl:w-1/4",
  cls1ext,
  cls2ext,
  isVCentered = false,
  children,
}:MainSideColProps) => {
  return (
    <Row wrap={true} isVCentered={isVCentered} className={className}>
      <div className={`${cls1} ${cls1ext}`}>{children[0]}</div>

      <div className={`${cls2} ${cls2ext}`}>{children[1]}</div>
    </Row>
  )
}

export default MainSideCol
