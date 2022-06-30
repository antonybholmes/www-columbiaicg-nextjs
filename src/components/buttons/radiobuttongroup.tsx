import React, { useState } from "react"
import RadioButton from "./radiobutton"

type RadioButtonGroupProps = {
  items: Array<string>
  selected: string
  onChange: any
  className?: string
}

const RadioButtonGroup: React.FC<RadioButtonGroupProps> = ({
  items,
  selected,
  onChange,
  className,
}) => {
  const [index, setIndex] = useState(selected)

  const handleChange = (text: string, index: number) => {
    setIndex(text)

    onChange(index)
  }

  return (
    <ul className={className}>
      {items.map((item: string, index: number) => {
        return (
          <RadioButton
            key={index}
            text={item}
            index={index}
            selected={item === selected}
            onChange={handleChange}
          />
        )
      })}
    </ul>
  )
}

RadioButtonGroup.defaultProps = {
  className: "",
}

export default RadioButtonGroup
