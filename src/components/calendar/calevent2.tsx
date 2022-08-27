import { useState } from "react"

import FullDiv from "../fulldiv"
import Row from "../row"
import HideSmall from "../hidesmall"
import useCalEventType from "../../hooks/caleventype"
import { eventUrl } from "../../utils/urls"
import IndexLink from "../buttons/indexlink"
import dayjs from "dayjs"
import getCalEventTypeUrl from "./caleventtypeurl"
import HTMLDiv from "../htmldiv"
import { EventImage } from "./caleventdetails"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BaseLink from "../buttons/baselink"
import { EVENTS_PATH } from "../../constants"
import { faTags } from "@fortawesome/free-solid-svg-icons"

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
    <div className="text-lg font-semibold text-gray-600">
      {start.format("dddd, MMMM D, YYYY")}
    </div>
    <div className="font-light tracking-wide text-gray-400">
      {start.format("h:mm A")} to {end.format("h:mm A")}
    </div>
  </>
)

type CalEventProps = {
  event: any
}

const CalEvent2 = ({ event }: CalEventProps) => {
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
    <Row isVCentered={false} className="justify-between">
      <FullDiv>
        <div className="mb-2">
          {eventDate(start, end)}

          <h2 className="mt-4">{eventLink}</h2>
          <div className="mt-3 text-gray-600 font-light">
            {event.fields.location}
          </div>
          <Row className="mt-4">
            <div className="mr-2">
              <FontAwesomeIcon icon={faTags} />
            </div>
            <ul>
              {event.fields.tagList.map((t: any, index: number) => {
                return (
                  <li
                    className={`inline text-sm font-medium bg-gray-100 hover:bg-gray-200 trans-ani rounded px-3 py-1 mt-2  ${
                      index > 0 ? "ml-2" : ""
                    }`}
                    key={index}
                  >
                    <BaseLink to={getCalEventTypeUrl(EVENTS_PATH, t)}>
                      {t}
                    </BaseLink>
                  </li>
                )
              })}
            </ul>
          </Row>
          <div className={`mt-4 text-lg`}>
            <HTMLDiv o={event} />
          </div>
        </div>

        <div className="text-sm mt-4">{addLink}</div>
      </FullDiv>
      <HideSmall size="lg" className="pt-2 md:pt-0 min-w-56 overflow-hidden">
        <EventImage name={imageName} hover={hover} />
      </HideSmall>
    </Row>
  )
}

export default CalEvent2
