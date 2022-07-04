import dayjs from "dayjs"
import React from "react"
import { eventUrl } from "../../utils/urls"
import BlueLink from "../buttons/bluelink"

type SideBarCalEventProps = {
  event: any
}

const SideBarCalEvent: React.FC<SideBarCalEventProps> = ({ event }) => (
  <div className="mb-4">
    <h5>
      <BlueLink to={eventUrl(event)}>{event.frontmatter.title}</BlueLink>
    </h5>
    <div className="text-gray-400">
      {event.start.format("MMMM DD, YYYY - HH:mm A")}
    </div>
  </div>
)

type CalEventsSideBarProps = {
  events: any
  maxRecords?: number
}

const CalEventsSideBar: React.FC<CalEventsSideBarProps> = ({
  events,
  maxRecords,
}) => {
  const ret = []

  const now = dayjs()

  let c = 0

  for (let i = 0; i < events.length; ++i) {
    const event = events[i]

    if (event.start === undefined) {
      event.start = dayjs(event.frontmatter.start)
      event.end = dayjs(event.frontmatter.end)
    }

    if (event.start < now) {
      continue
    }

    ret.push(<SideBarCalEvent key={i} event={event} />)

    ++c

    if (c === maxRecords) {
      break
    }
  }

  return <>{ret}</>
}

CalEventsSideBar.defaultProps = {
  maxRecords: 5,
}

export default CalEventsSideBar
