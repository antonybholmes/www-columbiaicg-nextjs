import { useRef, useState } from "react"
import BaseImage from "../images/base-image"
import Row from "../row"
import BaseLink from "./baselink"

// `https://pubmed.ncbi.nlm.nih.gov/?term=${person.fields.lastName}+${person.fields.firstName}%5BAuthor%5D&sort=pubdate`

const getLink = (person: any): string =>
  `https://pubmed.ncbi.nlm.nih.gov/?term=(${person.fields.lastName}+${person.fields.firstName[0]}[Author])+AND+(Columbia+University[Affiliation])&sort=pubdate`

type PubMedLinkProps = {
  person: any
}

const PubMedLink = ({ person }: PubMedLinkProps) => {
  const [hover, setHover] = useState(false)
  const imgEl = useRef(null)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  let url: string

  if (person.fields.pubmed !== null) {
    url = person.fields.pubmed
  } else {
    url = getLink(person)
  }

  return (
    <Row isCentered={true} className="mt-16">
      <div className="mr-4 my-2">See more on</div>
      <div>
        <BaseLink to={url}>
          <BaseImage
            alt="PubMed logo"
            src="/svg/pubmed.svg"
            className="w-32 ani-t"
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
