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
import FlatCard from "../flatcard"

const RECORDS_PER_PAGE = 25

type PublicationsProps = {
  publications: Array<any>
  showAbstract?: boolean
  showCount?: boolean
  showMoreButton?: boolean
  className?: string
  baseMode?: boolean
  onPubClick?: any
  onShowMoreClick?: any
}

const Publications: React.FC<PublicationsProps> = ({
  publications,
  showAbstract,
  showCount,
  showMoreButton,
  baseMode,
  className,
  onPubClick,
  onShowMoreClick,
}) => {

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

      {publications.length > 0 &&
        (baseMode ? (
          <BasePublicationList
            publications={publications}
            showAbstract={showAbstract}
            onPubClick={onPubClick}
          />
        ) : (
          <PublicationList
            publications={publications}
            showAbstract={showAbstract}
            onPubClick={onPubClick}
          />
        ))}

      {showMoreButton && (
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

Publications.defaultProps = {
  showCount: true,
  className: "",
  showAbstract: true,
  showMoreButton: false,
  onPubClick: null,
  baseMode: true,
}

export default Publications
