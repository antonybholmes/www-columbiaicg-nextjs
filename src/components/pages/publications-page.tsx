import Container from "../container"
import { PUBLICATIONS_PATH, TEXT_SHOW_MORE } from "../../constants"
import useTopJournals from "../../hooks/topjournals"
import { ReactNode, useEffect, useState } from "react"
import useBooleanSearch from "../../hooks/booleansearch"
import { SideContactCard } from "../side-contact-card"
import useInstitutePublications from "../../hooks/institutepublications"
import useFirstAuthorPublications from "../../hooks/firstauthorpublications"
import useJournalPublications from "../../hooks/journalpublications"
import useSortPublications from "../../hooks/sortpublications"
import useTopPubs from "../../hooks/toppubs"
import PageLayout from "../../layouts/pagelayout"
import FlHdDiv from "../flhddiv"
import SearchBar5 from "../search/searchbar5"
import Row from "../row"
import ShowSmall from "../showsmall"
import MainSideCol from "../mainsidecol"
import SortOrderDropdown from "../publication/sortbydropdown"
import BlueButton from "../buttons/bluebutton"
import PubMedLink from "../buttons/pubmedlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import JournalFilter from "../publication/journalfilter"
import CheckBox from "../buttons/checkbox"
import SortOrder from "../publication/sortby"

import {
  faArrowDownShortWide,
  faArrowUpShortWide,
} from "@fortawesome/free-solid-svg-icons"
import Publications from "../publication/publications"

const EMPTY_QUERY = ""

const RECORDS_PER_PAGE = [25, 50, 100, 200, 500, 1000]

const TOP_PUBS = 5

const searchAuthors = (q: string, publication: any) => {
  for (let author of publication.authorList) {
    if (author.toLowerCase().includes(q)) {
      return true
    }
  }

  return false
}

export const search = (query: any, publications: Array<any>): Array<any> => {
  let ret: any = []

  let ql = query.text.toLowerCase()

  for (let publication of publications) {
    let found = false

    switch (query.field) {
      case "author":
        found = searchAuthors(ql, publication)
        break
      case "journal":
        found = publication.journal.toLowerCase() === ql
        break
      case "year":
        found = publication.year.toString() === ql
        break
      case "pmid":
        found = publication.pmid.toString() === ql
        break
      case "pmcid":
        found = publication.pmcid.toString() === ql
        break
      default:
        found = publication.pmid.toLowerCase().includes(ql)

        if (!found) {
          // try pmcid
          found = publication.pmcid.toLowerCase().includes(ql)
        }

        if (!found) {
          /// try journal
          found = publication.title.toLowerCase().includes(ql)
        }

        if (!found) {
          // try journal
          found = publication.journal.toLowerCase().includes(ql)
        }

        if (!found) {
          // try authors
          found = searchAuthors(ql, publication)
        }

        if (!found) {
          //try people
          for (let person of publication.peopleList) {
            if (person.toLowerCase().includes(ql)) {
              found = true
              break
            }
          }
        }

        if (!found) {
          // try year
          found = publication.year.toString().includes(ql)
        }

        break
    }

    if (found) {
      ret.push(publication)
    }
  }

  return ret
}

const booleanSearchAnd = (s1: any, s2: any): any => {
  const titles: Set<any> = new Set()

  s2.map((publication: any) => {
    titles.add(publication.title)
  })

  return s1.filter((publication: any) => {
    return titles.has(publication.title)
  })
}

const booleanSearchOr = (s1: any, s2: any): any => {
  const pubMap: any = {}

  s1.map((publication: any) => {
    if (!(publication.year in pubMap)) {
      pubMap[publication.year] = {}
    }

    if (!(publication.month in pubMap[publication.year])) {
      pubMap[publication.year][publication.month] = {}
    }

    pubMap[publication.year][publication.month][publication.title] = publication
  })

  s2.map((publication: any) => {
    if (!(publication.year in pubMap)) {
      pubMap[publication.year] = {}
    }

    if (!(publication.month in pubMap[publication.year])) {
      pubMap[publication.year][publication.month] = {}
    }

    if (!(publication.title in pubMap[publication.year][publication.month])) {
      pubMap[publication.year][publication.month][publication.title] =
        publication
    }
  })

  const ret = []

  for (let year of Object.keys(pubMap).sort().reverse()) {
    for (let month of Object.keys(pubMap[year]).sort().reverse()) {
      for (let title of Object.keys(pubMap[year][month])) {
        ret.push(pubMap[year][month][title])
      }
    }
  }

  return ret
}

type SidePanelProps = {
  title?: string
  className?: string
  children?: ReactNode
}

const SidePanel = ({ title = "", className, children }: SidePanelProps) => (
  <SideContactCard title={title} className={`mb-12 ${className}`}>
    {children}
  </SideContactCard>
)

interface Props {
  publications: any[]
}

const PublicationsPage = ({ publications = [] }: Props) => {
  const person = null

  const [query, setQuery] = useState<string>(EMPTY_QUERY)
  const [sortOrder, setSortOrder] = useState<string>("Publication date")
  const [topPubs, setTopPubs] = useState<Array<[string, number]>>([])
  const [journals, setJournals] = useState<Array<[string, number]>>([])
  const [selectedJournals, setSelectedJournals] = useState<Set<string>>(
    new Set<string>()
  )
  const [showAbstract, setShowAbstracts] = useState(false)
  const [selected, setSelected] = useState(false)
  const [instituteOnly, setInstituteOnly] = useState(true)
  const [firstAuthorOnly, setFirstAuthorOnly] = useState(true) //id === "all")
  const [descending, setDescending] = useState(true)

  const [filteredPublications, setFilteredPublications] = useState<Array<any>>(
    []
  )

  const [pagePublications, setPagePublications] = useState<Array<any>>([])

  const [page, setPage] = useState<number>(1)

  const [recordsPerPageIndex, setRecordsPerPageIndex] = useState(0)

  const [recordsPerPage, setRecordsPerPage] = useState(0)

  useEffect(() => {
    setJournals(useTopJournals(publications))
  }, [publications])

  useEffect(() => {
    setRecordsPerPage(RECORDS_PER_PAGE[recordsPerPageIndex])
  }, [recordsPerPageIndex])

  useEffect(() => {
    if (query !== "") {
      updateFilteredPublications(
        useBooleanSearch(
          query,
          publications,
          search,
          booleanSearchAnd,
          booleanSearchOr
        )
      )
    } else {
      resetFilteredPublications()
    }
  }, [
    query,
    publications,
    selected,
    instituteOnly,
    firstAuthorOnly,
    sortOrder,
    descending,
    recordsPerPage,
    selectedJournals,
  ])

  const resetFilteredPublications = () => {
    updateFilteredPublications(publications)
  }

  const updateFilteredPublications = (publications: any[]) => {
    let pubs = publications

    if (instituteOnly) {
      pubs = useInstitutePublications(pubs)
    }

    if (firstAuthorOnly) {
      pubs = useFirstAuthorPublications(pubs)
    }

    if (selectedJournals.size > 0) {
      pubs = useJournalPublications(pubs, selectedJournals)
    }

    pubs = useSortPublications(pubs, sortOrder, descending)

    setFilteredPublications(pubs)

    setPagePublications(pubs.slice(0, recordsPerPage))

    setTopPubs(useTopPubs(pubs, TOP_PUBS))
  }

  const handleSearch = (text: string, clicked: boolean) => {
    if (clicked) {
      setQuery(text)
    }
  }

  const handleSortChange = (value: string) => {
    setSortOrder(value)
  }

  const handlePerPageChange = (value: string) => {
    setRecordsPerPageIndex(parseInt(value))
  }

  const handleSelectedChange = (selected: boolean) => {
    setSelected(selected)
  }

  const handleShowAbstractsChange = (selected: boolean) => {
    setShowAbstracts(selected)
  }

  const handleInstituteOnlyChange = (selected: boolean) => {
    setInstituteOnly(selected)
  }

  const handleFirstAuthorOnlyChange = (selected: boolean) => {
    setFirstAuthorOnly(selected)
  }

  const onPageChanged = (data: any) => {
    const { page } = data
    setPage(page)
  }

  const handleShowMoreClick = (e: any) => {
    // Increment to a different threshold each time
    setRecordsPerPageIndex(
      Math.min(recordsPerPageIndex + 1, RECORDS_PER_PAGE.length - 1)
    )
  }

  const handleJournalClick = (journal: string, selected: boolean) => {
    let sj = new Set(selectedJournals)

    if (selected) {
      sj.add(journal)
    } else {
      sj.delete(journal)
    }

    setSelectedJournals(sj)
  }

  return (
    <PageLayout
      title={"Publications"}
      path={"/research-areas/publications"}
      crumbs={[["Publications", PUBLICATIONS_PATH]]}
      nav={"Publications"}
    >
      <FlHdDiv>
        <Container>
          <MainSideCol>
            <div>
              <SearchBar5
                onSearch={handleSearch}
                placeholder="Search publications..."
                text={query}
              />

              <ShowSmall size="xl" className="mt-4">
                {/* <FlatCard autoHide={false}> */}
                {pagePublications.length > 0 && (
                  <Row className="justify-between">
                    <Row isVCentered={true} className="mr-4">
                      <div className="mr-4">Sort by:</div>
                      <div>
                        <SortOrderDropdown
                          onChange={handleSortChange}
                          sortBy={sortOrder}
                        />
                      </div>
                    </Row>

                    {/* <div>{`${filteredPublications.length} ${
                  filteredPublications.length !== 1 ? "results" : "result"
                }`}</div> */}
                  </Row>
                )}
              </ShowSmall>

              <p className="text-gray-400 my-8">
                {`${filteredPublications.length} ${
                  filteredPublications.length !== 1 ? "results" : "result"
                }`}
              </p>

              <Publications
                publications={pagePublications}
                showAbstract={showAbstract}
                onPubClick={handleJournalClick}
                showCount={false}
                baseMode={true}
                showMoreButton={false}
              />

              {filteredPublications.length > recordsPerPage && (
                <Row isCentered={true} className="mt-8 mb-8 md:mb-0">
                  <BlueButton onClick={handleShowMoreClick}>
                    {TEXT_SHOW_MORE}
                  </BlueButton>
                </Row>
              )}

              {person !== null && <PubMedLink person={person} />}
            </div>

            <div className="ml-10">
              <SidePanel>
                <h5 className={`mb-2`}>Sort</h5>
                <SortOrder onChange={handleSortChange} selected={sortOrder} />

                <Row className="mt-4">
                  <button
                    onClick={() => setDescending(true)}
                    className={`w-8 h-8 rounded trans-ani ${
                      descending
                        ? "bg-cuimc-button-blue-70 text-white"
                        : "border border-solid border-transparent hover:border-cuimc-button-blue-70"
                    }`}
                  >
                    <FontAwesomeIcon icon={faArrowDownShortWide} />
                  </button>

                  <button
                    onClick={() => setDescending(false)}
                    className={`w-8 h-8 rounded trans-ani ${
                      !descending
                        ? "bg-cuimc-button-blue-70 text-white"
                        : "border border-solid border-transparent hover:border-cuimc-button-blue-70"
                    }`}
                  >
                    <FontAwesomeIcon icon={faArrowUpShortWide} />
                  </button>
                </Row>

                {/* <TopPubs topPubs={topPubs} onPubClick={handlePubClick} /> */}
                <JournalFilter
                  journals={journals}
                  selected={selectedJournals}
                  onClick={handleJournalClick}
                />

                {/* </div> */}

                <ul className="block text-sm border-t border-solid border-gray-200 pt-4 mt-8">
                  <li>
                    <CheckBox
                      selected={instituteOnly}
                      onChange={handleInstituteOnlyChange}
                    >
                      Institute only
                    </CheckBox>
                  </li>
                  <li>
                    <CheckBox
                      selected={firstAuthorOnly}
                      onChange={handleFirstAuthorOnlyChange}
                    >
                      First authors only
                    </CheckBox>
                  </li>
                  <li>
                    <CheckBox
                      selected={showAbstract}
                      onChange={handleShowAbstractsChange}
                    >
                      Show abstracts
                    </CheckBox>
                  </li>
                </ul>
              </SidePanel>
            </div>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </PageLayout>
  )
}

export default PublicationsPage
