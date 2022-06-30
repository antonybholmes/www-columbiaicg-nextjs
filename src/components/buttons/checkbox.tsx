import React, { ReactNode, useState } from "react"
import CheckMark from "./checkmark"

type CheckBoxProps = {
  selected: boolean
  onChange: any
  children?: ReactNode
}

const CheckBox = ({
  selected,
  onChange,
  children,
} : CheckBoxProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      onClick={() => onChange(!selected)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`cursor-pointer trans-ani flex flex-row items-center w-full py-1`}
    >
      <CheckMark selected={selected} hover={hover} className="mr-4" />

      <div
        className={`trans-ani truncate ${
          hover && !selected ? "text-cuimc-button-blue" : ""
        }`}
      >
        {children}
      </div>

      {/* <Row
        isCentered={true}
        className={`w-6 h-6 border border-solid rounded-full trans-ani ${
          selected
            ? "bg-cuimc-button-blue-80 border-transparent text-white"
            : "border-gray-300 bg-white"
        }`}
      >
        {selected && (
          <div>
            <FontAwesomeIcon icon="check" className={`text-sm`} />
          </div>
        )}
      </Row> */}

      {/* {selected && (
          <div>
            <FontAwesomeIcon icon="check" className={`text-cuimc-button-blue-80`} />
          </div>
        )} */}
    </button>
  )
}

CheckBox.defaultProps = {
  onChange: null,
  selected: false,
}

export default CheckBox
