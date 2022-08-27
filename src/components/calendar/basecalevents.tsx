import React from "react"
import BaseCalEvent from "./basecalevent"

type CalEventsProps = {
  calEvents: any[]
  imageMap?: object
}

const BaseCalEvents: React.FC<CalEventsProps> = ({ calEvents, imageMap }) => (
  <ul className="w-full">
    {calEvents.map((e: any, index: number) => (
      <li className="mb-8 border-b border-solid border-gray-300" key={index}>
        <BaseCalEvent event={e} imageMap={imageMap} />
      </li>
    ))}
  </ul>
)

BaseCalEvents.defaultProps = {
  imageMap: {},
}

export default BaseCalEvents
