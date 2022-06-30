import React, { useRef, useState } from "react"
import Row from "../row"
import pubmedsvg from "../../../public/assets/images/svg/pubmed.svg"
import BaseLink from "./baselink"

// `https://pubmed.ncbi.nlm.nih.gov/?term=${person.frontmatter.lastName}+${person.frontmatter.firstName}%5BAuthor%5D&sort=pubdate`

const getLink = (person: any): string =>
  `https://pubmed.ncbi.nlm.nih.gov/?term=(${person.frontmatter.lastName}+${person.frontmatter.firstName[0]}[Author])+AND+(Columbia+University[Affiliation])&sort=pubdate`

type PubMedLinkProps = {
  person: any
}

const PubMedLink: React.FC<PubMedLinkProps> = ({ person }) => {
  const [hover, setHover] = useState(false)
  const imgEl = useRef(null)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  let url: string

  if (person.frontmatter.pubmed !== null) {
    url = person.frontmatter.pubmed
  } else {
    url = getLink(person)
  }

  return (
    <Row isCentered={true} className="mt-16">
      <div className="mr-4 my-2">See more on</div>
      <div>
        <BaseLink to={url}>
          <img
            alt="PubMed logo"
            src={pubmedsvg}
            className="w-32 ani-t"
            ref={imgEl}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
              filter: `grayscale(${hover ? "0" : "0.2"}) opacity(${
                hover ? "1" : "0.8"
              })`,
            }}
          />
        </BaseLink>
      </div>
    </Row>
  )
}

export default PubMedLink
