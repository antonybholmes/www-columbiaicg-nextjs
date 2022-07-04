import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import AltView from "../altview"

type CalEventLocationProps = {
  event: any
  showDate?: boolean
  color?: string
}

const CalEventLocation: React.FC<CalEventLocationProps> = ({
  event,
  showDate,
  color,
}) => {
  let date

  if (showDate) {
    date = event.frontmatter.date
  } else {
    date = ""
  }

  //let time = formatTime(event)

  return (
    <AltView size="lg">
      <div
        className={`mt-4 text-sm w-full ${
          color === "white" ? "text-white" : "text-gray-500"
        }`}
      >
        <Row
          isVCentered={true}
          isMobile={true}
          className="mt-4 text-gray-500 hover:text-default-blue trans-ani"
        >
          <div className="text-center w-8 mr-2">
            <FontAwesomeIcon icon={["far", "clock"]} className={`text-2xl`} />
          </div>
          <div>
            {showDate && <div>{date}</div>}
            <div>
              {`${event.frontmatter.startTime} - ${event.frontmatter.endTime}`}
              {/* {`${event.frontmatter.startTime}`} */}
            </div>
          </div>
        </Row>
        <Row
          isVCentered={true}
          className="mt-2 text-gray-500 hover:text-default-blue trans-ani"
          isMobile={true}
        >
          <div className="text-center w-8 mr-2">
            <FontAwesomeIcon icon="map-marker-alt" className={`text-2xl`} />
          </div>
          <div>{event.frontmatter.location}</div>
        </Row>
      </div>

      <div
        className={`w-full text-sm mt-6 ${
          color === "white" ? "text-white" : "text-gray-500"
        }`}
      >
        <Row className="items-start mt-4">
          <Row className="text-gray-500 trans-ani w-1/2">
            <FontAwesomeIcon
              icon={["far", "clock"]}
              className={`text-2xl mr-2`}
            />
            <div>
              {showDate && <div>{date}</div>}
              {`${event.frontmatter.startTime} - ${event.frontmatter.endTime}`}
            </div>
          </Row>
          <Row className="text-gray-500 trans-ani w-1/2">
            <FontAwesomeIcon
              icon="map-marker-alt"
              className={`text-2xl mr-2`}
            />
            <div>{event.frontmatter.location}</div>
          </Row>
        </Row>
      </div>
    </AltView>
  )
}

export default CalEventLocation

CalEventLocation.defaultProps = {
  showDate: false,
  color: "blue",
}
