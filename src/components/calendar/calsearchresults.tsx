import React from "react"
import NoResults from "../noresults"
import CalEvents from "./calevents"

type ResultsProps = {
  events: any[]
  pagedEvents: any[]
}

const CalSearchResults: React.FC<ResultsProps> = ({ events, pagedEvents }) => (
  <div className="w-full">
    {/* <SearchSummary
          count={events.length}
          single="Event"
          plural="Events"
        /> */}

    {events.length > 0 ? (
      <CalEvents calEvents={pagedEvents} />
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

export default CalSearchResults
