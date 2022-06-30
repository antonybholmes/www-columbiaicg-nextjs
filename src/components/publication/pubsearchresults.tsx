import React from "react"
import NoResults from "../noresults"
import PublicationList from "./publicationlist"

type PubSearchResultsProps = {
  publications: Array<any>
  pagedPublications: Array<any>
  page: number
  recordsPerPage: number
  onPageChanged?: any
  showLabLink?: boolean
  onPubClick?: any
}

const PubSearchResults: React.FC<PubSearchResultsProps> = ({
  publications,
  pagedPublications,
  page,
  recordsPerPage,
  onPageChanged,
  showLabLink,
  onPubClick,
}) => {
  return (
    <div>
      {publications.length > 0 ? (
        <>
          {/* <div className="mb-8">
            <Pagination
              page={page}
              totalRecords={publications.length}
              recordsPerPage={recordsPerPage}
              onPageChanged={onPageChanged}
            />
          </div> */}

          {/* <PublicationYears
            publications={pagedPublications}
            showLabLink={showLabLink}
            onPubClick={onPubClick}
          /> */}
          {/* 
          <PublicationGroups
            publications={pagedPublications}
            showLabLink={showLabLink}
            onPubClick={onPubClick}
          /> */}

          <PublicationList
            publications={pagedPublications}
            showLabLink={showLabLink}
            onPubClick={onPubClick}
            showIndices={false}
          />

          {/* <Pagination
            page={page}
            pageNeighbors={1}
            totalRecords={publications.length}
            recordsPerPage={recordsPerPage}
            onPageChanged={onPageChanged}
          /> */}
        </>
      ) : (
        <NoResults text="No publications found." />
      )}
    </div>
  )
}

PubSearchResults.defaultProps = {
  showLabLink: false,
  onPageChanged: null,
  onPubClick: null,
}

export default PubSearchResults
