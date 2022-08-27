/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useState } from "react"
import BasePublicationList from "./basepublicationlist"
import Row from "../row"
import TealButton from "../buttons/tealbutton"
import { TEXT_SHOW_MORE } from "../../constants"

const RECORDS_PER_PAGE = 25

type RecentPublicationsProps = {
  publications: any[]
  showAbstract: boolean
  top?: number
  showCount?: boolean
  className?: string
  onPubClick?: any
}

const BaseRecentPublications: React.FC<RecentPublicationsProps> = ({
  publications,
  showAbstract,
  top = 15,
  showCount,
  className,
  onPubClick,
}) => {
  const [filteredPublications, setFilteredPublications] = useState<any[]>([])
  const [recordsPerPage, setRecordsPerPage] = useState(-1)

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
        <BasePublicationList
          publications={filteredPublications}
          showAbstract={showAbstract}
          onPubClick={onPubClick}
        />
      </div>

      {recordsPerPage < publications.length && (
        <Row isCentered={true} className="mt-8">
          <div>
            <TealButton onClick={handleShowMoreClick}>
              {TEXT_SHOW_MORE}
            </TealButton>
          </div>
        </Row>
      )}
    </>
  )
}

export default BaseRecentPublications
