import React from "react"
import RadioButtonGroup from "../buttons/radiobuttongroup"

const ITEMS = [
  "Publication date",
  "Title",
  "Journal",
  "First author",
  "Last author",
]

type SortProps = {
  onChange: any
  selected: string
}

const SortBy: React.FC<SortProps> = ({ selected, onChange }) => {
  //const [selectedIndex, setSelectedIndex] = useState(0)

  const handleChange = (index: number) => {
    onChange(ITEMS[index])
  }

  return (
    <RadioButtonGroup
      items={ITEMS}
      selected={selected}
      onChange={handleChange}
      className="text-sm"
    />

    // <ul>
    //   {ITEMS.map((text: string, index: number) => {
    //     return (
    //       <SortItem
    //         key={index}
    //         index={index}
    //         selected={selected}
    //         text={text}
    //         onChange={_handleChange}
    //       />
    //     )
    //   })}
    // </ul>
  )
}

export default SortBy
