import React from "react"
import Row from "../row"
import TickSvg from "../../../public/assets/images/svg/white-tick.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCheck,
} from "@fortawesome/free-solid-svg-icons"

type CheckMarkProps = {
  selected: boolean
  hover: boolean
  className?: string
}

const CheckMark = ({
  selected,
  hover,
  className,
}:CheckMarkProps) => {
  return (
    <Row
      isCentered={true}
      className={`w-5 h-5 min-w-5 min-h-5 rounded  ${
        selected
          ? "bg-cuimc-button-blue-70 text-white"
          : `trans-ani border-2 border-solid border-gray-200 bg-white ${
              hover ? "border-cuimc-button-blue-70" : ""
            }`
      } ${className}`}
    >
      {selected && (
        <div>
          <FontAwesomeIcon icon={faCheck} className={`text-sm`} />
          {/* <img src="/assets/images/svg/white-tick.svg" className="w-3" alt="Check mark" /> */}
        </div>
      )}
    </Row>
  )
}

export default CheckMark
