import React, { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

type SearchButtonProps = {
  globalHover: boolean
  onClick?: any
}

const SearchButton: React.FC<SearchButtonProps> = ({
  globalHover,
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
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`trans-ani ${
        globalHover
          ? hover
            ? "text-blue-600"
            : "text-default-blue"
          : "text-slate-400"
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={faSearch} className={`text-lg`} />
    </button>
  )
}

type ClearButtonProps = {
  onClick: any
}

const ClearButton: React.FC<ClearButtonProps> = ({ onClick }) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <button
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`trans-ani ${hover ? "text-slate-700" : "text-slate-500"}`}
      onClick={onClick}
    >
      {/* <Row isCentered={true}><div className="rounded-full w-6 h-6 bg-slate-500 text-white-95"><FontAwesomeIcon icon="times"/></div></Row> */}
      Clear
    </button>
  )
}

type SearchBarProps = {
  text?: string
  placeholder?: string
  className?: string
  onSearch?: any
  focus?: boolean
}

const SearchBar = ({
  text = "",
  placeholder = "Search items...",
  className,
  onSearch,
  focus,
}: SearchBarProps) => {
  const [hover, setHover] = useState(false)
  const [value, setValue] = useState("")
  const inputEl = useRef(null)

  useEffect(() => {
    setValue(text)
  }, [])

  useEffect(() => {
    setValue(text)
  }, [text])

  // useEffect(() => {
  //   if (focus && inputEl && inputEl.current) {
  //     inputEl.current.focus()
  //   }
  // }, [focus])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      if (onSearch !== null) {
        onSearch(value, true)
      }
    }
  }

  const handleOnChange = (e: any) => {
    setValue(e.target.value)

    if (onSearch !== null) {
      onSearch(e.target.value, false)
    }
  }

  const _handleOnClick = (e: any) => {
    if (onSearch !== null) {
      onSearch(value, true)
    }
  }

  const _handleClearClick = (e: any) => {
    setValue("")

    if (onSearch !== null) {
      onSearch("", true)
    }
  }

  return (
    <Row
      isVCentered={true}
      className={`z-40 px-6 py-3 bg-white border border-solid border-slate-300 hover:shadow rounded-full justify-between trans-ani ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="w-full">
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          className="w-full bg-transparent"
          ref={inputEl}
        />
      </div>
      {value !== "" && (
        <div className="mx-2">
          <ClearButton onClick={_handleClearClick} />
        </div>
      )}
      <div className="ml-2">
        <SearchButton globalHover={hover} onClick={_handleOnClick} />
      </div>
    </Row>
  )
}

export default SearchBar
