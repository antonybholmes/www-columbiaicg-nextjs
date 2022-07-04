import React, { useState } from "react"

import CalEventDate from "./caleventdate"
import CalEventDetails from "./caleventdetails"
import FullDiv from "../fulldiv"
import Row from "../row"
import HideSmall from "../hidesmall"

export const formatDate = (event: any) => {
  return `${event.start.toLocaleString("default", {
    month: "long",
  })} ${event.start.toLocaleString("default", {
    day: "numeric",
  })}, ${event.start.toLocaleString("default", { year: "numeric" })}`
}

export const formatStartTime = (event: any) => {
  return event.start.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })
}

export const formatTime = (event: any) => {
  const et = event.end.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  })

  return `${formatStartTime(event)} - ${et}`
}

type CalEventProps = {
  event: any
  imageMap?: any
  bg?: string
}
const BaseCalEvent: React.FC<CalEventProps> = ({ event, imageMap, bg }) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <Row isVCentered={false}>
      <HideSmall className="w-28 min-w-28 mr-4">
        <CalEventDate calEvent={event} />
      </HideSmall>
      <FullDiv>
        <CalEventDetails event={event} imageMap={imageMap} hover={hover} />
      </FullDiv>
    </Row>
  )
}

BaseCalEvent.defaultProps = {
  imageMap: {},
  bg: "bg-white",
}

export default BaseCalEvent
