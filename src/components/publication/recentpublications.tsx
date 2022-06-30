/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
//import Button from "../../components/button"
//import PublicationYears from "./publicationyears"
import BasePublicationList from "./basepublicationlist"
import Row from "../row"
import PublicationList from "./publicationlist"
import NoResults from "../noresults"
import BlueButton from "../buttons/bluebutton"

type RecentPublicationsProps = {
  publications: Array<any>
  showAbstract?: boolean
  top?: number
  showCount?: boolean
  showMoreButton?: boolean
  showIndices?: boolean
  className?: string
  baseMode?: boolean
  onPubClick?: any
  onShowMoreClick?: any
  recordsPerPage?: any
}

const RecentPublications: React.FC<RecentPublicationsProps> = ({
  publications,
  showAbstract,
  top,
  showCount,
  showMoreButton,
  showIndices,
  baseMode,
  className,
  onPubClick,
  onShowMoreClick,
}) => {
  const [filteredPublications, setFilteredPublications] = useState<Array<any>>(
    []
  )
  const [recordsPerPage, setRecordsPerPage] = useState(-1)

  const { strings } = useSiteMetadata()

  useEffect(() => {
    updatePublications()
  }, [])

  useEffect(() => {
    if (recordsPerPage != top) {
      setRecordsPerPage(top)
    } else {
      updatePublications()
    }
  }, [publications])

  useEffect(() => {
    updatePublications()
  }, [recordsPerPage])

  const updatePublications = () => {
    setFilteredPublications(publications.slice(0, recordsPerPage))
  }

  const handleShowMoreClick = (e: any) => {
    setRecordsPerPage(2 * recordsPerPage)
  }

  return (
    <>
      {publications.length > 0 && showCount && (
        <Row isVCentered={true} className="justify-between mb-8">
          <div>
            {/* {`Showing ${Math.min(
              filteredPublications.length,
              recordsPerPage
            )} of ${publications.length} ${
              filteredPublications.length > 1 ? "publications" : "publication"
            }`} */}

            {`${publications.length} ${
              publications.length !== 1 ? "results" : "result"
            }`}
          </div>
        </Row>
      )}

      <div className={`${className}`}>
        {filteredPublications.length > 0 ? (
          baseMode ? (
            <BasePublicationList
              publications={filteredPublications}
              showAbstract={showAbstract}
              onPubClick={onPubClick}
              showIndices={showIndices}
            />
          ) : (
            <PublicationList
              publications={filteredPublications}
              showAbstract={showAbstract}
              onPubClick={onPubClick}
              showIndices={showIndices}
            />
          )
        ) : (
          <NoResults text="No publications found." />
        )}
      </div>

      {(recordsPerPage < publications.length || showMoreButton) && (
        <Row isCentered={true} className="mt-8">
          <div>
            <BlueButton onClick={onShowMoreClick}>
              {strings.showMore}
            </BlueButton>
          </div>
        </Row>
      )}
    </>
  )
}

RecentPublications.defaultProps = {
  top: 15,
  showCount: true,
  className: "",
  showAbstract: true,
  showMoreButton: false,
  showIndices: false,
  onPubClick: null,
  baseMode: true,
}

export default RecentPublications
