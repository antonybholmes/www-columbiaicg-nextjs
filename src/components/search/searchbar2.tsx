import React, { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import BlueButton from "../buttons/bluebutton"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const H = "h-10"

type SearchButtonProps = {
  globalHover: boolean
  onClick: any
}

const SearchButton: React.FC<SearchButtonProps> = ({
  globalHover,
  onClick,
}) => {
  return (
    <BlueButton onClick={onClick} className={`${H} px-6`}>
      Search
    </BlueButton>
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
      className={`mx-2 trans-ani ${
        hover ? "text-slate-700" : "text-slate-500"
      }`}
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
  focus: boolean
}

const SearchBar2: React.FC<SearchBarProps> = ({
  text,
  placeholder,
  className,
  onSearch,
  focus,
}) => {
  const [hover, setHover] = useState(false)
  const [value, setValue] = useState("")
  const inputEl = useRef(null)

  useEffect(() => {
    setValue(text)
  }, [])

  useEffect(() => {
    setValue(text)
  }, [text])

  useEffect(() => {
    if (focus) {
      inputEl.current.focus()
    }
  }, [focus])

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

  const handleOnClick = (e: any) => {
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
      className={`justify-between ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Row
        className={`w-full px-4 h-full py-2 rounded-full trans-ani bg-cuimc-light-gray`}
      >
        <div className="cursor-pointer mr-2" onClick={handleOnClick}>
          <FontAwesomeIcon icon={faSearch} className={`text-slate-500`} />
        </div>
        <div className="w-full ">
          <input
            type="text"
            aria-label="Search"
            placeholder={placeholder}
            value={value}
            onChange={handleOnChange}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent"
            autoFocus
            ref={inputEl}
          />
        </div>
        {value !== "" && <ClearButton onClick={_handleClearClick} />}
      </Row>
      {/* <SearchButton globalHover={hover} onClick={handleOnClick} /> */}
    </Row>
  )
}

SearchBar2.defaultProps = {
  placeholder: "Search items...",
  text: "",
  onSearch: null,
  focus: false,
}

export default SearchBar2
