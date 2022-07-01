import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

type ButtonProps = {
  isExpanded: boolean
  hover?: boolean
}

const ExpandArrow: React.FC<ButtonProps> = ({ isExpanded, hover }) => {
  const [_hover, _setHover] = useState(false)
  const arrowEl = useRef(null)

  const animate = () => {
    gsap.killTweensOf(arrowEl.current)

    gsap.timeline().to(arrowEl.current, {
      duration: 0.3,
      rotation: `${isExpanded ? "180_ccw" : "0_cw"}`,
      transformOrigin: "50% 50%",
      ease: "power3.out",
    })
  }

  useEffect(() => {
    animate()
  }, [])

  useEffect(() => {
    animate()
  }, [isExpanded])

  const onMouseEnter = (e: any) => {
    _setHover(true)
  }

  const onMouseLeave = (e: any) => {
    _setHover(false)
  }

  return (
    <div className="w-5 h-5 flex flex-row items-center justify-center overflow-hidden">
      <div
        ref={arrowEl}
        className="w-full h-full flex flex-row items-center justify-center"
      >
        <FontAwesomeIcon
          icon={faChevronDown} //{isExpanded ? "chevron-up" : "chevron-down"}
          className={`trans-ani text-sm ${
            hover || _hover ? "text-black" : "text-gray-300"
          }`}
        />
      </div>
    </div>
  )
}

ExpandArrow.defaultProps = {
  hover: false,
}

export default ExpandArrow
