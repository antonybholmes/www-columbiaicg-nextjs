import React, { useState } from "react"

import useCalEventType from "../../hooks/caleventype"
import { eventUrl } from "../../utils/urls"
import IndexLink from "../buttons/indexlink"
import dayjs from "dayjs"
import HTMLDiv from "../htmldiv"
import BaseLink from "../buttons/baselink"

export const useImageName = (event: any): string => {
  let imageName: string = ""

  for (let tag of event.fields.tagList) {
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
        <BaseLink to={eventUrl(event)}>
          <div className="text-red-400">{event.fields.title}</div>
        </BaseLink>
      )

      addLink = (
        <IndexLink color="red" to={event.icsFile}>
          Add To Calendar
        </IndexLink>
      )
      break
    default:
      eventLink = (
        <BaseLink to={eventUrl(event)}>
          <div className="text-columbia-secondary-blue">
            {event.fields.title}
          </div>
        </BaseLink>
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

  const start = dayjs(event.fields.start)
  const end = dayjs(event.fields.end)

  return (
    <>
      {eventDate(start, end)}

      <h4 className="mt-4">{eventLink}</h4>

      <div className={`mt-4 mr-4 text-sm`}>
        <HTMLDiv o={event} />
      </div>
      <div className="mt-4 text-sm text-gray-600 font-light">
        {event.fields.location}
      </div>
    </>
  )
}

export default CalEventSmall
