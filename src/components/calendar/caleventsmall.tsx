import React, { useState } from "react"

import FullDiv from "../fulldiv"
import Row from "../row"
import HideSmall from "../hidesmall"
import useSiteMetadata from "../../hooks/sitemetadata"
import useCalEventType from "../../hooks/caleventype"
import { Link } from "gatsby"
import { eventUrl } from "../../utils/urls"
import IndexLink from "../buttons/indexlink"
import dayjs from "dayjs"
import useCalEventTypeUrl from "./caleventtypeurl"
import HTMLDiv from "../htmldiv"
import { EventImage } from "./caleventdetails"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const useImageName = (event: any): string => {
  let imageName: string = ""

  for (let tag of event.frontmatter.tagList) {
    if (tag.startsWith("image::")) {
      const tokens = tag.split("::")
      imageName = tokens[1]
      break
    }
  }

  return imageName
}

export const eventDate = (start: any, end: any) => (
  <>
    <div className="text-sm text-gray-600">
      {start.format("dddd, MMMM D, YYYY")}
    </div>
    <div className="text-sm font-light tracking-wide text-gray-400 mt-2">
      ({start.format("h:mm A")} to {end.format("h:mm A")})
    </div>
  </>
)

type CalEventProps = {
  event: any
}

const CalEventSmall: React.FC<CalEventProps> = ({ event }) => {
  const { paths } = useSiteMetadata()

  const eventType = useCalEventType(event)

  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  let eventLink
  let addLink

  switch (eventType) {
    case "Public Talk":
    case "Guest Speaker":
      eventLink = (
        <Link to={eventUrl(event)}>
          <div className="text-red-400">{event.frontmatter.title}</div>
        </Link>
      )

      addLink = (
        <IndexLink color="red" to={event.icsFile}>
          Add To Calendar
        </IndexLink>
      )
      break
    default:
      eventLink = (
        <Link to={eventUrl(event)}>
          <div className="text-columbia-secondary-blue">
            {event.frontmatter.title}
          </div>
        </Link>
      )

      addLink = (
        <IndexLink color="blue" to={event.icsFile}>
          Add To Calendar
        </IndexLink>
      )
      break
  }

  // See if we should include an image
  const imageName = useImageName(event)

  const start = dayjs(event.frontmatter.start)
  const end = dayjs(event.frontmatter.end)

  return (
    <>
      {eventDate(start, end)}

      <h4 className="mt-4">{eventLink}</h4>

      <div className={`mt-4 mr-4 text-sm`}>
        <HTMLDiv o={event} />
      </div>
      <div className="mt-4 text-sm text-gray-600 font-light">
        {event.frontmatter.location}
      </div>
    </>
  )
}

export default CalEventSmall
