import React from "react"
import NoResults from "../noresults"
import BasePublicationList from "./basepublicationlist"
//import SideBar from "../sidebar/sidebar"

type PubSearchResultsProps = {
  publications: Array<any>
  pagedPublications: Array<any>
  page: number
  recordsPerPage: number
  onPageChanged?: any
  showLabLink?: boolean
  onPubClick?: any
  showAbstract?: boolean
  breakpoint: string
}

const BasePubSearchResults: React.FC<PubSearchResultsProps> = ({
  publications,
  pagedPublications,
  page,
  recordsPerPage,
  onPageChanged,
  showLabLink,
  showAbstract,
  onPubClick,
  breakpoint,
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

          <BasePublicationList
            publications={pagedPublications}
            showLabLink={showLabLink}
            onPubClick={onPubClick}
            showIndices={false}
            breakpoint={breakpoint}
            showAbstract={showAbstract}
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

BasePubSearchResults.defaultProps = {
  showLabLink: false,
  showAbstract: false,
  onPageChanged: null,
  onPubClick: null,
}

export default BasePubSearchResults
