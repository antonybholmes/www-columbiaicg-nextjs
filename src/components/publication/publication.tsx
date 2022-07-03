/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import BasePublication from "./basepublication"
import FlatCard from "../flatcard"

const renderCard = (
  breakpoint: string,
  publication: any,
  index: number,
  onPubClick: any,
  showAbstract: boolean,
  onClick: any
) => {
  switch (breakpoint) {
    case "sm":
    case "md":
      return (
        <div className="mb-8">
          <BasePublication
            publication={publication}
            index={index}
            showAbstract={showAbstract}
            onPubClick={onClick}
          />
        </div>
      )
    default:
      return (
        <FlatCard>
          <BasePublication
            publication={publication}
            index={index}
            showAbstract={showAbstract}
            onPubClick={onPubClick}
          />
        </FlatCard>
      )
  }
}

type PublicationProps = {
  publication: any
  index: number
  maxAuthors?: number
  showAbstract?: boolean
  onPubClick?: any
  bg?: string
}

const Publication: React.FC<PublicationProps> = ({
  publication,
  index,
  maxAuthors,
  showAbstract,
  onPubClick,
  bg,
}) => {
  // let groups = []

  // for (let group of publication.groups) {
  //   groups.push([group.fields.id, group.fields.name])
  // }

  const _handleJournalClick = (journal: string) => {
    if (onPubClick !== null) {
      onPubClick(journal)
    }
  }

  // return renderCard(
  //   breakpoint,
  //   publication,
  //   index,
  //   showAbstract,
  //   onPubClick,
  //   _handleJournalClick
  // )

  return (
    // <OutlineCard autoHide={false} bg={bg}>
    <FlatCard autoHide={false} bg={bg}>
      <BasePublication
        publication={publication}
        index={index}
        showAbstract={showAbstract}
        onPubClick={onPubClick}
      />
    </FlatCard>
    // </OutlineCard>
  )
}

Publication.defaultProps = {
  index: -1,
  maxAuthors: -1,
  onPubClick: null,
  showAbstract: true,
  bg: "bg-white",
}

export default Publication
