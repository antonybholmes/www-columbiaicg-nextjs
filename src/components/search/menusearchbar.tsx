import React, { useState, useRef, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import Row from "../row"
import RightDiv from "../rightdiv"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

type SearchBarType = {
  onChange: any
  placeholder?: string
  text?: string
  className?: string
}

const MenuSearchBar = ({
  onChange,
  placeholder = "Search items...",
  text = "",
  className,
}: SearchBarType) => {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)

  let barEl = useRef(null)
  let bgEl = useRef(null)
  let inputEl = useRef(null)

  useEffect(() => {
    gsap
      .timeline()
      .to(
        bgEl.current,
        {
          duration: 0.4,
          borderColor: expanded ? "rgba(230, 230, 230, 1)" : "transparent",
          ease: "power3.inOut",
        },
        0
      )
      .to(
        bgEl.current,
        {
          duration: 0.4,
          delay: 0.1,
          width: expanded ? "100%" : "5rem",
          ease: "power3.inOut",
        },
        0
      )
      .to(
        inputEl.current,
        {
          duration: 0.4,
          delay: 0.1,
          width: expanded ? "100%" : 0,
          ease: "power3.inOut",
        },
        0
      )
      .to(
        inputEl.current,
        {
          duration: 0.4,
          delay: 0.2,
          opacity: expanded ? 1 : 0,
          ease: "power3.inOut",
        },
        0
      )
  }, [expanded])

  useEffect(() => {
    if (text !== "") {
      setExpanded(true)
    }
  }, [text])

  const onClick = (e: any) => {
    setExpanded(!expanded)
  }

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <RightDiv className={`w-full my-2 ${className}`}>
      <Row
        className={`pl-3 pr-2 py-2 justify-between w-20 border border-solid border-transparent`}
        style={{ zIndex: 2 }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={bgEl}
      >
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          value={text}
          onChange={onChange}
          className="bg-transparent opacity-0 w-0"
          ref={inputEl}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className={`cursor-pointer ${
            expanded || hover ? "text-blue-500" : "text-slate-400"
          } trans-ani mx-2 text-lg`}
          onClick={onClick}
        />
      </Row>
      {/* <div
        className={`absolute right-0 top-0 h-full rounded-full py-3 ${className}`}
        style={{ zIndex: 1 }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        ref={bgEl}
      /> */}
    </RightDiv>
  )
}

export default MenuSearchBar
