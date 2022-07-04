import React from "react"
import NoResults from "../noresults"
import AllNews from "./allnews"

type ResultsProps = {
  news: any[]
  pagedNews: any[]
  page: number
  recordsPerPage: number
  onPageChanged?: any
}

const NewsResults = ({
  news,
  pagedNews,
  page,
  recordsPerPage = 20,
  onPageChanged,
}: ResultsProps) => (
  <div className="w-full">
    {/* <SearchSummary
          count={events.length}
          single="Event"
          plural="Events"
        /> */}

    {pagedNews.length > 0 ? (
      <AllNews items={pagedNews} />
    ) : (
      <NoResults text="No awards found." />
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

export default NewsResults
