import React from "react"
import DropdownMenu from "../dropdownmenu"

const ITEMS = [
  { id: 0, title: "25" },
  { id: 1, title: "50" },
  { id: 2, title: "100" },
  { id: 3, title: "200" },
  { id: 4, title: "400" },
]

type SortDropdownProps = {
  onChange: any
  perPage: string
}

const PerPageDropDown: React.FC<SortDropdownProps> = ({
  perPage,
  onChange,
}) => (
  <DropdownMenu
    title={perPage}
    items={ITEMS}
    onChange={onChange}
    w="w-24"
    menuW="w-48"
  />
)

export default PerPageDropDown
