import React, { useState } from "react"

type DayProps = {
  date: any
  dayColor?: string
  dayBgColor?: string
}

const Day: React.FC<DayProps> = ({ date, dayColor, dayBgColor }) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <div
      className={`bg-white`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div
        className={`uppercase text-sm text-center w-full p-1 ${dayColor} ${dayBgColor}`}
      >
        {date.format("MMM").toUpperCase()}
      </div>
      <div>
        <div className="uppercase font-light text-center text-2xl w-full">
          {date.format("DD")}
        </div>
        <div className={`uppercase text-sm pb-2 text-center w-full`}>
          {date.format("ddd").toUpperCase()}
        </div>
      </div>
    </div>
  )
}

Day.defaultProps = {
  dayColor: "text-white",
  dayBgColor: "bg-columbia-secondary-blue",
}

export default Day
