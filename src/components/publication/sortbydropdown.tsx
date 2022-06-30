import React from "react"
import DropdownMenu from "../dropdownmenu"

const ITEMS = [
  { id: 0, title: "Publication Date" },
  { id: 1, title: "Title" },
  { id: 2, title: "Journal" },
  { id: 3, title: "First Author" },
  { id: 4, title: "Last Author" },
]

type SortDropdownProps = {
  onChange: any
  sortBy: string
}

const SortByDropdown: React.FC<SortDropdownProps> = ({ sortBy, onChange }) => (
  <DropdownMenu title={sortBy} items={ITEMS} onChange={onChange} w="w-40" />
)

export default SortByDropdown
