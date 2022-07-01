import React, { useState, useEffect, useRef } from "react"
import Row from "./row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import useOnClickOutside from "../hooks/onclickoutside"
import { faChevronUp } from "@fortawesome/free-solid-svg-icons"

const EMPTY_QUERY = ""

type MenuButtonProps = {
  id: number
  title: string
  selectedIndex: number
  toggleItem: any
}

const MenuButton: React.FC<MenuButtonProps> = ({
  id,
  title,
  selectedIndex,
  toggleItem,
}) => {
  const [hover, setHover] = useState(false)

  const handleKeyDown = (e: any) => {
    switch (e.key) {
      case "Enter":
        toggleItem(id, title)
        e.preventDefault()
        break
      default:
        break
    }
  }

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      key={id}
      onClick={() => toggleItem(id, title)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onKeyDown={handleKeyDown}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      className={`py-2 cursor-pointer ${
        hover ? "bg-cuimc-dark-gray" : ""
      } block w-full`}
    >
      <Row className="w-full">
        <div className="w-10">
          {id === selectedIndex && <FontAwesomeIcon icon="check" />}
        </div>
        <div>{title}</div>
      </Row>
    </button>
  )
}

type SortDropdownProps = {
  title: string
  items: Array<any>
  onChange: any
  w?: string
  menuW?: string
}

const DropdownMenu: React.FC<SortDropdownProps> = ({
  title,
  items,
  onChange,
  w,
  menuW,
}) => {
  const [hover, setHover] = useState(false)
  const [expanded, setExpanded] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  // const [items, setItems] = useState([
  //   { id: 0, title: "Publication Date" },
  //   { id: 1, title: "Title" },
  //   { id: 2, title: "Journal" },
  //   { id: 3, title: "First Author" },
  // ])

  const arrowEl = useRef(null)
  const menuEl = useRef(null)
  const refEl = useRef(null)

  useOnClickOutside(refEl, () => {
    setExpanded(false)
    setHover(false)
  })

  useEffect(() => {
    if (expanded) {
      gsap
        .timeline()
        .to(
          arrowEl.current,
          {
            duration: expanded ? 0.3 : 0,
            rotation: "0_cw",
            transformOrigin: "50% 50%",
            ease: "power3.inOut",
          },
          0
        )
        .to(
          menuEl.current,
          {
            duration: 0.3,
            delay: 0,
            opacity: 1,
          },
          0
        )
        .from(
          menuEl.current,
          {
            duration: 0.3,
            delay: 0,
            transform: "translateY(-4rem)",
          },
          0
        )
    } else {
      gsap.timeline().to(
        arrowEl.current,
        {
          duration: 0.3,
          rotation: "180_ccw",
          transformOrigin: "50% 50%",
          ease: "power3.inOut",
        },
        0
      )
    }
  }, [expanded])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  const toggleList = () => {
    setExpanded(!expanded)
  }

  const toggleItem = (id: number, title: string) => {
    setSelectedIndex(id)
    setExpanded(false)
    onChange(items[id].title)
  }

  const handleKeyDown = (e: any) => {
    switch (e.key) {
      case "Enter":
        toggleList()
        e.preventDefault()
        break
      case "ArrowDown":
        setExpanded(true)
        setSelectedIndex(Math.min(selectedIndex + 1, 3))
        e.preventDefault()
        break
      case "ArrowUp":
        setExpanded(true)
        setSelectedIndex(Math.max(selectedIndex - 1, 0))
        e.preventDefault()
        break
      default:
        break
    }
  }

  return (
    <div className="relative" ref={refEl}>
      <button
        onClick={() => toggleList()}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onKeyDown={handleKeyDown}
        className={`border border-solid border-transparent cursor-pointer trans-ani rounded-md overflow-hidden ${
          expanded || hover ? "border-cuimc-dark-gray bg-white" : ""
        }`}
      >
        <Row>
          <div className={`${w} px-3 py-2 text-left`}>
            <h6>{title}</h6>
          </div>
          <Row
            isCentered={true}
            className={`py-2 w-8 h-full trans-ani ${
              expanded || hover ? "bg-cuimc-dark-gray" : ""
            }`}
          >
            <div ref={arrowEl}>
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
          </Row>
        </Row>
      </button>
      <div
        className={`absolute bg-white ${menuW} shadow-menu rounded-md opacity-0 py-2 mt-1 z-10`}
        style={{
          visibility: expanded ? "visible" : "hidden",
        }}
        ref={menuEl}
      >
        {items.map((item: any, index: number) => (
          <MenuButton
            id={item.id}
            title={item.title}
            key={item.title}
            selectedIndex={selectedIndex}
            toggleItem={toggleItem}
          />
        ))}
      </div>
    </div>
  )
}

DropdownMenu.defaultProps = {
  w: "w-56",
  menuW: "w-56",
}

export default DropdownMenu
