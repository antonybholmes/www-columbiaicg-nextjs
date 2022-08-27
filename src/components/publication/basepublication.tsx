import React, { useRef, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Row from "../row"
import ColorLink from "../buttons/colorlink"
import FullDiv from "../fulldiv"

const friendlyUrl = (url: string) => {
  return url
    .replace(/http[s]?/, "")
    .replace("://", "")
    .replace(/\/$/, "")
    .replace(/\//g, " > ")
}

type FriendlyUrlProps = {
  url: string
}

export const FriendlyUrl: React.FC<FriendlyUrlProps> = ({ url }) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  const parts = url
    .replace(/http[s]?/, "")
    .replace("://", "")
    .replace(/\/$/, "")
    .split("/")

  const ret: any[] = []

  parts.map((part: string, index: number) => {
    ret.push(
      <div
        className={`trans-ani ${
          hover ? "text-blue-500" : index > 0 ? "text-slate-500" : ""
        }`}
        key={index}
      >
        {part}
      </div>
    )

    if (index < parts.length - 1) {
      ret.push(
        <FontAwesomeIcon
          icon="angle-right"
          className={`mx-1 trans-ani ${
            hover ? "text-blue-500" : "text-slate-500"
          }`}
          key={`sep-${index}`}
        />
      )
    }
  })

  return (
    <ColorLink to={url}>
      <Row onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        {ret}
      </Row>
    </ColorLink>
  )
}

interface AbstractProps {
  publication: any
  maxWords?: number
}

const Abstract = ({ publication, maxWords = 32 }: AbstractProps) => {
  const [expanded, setExpanded] = useState(false)
  const [words, setWords] = useState(publication.abstract.split(" "))

  return (
    <>
      <div className={`relative text-sm mt-2 trans-ani`}>
        <p
          className={`cursor-pointer trans-ani hover:text-cuimc-button-blue ${
            expanded ? "" : "truncate"
          }`}
          onClick={() => setExpanded(!expanded)}
        >
          {publication.abstract}
        </p>

        {/* {!expanded && (
          <Row
            isCentered={true}
            className="absolute bottom-0 w-full h-full cursor-pointer hover:text-blue-500 trans-ani"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.9) 40%, rgba(255,255,255,1) 100%)",
            }}
            onClick={() => setExpanded(true)}
          >
            <div>
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </Row>
        )} */}
      </div>

      {/* <Row
        isCentered={true}
        className="w-full cursor-pointer hover:text-blue-500 trans-ani"
        onClick={() => setExpanded(!expanded)}
      >
        <div>
          <FontAwesomeIcon icon={expanded ? "chevron-up" : "chevron-down"} />
        </div>
      </Row> */}

      {/* <RightDiv className="text-sm mt-1">
        <button
          className="text-slate-500 hover:text-default-blue trans-ani"
          onClick={() => setExpanded(!expanded)}
        >{`Read ${expanded ? "less" : "more"}`}</button>
      </RightDiv> */}
    </>
  )
}

/**
 * Format author list into string.
 *
 * @param {*} authors
 * @param {int} maxAuthors
 */
const authorString = (authors: any[], maxAuthors: number = 10) => {
  const strs = []

  if (authors.length <= maxAuthors || maxAuthors === -1) {
    for (const author of authors) {
      strs.push(author) //.lastName + " " + author.initials)
    }
  } else {
    for (let i = 0; i < 3; ++i) {
      strs.push(authors[i]) //.lastName + " " + authors[i].initials)
    }

    strs.push("...")

    const n = authors.length - 1
    strs.push(authors[n]) //.lastName + " " + authors[n].initials)
  }

  let ret = strs.join(", ")
  ret = ret.replace(/, ([^,]+)$/, ", and $1")

  return ret
}

interface PubDataProps {
  text: string
  data: string
  onClick: any
  className?: string
}

const PubData = ({ text, data, onClick, className }: PubDataProps) => (
  <li className="block">
    <button
      className={`cursor-pointer font-light hover:text-cuimc-button-blue trans-ani ${className}`}
      onClick={() => onClick(data)}
    >
      {text}
    </button>
  </li>
)

const getAuthors = (authors: any[], maxAuthors: number = 10, onClick: any) => {
  const ret: any[] = []

  authors.map((author: string, index: number) => {
    ret.push(
      <PubData
        text={author}
        data={`"${author}"[author]`}
        onClick={onClick}
        key={`author-${index}`}
      />
    )

    if (index < authors.length - 1) {
      ret.push(
        // <li
        //   key={`sep-${index}`}
        //   className={`mr-1 ${index === authors.length - 2 ? "ml-1" : ""}`}
        // >
        //   {index === authors.length - 2 ? "and" : ","}
        // </li>

        <li
          key={`block sep-${index}`}
          className={`flex flex-row items-center mx-2 h-full`}
        >
          {/* <FontAwesomeIcon
            icon="circle"
            className="text-columbia-secondary-blue"
            style={{ fontSize: "0.25rem" }}
          /> */}
        </li>
      )
    }
  })

  //let ret = ret.join(", ")
  //ret = ret.replace(/, ([^,]+)$/, ", and $1")

  return <ul className="flex flex-row items-center flex-wrap">{ret}</ul>
}

export const pubmedUrl = (pubmed: number) => {
  return `https://pubmed.ncbi.nlm.nih.gov/${pubmed}/` //``https://www.ncbi.nlm.nih.gov/pubmed/?term=${pubmed}`
}

export const doiUrl = (doi: string) => {
  return `https://doi.org/${doi}`
}

type PubLinkProps = {
  name: string
  icon: any
  to: string
  className?: string
}

const PubLink = ({ name, icon, to, className }: PubLinkProps) => {
  const [hover, setHover] = useState(false)

  const iconEl = useRef(null)

  // useEffect(() => {
  //   gsap.timeline().to(
  //     iconEl.current,
  //     0.3,
  //     {
  //       x: hover ? "0.25rem" : 0,
  //       ease: "power3.inOut",
  //     },
  //     0
  //   )
  // }, [hover])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    <ColorLink to={to}>
      <Row
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={`trans-ani ${
          hover ? "text-default-blue" : "text-slate-400"
        } ${className}`}
      >
        <div className="mr-1">{name}</div>
        <div ref={iconEl}>
          <FontAwesomeIcon icon={icon} className={`text-lg`} />
        </div>
      </Row>
    </ColorLink>
  )
}

type LinkProps = {
  publication: any
}

const PubMedLink = ({ publication }: LinkProps) => (
  <PubLink
    name="pmid"
    icon="external-link-alt"
    to={pubmedUrl(publication.pmid)}
  />
)

const GoogleScholarLink = ({ publication }: LinkProps) => (
  <PubLink
    name="Google Scholar"
    icon="external-link-alt"
    to={`https://scholar.google.com/scholar?hl=en&as_sdt=0%2C33&q=${publication.title}`}
    className="ml-4"
  />
)

type BasePublicationProps = {
  publication: any
  index?: number
  onPubClick?: any
  showAbstract?: boolean
  showUrl?: boolean
  showDOI?: boolean
}

const BasePublication = ({
  publication,
  index = -1,
  showAbstract = true,
  showUrl = false,
  showDOI = true,
  onPubClick,
}: BasePublicationProps) => {
  const _handlePubClick = (journal: string) => {
    if (onPubClick !== null) {
      onPubClick(journal)
    }
  }

  let url

  if (publication.url !== "") {
    url = publication.url
  } else if (publication.doi !== "") {
    url = doiUrl(publication.doi)
  } else if (publication.pmid !== "") {
    url = pubmedUrl(publication.pmid)
  } else {
    url = ""
  }

  return (
    <Row isVCentered={false}>
      {index !== -1 && (
        <div className="w-6 text-default-gray font-light text-sm text-right mr-4 mt-1">
          {/* <h4 className="text-cuimc-button-blue-50 text-left">{index}.</h4> */}
          {index}
        </div>
      )}
      <FullDiv>
        {url !== "" ? (
          <div>
            {showUrl && <FriendlyUrl url={url} />}

            <h3 className="m-0">
              <ColorLink color="blue" to={url}>
                {publication.title}
              </ColorLink>
            </h3>
          </div>
        ) : (
          <h4 className="m-0 font-medium">{publication.title}</h4>
        )}

        <section className="font-light text-sm m-0">
          {onPubClick !== null
            ? getAuthors(publication.authorList, -1, _handlePubClick)
            : publication.authors}
        </section>

        {/* <Row> */}
        <Row wrap={true}>
          {onPubClick !== null ? (
            <ul className="flex flex-row flex-wrap">
              <PubData
                text={`${publication.journal}.`}
                data={`"${publication.journal}"[journal]`}
                onClick={_handlePubClick}
                className="text-sm mr-1"
              />
              {publication.year !== -1 && (
                <PubData
                  text={`${publication.year.toString()}.`}
                  data={`${publication.year.toString()}[year]`}
                  onClick={_handlePubClick}
                  className="text-sm mr-1"
                />
              )}
              {/* {publication.tagList.includes("In Press") && (
              <div className="text-sm mr-1">{`In Press.`}</div>
            )} */}
            </ul>
          ) : (
            <>
              <div className="text-sm mr-1">{`${publication.journal}.`}</div>
              {publication.year !== -1 && (
                <div className="text-sm mr-1">{`${publication.year.toString()}.`}</div>
              )}
              {/* {publication.tagList.includes("In Press") && (
              <div className="text-sm mr-1">{`In Press.`}</div>
            )} */}
            </>
          )}
        </Row>

        {/* {publication.pmcid !== "" && (
          <div className="mr-4">{`PMCID: ${publication.pmcid}`}</div>
        )} */}
        {showDOI && publication.doi !== "" && (
          // <Row className="text-sm">
          <div className="w-1/3 text-default-green text-sm">
            {`DOI: `}
            <ColorLink color="green" to={doiUrl(publication.doi)}>
              {publication.doi}
            </ColorLink>
          </div>
          // </Row>
        )}
        {publication.pmid !== "" && (
          //<Row className="text-sm">
          <div className="w-1/5 text-default-green text-sm">
            {`PMID: `}
            <ColorLink color="green" to={pubmedUrl(publication.pmid)}>
              {publication.pmid}
            </ColorLink>
          </div>
          //</Row>
        )}
        {publication.isbn !== "" && (
          //<Row className="text-sm">
          <div className="w-1/3 text-default-green text-sm">
            {publication.isbn}
          </div>
          //</Row>
        )}

        {/* <Row w="1/2">
        {publication.groups.length > 0 && showLabLink && (
          <div className="md:text-right">
            <BlueLink
              to={`/research-areas/labs/${publication.groups[0].fields.id}`}
            >
              {publication.groups[0].fields.name}
            </BlueLink>
          </div>
        )}
      </Row> */}
        {/* </Row> */}

        {showAbstract && publication.abstract !== "" && (
          // <Row className="text-columbia-secondary-blue-90 items-center">
          //   <PubMedLink publication={publication} />

          //   <GoogleScholarLink publication={publication} />
          // </Row>

          <Abstract publication={publication} />
        )}
      </FullDiv>
    </Row>
  )
}

export default BasePublication
