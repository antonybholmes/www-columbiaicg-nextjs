import Pagination from "../pagination"
import Jobs from "./jobs"
import NoResults from "../noresults"

type JobSearchResultsProps = {
  jobs: any[]
  pagedJobs: any[]
  page: number
  recordsPerPage: number
  onPageChanged?: any
}

const JobSearchResults = ({
  jobs,
  pagedJobs,
  page,
  recordsPerPage,
  onPageChanged,
}: JobSearchResultsProps) =>
  jobs.length > 0 ? (
    <div className="w-full">
      {/* <SearchSummary
          count={events.length}
          single="Event"
          plural="Events"
        /> */}

      <Jobs jobs={pagedJobs} />

      <Pagination
        page={page}
        totalRecords={jobs.length}
        recordsPerPage={recordsPerPage}
        pageNeighbors={1}
        onPageChanged={onPageChanged}
      />
    </div>
  ) : (
    <NoResults text="There are currently no open positions. Please try coming back here at a later date." />
  )

export default JobSearchResults
