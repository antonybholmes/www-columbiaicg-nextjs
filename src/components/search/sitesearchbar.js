import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import { gsap } from "gsap"

const SiteSearchBar = ({
  handleInputChange,
  handleKeyDown,
  placeholder,
  text,
  className,
  selected,
}) => {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)

  let barEl = useRef(null)
  let inputEl = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        barEl.current,
        0.5,
        {
          background: expanded ? "white" : "transparent",
          ease: "power3.inOut",
        },
        0
      )
      .to(
        barEl.current,
        0.5,
        { width: expanded ? "100%" : "5rem", ease: "power3.inOut" },
        0.1
      )
      .to(
        inputEl.current,
        0.5,
        { opacity: expanded ? 1 : 0, ease: "power3.inOut" },
        0.1
      )
  }, [expanded])

  const onMouseEnter = e => {
    setHover(true)
  }

  const onMouseLeave = e => {
    setHover(false)
  }

  const onClick = e => {
    setExpanded(!expanded)
  }

  const onFocus = e => {
    setHover(true)
  }

  const onBlur = e => {
    setHover(false)
  }

  //"bg-white border-gray-300"
  // "bg-gray-200 border-gray-200"

  return (
    <Row
      w="w-full"
      className={`px-5 py-2 rounded-full items-center justify-between trans-ani ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      ref={barEl}
    >
      <div className="w-full">
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          value={text}
          onChange={handleInputChange}
          className={`bg-transparent w-full border-none outline-none`}
          ref={inputEl}
        />
      </div>
      <div>
        <FontAwesomeIcon
          icon="search"
          className={`cursor-pointer ${
            expanded ? "text-blue-500" : hover ? "text-white" : "text-white-60"
          } trans-ani ml-2 text-lg`}
          onClick={onClick}
        />
      </div>
    </Row>
  )
}

SiteSearchBar.defaultProps = {
  placeholder: "Type to search...",
  text: "",
  selected: false,
}

export default SiteSearchBar
