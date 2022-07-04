import React from "react"
import NoResults from "../noresults"
import BaseCalEvents from "./basecalevents"
import CalEvents from "./calevents"

type ResultsProps = {
  events: Array<any>
  imageMap?: any
  pagedEvents: Array<any>
  page: number
  recordsPerPage: number
  onPageChanged?: any
}

const CalSearchResults: React.FC<ResultsProps> = ({
  events,
  imageMap,
  pagedEvents,
  page,
  recordsPerPage,
  onPageChanged,
}) => (
  <div className="w-full">
    {/* <SearchSummary
          count={events.length}
          single="Event"
          plural="Events"
        /> */}

    {events.length > 0 ? (
      <CalEvents calEvents={pagedEvents} imageMap={imageMap} />
    ) : (
      <NoResults text="No events found." />
    )}

    {/* <Pagination
      page={page}
      totalRecords={events.length}
      recordsPerPage={recordsPerPage}
      pageNeighbors={1}
      onPageChanged={onPageChanged}
    /> */}
  </div>
)

CalSearchResults.defaultProps = {
  imageMap: {},
  recordsPerPage: 20,
}

export default CalSearchResults
