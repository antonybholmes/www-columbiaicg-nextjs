import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

type SlideMenuCloseButtonProps = {
  onClick: any
}

const SlideMenuCloseButton: React.FC<SlideMenuCloseButtonProps> = ({
  onClick,
}) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      aria-label="Close"
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`p-2 trans-ani ${hover ? "text-slate-800" : "text-slate-400"}`}
    >
      <Row isCentered={true}>
        <FontAwesomeIcon icon={faTimes} size="lg" />
      </Row>
    </button>
  )
}

export default SlideMenuCloseButton
