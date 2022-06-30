import React, { useState } from "react"
import PublicationYears from "./publicationyears"
import Pagination from "../pagination"
import SearchBar from "../search/searchbar"
import HideSmall from "../hidesmall"
import YearSelector from "../filter/yearselector"

const EMPTY_QUERY = ""

type SimplePubSearchProps = {
  allPublications: Array<any>
  showSearch?: boolean
  showYears?: boolean
  sectionMode?: string
  showLabLink?: boolean
}

const SimplePubSearch: React.FC<SimplePubSearchProps> = ({
  allPublications,
  showSearch,
  showYears,
  showLabLink,
}) => {
  const [query, setQuery] = useState(EMPTY_QUERY)
  const [filteredPublications, setFilteredPublications] = useState([])
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(20)
  const [filterYears, setFilterYears] = useState([])

  const handleInputChange = e => {
    const q = e.target.value
    const ret = []

    for (const publication of allPublications) {
      if (publication.title.toLowerCase().includes(q.toLowerCase())) {
        ret.push(publication)
      }
    }

    // update state according to the latest query and results
    setQuery(q)
    setFilteredPublications(ret)
    setPage(1)
  }

  const onPageChanged = (data: any) => {
    const { page } = data
    setPage(page)
  }

  const handleClick = (data: any) => {
    setFilterYears(data)
    setPage(1)
  }

  const hasSearchResults = query !== EMPTY_QUERY
  const publications = hasSearchResults ? filteredPublications : allPublications

  let yearFilteredPublications: Array<any>

  if (filterYears.length > 0 && filterYears[0] !== "All") {
    yearFilteredPublications = publications.filter(publication => {
      return filterYears.includes(publication.year)
    })
  } else {
    yearFilteredPublications = publications
  }

  const offset = (page - 1) * recordsPerPage
  const pagedPublications = yearFilteredPublications.slice(
    offset,
    offset + recordsPerPage
  )

  return (
    <>
      {showSearch && (
        <SearchBar
          handleInputChange={handleInputChange}
          className="my-4 sm:w-1/2 mx-auto"
          placeholder="Search publications..."
          text={query}
        />
      )}

      {showYears && (
        <HideSmall>
          <Row isVCentered={true} isCentered={true}>
            <div>
              <YearSelector onClick={handleClick} />
            </div>
          </Row>
        </HideSmall>
      )}

      {/* <SearchSummary
        count={yearFilteredPublications.length}
        single="Publication"
        plural="Publications"
      /> */}

      <PublicationYears
        publications={pagedPublications}
        showLabLink={showLabLink}
      />

      <Pagination
        page={page}
        totalRecords={yearFilteredPublications.length}
        recordsPerPage={recordsPerPage}
        pageNeighbours={1}
        onPageChanged={onPageChanged}
      />
    </>
  )
}

SimplePubSearch.defaultProps = {
  showLabLink: true,
  showSearch: false,
  sectionMode: "main",
  showYears: false,
}

export default SimplePubSearch
