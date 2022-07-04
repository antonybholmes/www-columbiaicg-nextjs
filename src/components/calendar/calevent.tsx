import dayjs from "dayjs"
import React, { useState } from "react"
import useCalEventType from "../../hooks/caleventype"

import FlatCard from "../flatcard"
import ShowSmall from "../showsmall"
import BaseCalEvent from "./basecalevent"
import SmallDay from "./smallday"

type CalEventProps = {
  event: any
  imageMap?: any
  bg?: string
  showShadow?: boolean
}
const CalEvent: React.FC<CalEventProps> = ({
  event,
  imageMap,
  bg,
  showShadow,
}) => {
  const eventType = useCalEventType(event)

  const date = dayjs(event.frontmatter.start)

  return (
    <>
      <ShowSmall className="mb-2">
        <SmallDay
          date={date}
          dayBgColor={
            eventType === "Seminar"
              ? "bg-columbia-secondary-blue"
              : "bg-red-400"
          }
        />
      </ShowSmall>
      {/* <FlatCard bg={bg} padding="p-4" autoHide={false}> */}
      <BaseCalEvent event={event} imageMap={imageMap} />
      {/* </FlatCard> */}
    </>
  )
}

CalEvent.defaultProps = {
  imageMap: {},
  bg: "bg-white",
  showShadow: true,
}

export default CalEvent
