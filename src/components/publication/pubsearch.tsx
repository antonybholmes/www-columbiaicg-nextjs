import React, { useState } from "react"
import SearchBar from "../search/searchbar"
import YearsFilter from "./yearsfilter"
import Collapsible from "../collapsible"
import PubSearchResults from "./pubsearchresults"

const EMPTY_QUERY = ""

type PubSearchProps = {
  groupMap: any
  peopleMap: any
  allPublications: Array<any>
  showLabLink?: boolean
}

const PubSearch: React.FC<PubSearchProps> = ({
  groupMap,
  peopleMap,
  allPublications,
  showLabLink,
}) => {
  const [query, setQuery] = useState(EMPTY_QUERY)
  const [filteredPublications, setFilteredPublications] = useState([])
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(20)
  const [filterYears, setFilterYears] = useState(new Set())

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

  let yearFilteredPublications

  if (filterYears.size > 0) {
    yearFilteredPublications = publications.filter(publication => {
      return filterYears.has(publication.year)
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
    <MainSideCol>
      {/* <SmallColumn>
        <SearchBar handleInputChange={handleInputChange} />
      </SmallColumn> */}

      <PubSearchResults
        publications={yearFilteredPublications}
        pagedPublications={pagedPublications}
        page={page}
        recordsPerPage={recordsPerPage}
        showLabLink={showLabLink}
      />

      <>
        {/* <SideBar> */}
        <SearchBar handleInputChange={handleInputChange} />
        <Collapsible title="Year filter" height="auto">
          <YearsFilter publications={publications} handleClick={handleClick} />
        </Collapsible>
        {/* </SideBar> */}
      </>
    </MainSideCol>
  )
}

PubSearch.defaultProps = {
  showLabLink: false,
}

export default PubSearch
