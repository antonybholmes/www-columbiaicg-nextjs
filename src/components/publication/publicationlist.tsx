/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Publication from "./publication"

type PublicationListProps = {
  publications: Array<any>
  showIndices?: boolean
  showLabLink?: boolean
  showAbstract?: boolean
  onPubClick?: any
  bg?: string
}

// Space is only added to intermediate elements of the list so that
// wasted space at the bottom is removed

const PublicationList: React.FC<PublicationListProps> = ({
  publications,
  showIndices,
  showLabLink,
  showAbstract,
  onPubClick,
  bg,
}) => (
  <ul>
    {publications.map((publication: any, index: number) => (
      <li
        className={` ${index < publications.length - 1 ? "mb-4" : ""}`}
        key={index}
      >
        <Publication
          publication={publication}
          index={showIndices ? index + 1 : -1}
          onPubClick={onPubClick}
          showAbstract={showAbstract}
          bg={bg}
        />
      </li>
    ))}
  </ul>
)

PublicationList.defaultProps = {
  showLabLink: false,
  showIndices: false,
  showAbstract: true,
  onPubClick: null,
  bg: "bg-white",
}

export default PublicationList
