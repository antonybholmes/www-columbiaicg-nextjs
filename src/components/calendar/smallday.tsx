import React, { useState } from "react"

type DayProps = {
  date: any
  dayColor?: string
  dayBgColor?: string
}

const SmallDay: React.FC<DayProps> = ({ date, dayColor, dayBgColor }) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <div
      className={`${dayColor} ${dayBgColor} text-center text-sm py-2`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {`${date.format("dddd")}, ${date.format("MMMM")} ${date.format(
        "DD"
      )} ${date.format("YYYY")}`}
    </div>
  )
}

SmallDay.defaultProps = {
  dayColor: "text-white",
  dayBgColor: "bg-columbia-secondary-blue",
}

export default SmallDay
