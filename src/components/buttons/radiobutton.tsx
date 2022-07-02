import React, { useState } from "react"
import Row from "../row"

//import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type RadioButtonProps = {
  index: number
  text: string
  selected: boolean
  onChange: any
}

const RadioButton: React.FC<RadioButtonProps> = ({
  index,
  text,
  selected,
  onChange,
}) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <li key={index}>
      <button
        onClick={() => onChange(text, index)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`cursor-pointer trans-ani flex flex-row items-center w-full py-1`}
      >
        <Row
          isCentered={true}
          className={`w-5 h-5 min-w-5 min-h-5 mr-4 bg-white rounded-full overflow-hidden border-2 border-solid trans-ani ${
            selected
              ? "border-cuimc-button-blue-70"
              : `border-slate-200 ${hover ? "border-cuimc-button-blue-70" : ""}`
          }`}
        >
          {selected && (
            <div className={`w-3 h-3 rounded-full bg-cuimc-button-blue-70`} />
          )}
        </Row>

        <div
          className={`trans-ani truncate ${
            hover && !selected ? "text-cuimc-button-blue" : ""
          }`}
        >
          {text}
        </div>

        {/* {selected && (
          <div>
            <FontAwesomeIcon icon="check" />
          </div>
        )} */}

        {/* <div className={`trans-ani ${selected ? "opacity-100" : "opacity-0"}`}>
          <FontAwesomeIcon icon="check" className={`text-sm`} />
        </div>  */}

        {/* <div
          className={`text-white w-full h-full rounded-full trans-ani border border-solid ${selected ? "border-transparent" : "border-slate-300"}`} 
        /> */}
      </button>
    </li>
  )
}

export default RadioButton
