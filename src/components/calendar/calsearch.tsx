import { isEqual } from "date-fns"
import React, { useState } from "react"
//import SideBar from "../sidebar/sidebar"
import { DayPicker } from "react-day-picker"
import MainSideCol from "../mainsidecol"
import CalSearchResults from "./calsearchresults"

const EMPTY_QUERY = ""

type CalSearchProps = {
  allCalEvents: any[]
}

const CalSearch: React.FC<CalSearchProps> = ({ allCalEvents }) => {
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(20)
  const [selectedDays, setSelectedDays] = useState([])

  // const handleInputChange = e => {
  //   const q = e.target.value
  //   let ret = []

  //   for (let event of allCalEvents) {
  //     if (event.frontmatter.title.toLowerCase().includes(q.toLowerCase())) {
  //       ret.push(event)
  //     }
  //   }

  //   // update state according to the latest query and results
  //   setQuery(q)
  //   setFilteredCalEvents(ret)
  //   setPage(1)
  // }

  const handleDayClick = (day: any, { selected }: any) => {
    // const { selectedDays } = this.state;
    // if (selected) {
    //   const selectedIndex = selectedDays.findIndex(selectedDay =>
    //     DateUtils.isSameDay(selectedDay, day)
    //   );
    //   selectedDays.splice(selectedIndex, 1);
    // } else {
    //   selectedDays.push(day);
    // }
    //setSelectedDays(selected ? [] : [day])
  }

  const onPageChanged = (data: any) => {
    const { page } = data
    setPage(page)
  }

  let dayFilteredEvents = []

  if (selectedDays.length > 0) {
    dayFilteredEvents = allCalEvents.filter(e => {
      return isEqual(selectedDays[0], e.start)
    })
  } else {
    const now = Date.now()

    dayFilteredEvents = allCalEvents.filter(e => {
      return e.start >= now
    })
  }

  const offset = (page - 1) * recordsPerPage
  let pagedEvents = dayFilteredEvents.slice(offset, offset + recordsPerPage)

  return (
    <MainSideCol>
      <CalSearchResults events={dayFilteredEvents} pagedEvents={pagedEvents} />

      <div className="text-center">
        {/* <DayPicker selectedDays={selectedDays} onDayClick={handleDayClick} /> */}
      </div>
    </MainSideCol>
  )
}

export default CalSearch
