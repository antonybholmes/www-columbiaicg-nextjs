import React from "react"
import useCalEventType from "../../hooks/caleventype"
import Day from "./day"
import dayjs from "dayjs"

type CalEventDateProps = {
  calEvent: any
  color?: string
  smallFormat?: boolean
}

const CalEventDate: React.FC<CalEventDateProps> = ({
  calEvent,
  color,
  smallFormat,
}) => {
  const eventType = useCalEventType(calEvent)

  let textColor: string = ""
  let dayColor: string = ""
  let dayBgColor: string = ""

  switch (color) {
    case "white":
      textColor = "text-white"
      dayBgColor = "bg-transparent"
      break
    default:
      dayColor = "text-white"
      switch (eventType) {
        case "Public Talk":
        case "Guest Speaker":
          textColor = "text-red-400"
          dayBgColor = "bg-red-400"
          break
        default: //"text-columbia-secondary-blue"
          textColor = "text-cuimc-button-blue"
          dayBgColor = "bg-columbia-secondary-blue"
          break
      }
  }

  if (color !== "white") {
    if (calEvent.frontmatter.tagList.includes("color::red")) {
      textColor = "text-red-500"
      dayBgColor = "bg-red-500"
    }
  }

  // const day = {
  //   month: calEvent.frontmatter.month,
  //   day: calEvent.frontmatter.day,
  //   weekday: calEvent.frontmatter.weekday,
  // }

  const date = dayjs(calEvent.frontmatter.start)

  return <Day date={date} dayColor={dayColor} dayBgColor={dayBgColor} />
}

CalEventDate.defaultProps = {
  color: "",
  smallFormat: false,
}

export default CalEventDate
