import React, { useState, useEffect } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import BlueButton from "../buttons/bluebutton"

const H = "h-12"

type SearchButtonProps = {
  globalHover: boolean
  onClick: any
}

const SearchButton: React.FC<SearchButtonProps> = ({
  globalHover,
  onClick,
}) => {
  return (
    <BlueButton onClick={onClick} className={`px-6 py-3`}>
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
      className={`trans-ani ${hover ? "text-gray-700" : "text-gray-500"}`}
      onClick={onClick}
    >
      Clear
    </button>
  )
}

type SearchBarProps = {
  text?: string
  placeholder?: string
  className?: string
  onSearch?: any
}

const SearchBar5: React.FC<SearchBarProps> = ({
  text,
  placeholder,
  className,
  onSearch,
}) => {
  const [hover, setHover] = useState(false)
  const [value, setValue] = useState("")

  useEffect(() => {
    setValue(text)
  }, [])

  useEffect(() => {
    setValue(text)
  }, [text])

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
      className={`justify-between px-5 py-3 rounded-md bg-white border border-solid border-cuimc-dark-gray trans-ani hover:shadow ${className}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button onClick={handleOnClick}>
        <FontAwesomeIcon
          icon="search"
          className={`text-lg trans-ani ${
            hover || value !== "" ? "text-gray-700" : "text-gray-500"
          }`}
        />
      </button>
      <div className="w-full mx-4">
        <input
          type="text"
          aria-label="Search"
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
          className="w-full text bg-transparent"
        />
      </div>
      {value !== "" && <ClearButton onClick={_handleClearClick} />}
      {/* <SearchButton globalHover={hover} onClick={handleOnClick} /> */}
    </Row>
  )
}

SearchBar5.defaultProps = {
  placeholder: "Search items...",
  text: "",
  onSearch: null,
}

export default SearchBar5
