import React from "react"
import CalEventLocation from "./caleventlocation"
import { eventUrl } from "../../utils/urls"

import HTMLDiv from "../htmldiv"
import useCalEventType from "../../hooks/caleventype"
import useCalEventTypeUrl from "./caleventtypeurl"

import FullDiv from "../fulldiv"
import HideSmall from "../hidesmall"
import ZoomImage from "../images/zoomimage"
import Row from "../row"
import IndexLink from "../buttons/indexlink"
import BaseLink from "../buttons/baselink"
import { EVENTS_PATH, IMAGEKIT_URL } from "../../constants"

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

type EventImageProps = {
  name: string
  hover?: boolean
}

export const EventImage = ({ name, hover = false }: EventImageProps) => (
  <div className={`w-full h-full`}>
    <ZoomImage
      src={`${IMAGEKIT_URL}/events/${name}.jpg`}
      alt={name}
      className="w-full h-full"
      extZoom={hover}
    />
  </div>
)

interface CalEventDetailsProps {
  event: any
  isMobile?: boolean
  color?: string
  hover?: boolean
}

const CalEventDetails = ({
  event,
  isMobile = false,
  color = "black",
  hover = false,
}: CalEventDetailsProps) => {
  const eventType = useCalEventType(event)

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

  return (
    <Row isVCentered={false} className="justify-between">
      <FullDiv>
        <div className="mb-2">
          <h2>{eventLink}</h2>
          <ul className="mt-3">
            {event.fields.tagList.map((t: any, index: number) => {
              return (
                <li
                  className={`text-sm font-medium bg-cuimc-gray rounded px-3 py-1 mt-2 inline ${
                    index > 0 ? "ml-3" : ""
                  }`}
                >
                  <BaseLink to={useCalEventTypeUrl(EVENTS_PATH, t)}>
                    {t}
                  </BaseLink>
                </li>
              )
            })}
          </ul>

          <div
            className={`mt-4 text-lg ${color === "white" ? "text-white" : ""}`}
          >
            <HTMLDiv o={event} />
          </div>
        </div>

        <CalEventLocation event={event} color={color} />

        <div className="text-sm mt-4">{addLink}</div>
      </FullDiv>
      <HideSmall size="lg" className="pt-2 md:pt-0 min-w-56 overflow-hidden">
        <EventImage name={imageName} imageMap={imageMap} hover={hover} />
      </HideSmall>
    </Row>
  )
}

export default CalEventDetails
