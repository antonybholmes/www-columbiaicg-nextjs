import { useState, useEffect, useRef, ReactNode } from "react"
import Container from "../../../components/container"
import ShowSmall from "../../../components/showsmall"
import HideSmall from "../../../components/hidesmall"
import useImageMap from "../../../hooks/imagemap"
import useContextName from "../../../hooks/contextname"
import FlHdDiv from "../../../components/flhddiv"
import Row from "../../../components/row"
import useBreakpoints from "../../../hooks/breakpoints"
import {
  FACULTY_PATH,
  GROUPS,
  TEXT_LAB_PUBS,
  TEXT_LAB_WEBSITE,
  TEXT_MY_PUBS,
} from "../../../constants"
import useBooleanSearch from "../../../hooks/booleansearch"
import BWImage from "../../../components/images/bwimage"
import PersonHeader from "../../../components/people/personheader"
import ContactCard from "../../../components/people/contactcard"
import PersonHeaderHoz from "../../../components/people/personheaderhoz"
import BlueLink from "../../../components/buttons/bluelink"
import AltView from "../../../components/altview"
import MainSideCol from "../../../components/mainsidecol"
import BlueButtonLink from "../../../components/buttons/bluebuttonlink"
import RecentPublications from "../../../components/publication/recentpublications"
import useSortPublications from "../../../hooks/sortpublications"
import PubMedLink from "../../../components/buttons/pubmedlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import MainCard from "../../../components/maincard"
import HTMLDiv from "../../../components/htmldiv"
import VertTabs from "../../../components/tabs/verttabs"
import Collapsible2 from "../../../components/collapsible2"
import PeopleGroups from "../../../components/people/peoplegroups"
import BaseImage from "../../../components/images/base-image"
import ExpandButton from "../../../components/buttons/expandbutton"
import PageLayout from "../../../layouts/pagelayout"
import BaseLink from "../../../components/buttons/baselink"
import getFaculty from "../../../lib/faculty"
import {
  getAllLabs,
  getAllPeople,
  getLabMap,
  getPeopleMap,
  getSlugs,
  LABS_DIRECTORY,
} from "../../../lib/api"
import IFieldMap from "../../../types/field-map"
import { getPersonName, toLabPeopleMap } from "../../../lib/people"
import getFacultyLabs from "../../../lib/faculty-labs"
import {
  faChevronDown,
  faChevronRight,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons"
import { join } from "path"
import fs from "fs"
import usePublications from "../../../hooks/publications"
import useSelectedPublications from "../../../hooks/selected-publications"
import { SideContactCard } from "../../../components/side-contact-card"
import ICrumb from "../../../types/crumb"
import PublicationsPage from "../../../components/pages/publications-page"

const EMPTY_QUERY = ""

interface FacultyCardProps {
  person: any
  imageMap: any
}

export const FacultyCard = ({ person, imageMap }: FacultyCardProps) => {
  const [hover, setHover] = useState(false)

  //let photoEl = useRef(null)

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to(
  //       photoEl.current,
  //       0.5,
  //       { y: hover ? "-0.5rem" : 0, ease: "power3.inOut" },
  //       0
  //     )
  // }, [hover])

  const handleMouseEnter = (e: any) => {
    setHover(true)
  }

  const handleMouseLeave = (e: any) => {
    setHover(false)
  }

  const titles = useContextName("", person.titleMap).split(";")

  //const fluid = imageMap[person.fields.personId]
  // let generic = false

  // if (person.fields.personId in imageMap) {
  //   fluid = imageMap[person.fields.personId]
  // } else {
  //   fluid = imageMap["generic"]
  //   generic = true
  // }

  const src = `people/${person.fields.personId}.jpg`

  return (
    <BaseLink
      to={`${FACULTY_PATH}/${person.fields.personId}`}
      className={`block w-full h-full trans-ani ${
        hover ? "text-cuimc-button-blue" : ""
      }`}
    >
      <AltView size="md">
        <div>
          <Row isCentered={true}>
            {/* <Circle className="border border-solid border-cuimc-gray"> */}
            <BWImage
              src={src}
              extZoom={hover}
              alt={`${getPersonName(person)}`}
              className={`w-64`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* </Circle> */}
            {/* <BWImage2
                  src={usePersonImageURL(person)}
                  extZoom={hover}
                  alt={person.fields.name}
                /> */}
          </Row>
          <Row isCentered={true}>
            <div className={`w-full h-full py-4 text-center`}>
              {/* <h3 className="m-0">{`${person.fields.name}, ${person.fields.postNominalLetters}`}</h3> */}
              <h4 className="m-0 font-medium">{`${getPersonName(person)}`}</h4>
              <div>{titles[0]}</div>
            </div>
          </Row>
        </div>

        <div>
          <Row isCentered={true}>
            {/* <Circle className="border border-solid border-cuimc-gray"> */}
            <BWImage
              src={src}
              extZoom={hover}
              className={`w-64 rounded-full`}
              alt={`${getPersonName(person)}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* </Circle> */}

            {/* <BWImage2
                  src={usePersonImageURL(person)}
                  extZoom={hover}
                  alt={person.fields.name}
                /> */}
          </Row>

          <div className={`w-full h-full py-4`}>
            {/* <h4 className="m-0">{`${person.fields.name}, ${person.fields.postNominalLetters}`}</h4> */}
            <h5 className="m-0 font-medium">{`${getPersonName(person)}`}</h5>
            <div className={`text-sm`}>{titles[0]}</div>
          </div>
        </div>
      </AltView>
    </BaseLink>
  )
}

interface StaffGridProps {
  people: any[]
  imageMap?: IFieldMap
}

export const StaffGrid = ({ people, imageMap = {} }: StaffGridProps) => (
  <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
    {people.map((person: any, index: number) => {
      return (
        <li key={`person-${index}`}>
          <FacultyCard person={person} imageMap={imageMap} />
        </li>
      )
    })}
  </ul>
)

interface TeamProps {
  labGroupMap: any
  faculty?: any
  imageMap?: any
}

export const Team = ({
  faculty,
  labGroupMap = {},
  imageMap = {},
}: TeamProps) => (
  <SectionCard name="Meet The Team" className="mt-16">
    {/* <div className="border border-solid border-slate-200 rounded-lg p-4"> */}

    <PeopleGroups
      groupMap={labGroupMap}
      imageMap={imageMap}
      faculty={faculty}
      colWidth="w-full lg:w-24/50 2xl:w-3/10"
      outline={false}
      showHeadings={false}
      showUrl={false}
      gridBg=""
      showLetters={true}
      photoMode=""
    />
    {/* </div> */}
  </SectionCard>
)

// type StaffGroupsProps = {
//   allGroups: Array<any>
//   imageMap?: any
//   colWidth?: string
// }

// export const StaffGroups: React.FC<StaffGroupsProps> = ({
//   allGroups,
//   imageMap,
//   colWidth,
// }) => {
//   const ret = []

//   for (let group of allGroups) {
//     ret.push(
//       <div key={`header-${group.name}`} className="mb-8">
//         {/* <FlatCard> */}
//         <ShowSmall className="mb-8" size="lg">
//           <h2 className={`text-center`}>{group.name}</h2>
//         </ShowSmall>

//         <HideSmall className="mb-8" size="lg">
//           <h2 className={`text-center`}>{group.name}</h2>
//         </HideSmall>

//         <StaffGrid
//           people={group.peopleList}
//           imageMap={imageMap}
//           key={group.name}
//           colWidth={colWidth}
//         />
//         {/* </FlatCard> */}
//       </div>
//     )
//   }

//   return ret
// }

interface AboutProps {
  data: any
}

export const About = ({ data }: AboutProps) => {
  let html = null

  if (data.faculty !== null && data.faculty !== undefined) {
    html = data.faculty
  } else {
    if (data.genericMarkdown !== null && data.genericMarkdown !== undefined) {
      html = data.genericMarkdown
    } else {
      html = data
    }
  }

  if (html !== null) {
    return (
      <div className="text-justify">
        <HTMLDiv o={html} />
      </div>
    )
  } else {
    return <></>
  }
}

// StaffGroups.defaultProps = {
//   cols: 4,
//   colWidth: "w-full sm:w-9/20 lg:w-3/10 xl:w-22/100 2xl:w-18/100 3xl:w-3/20",
//   imageSize: 60,
//   headingColor: "text-slate-700 md:text-slate-600",
// }

// export const staff = (
//   breakpoint: string,
//   faculty: Array<any>,
//   imageMap: any
// ) => {
//   if (faculty.length > 0) {
//     switch (breakpoint) {
//       case "sm":
//         return (
//           <StaffGroups
//             allGroups={faculty}
//             imageMap={imageMap}
//             cols={2}
//             colWidth="9/20"
//             imageSize={60}
//           />
//         )
//       case "md":
//       case "lg":
//         return (
//           <StaffGroups
//             allGroups={faculty}
//             imageMap={imageMap}
//             cols={3}
//             colWidth="3/10"
//             imageSize={60}
//           />
//         )
//       case "xl":
//         return (
//           <StaffGroups
//             allGroups={faculty}
//             imageMap={imageMap}
//             cols={4}
//             colWidth="22/100"
//             imageSize={56}
//           />
//         )
//       case "2xl":
//         // 3xl and aboves
//         return (
//           <StaffGroups
//             allGroups={faculty}
//             imageMap={imageMap}
//             cols={5}
//             colWidth="19/100"
//             imageSize={60}
//           />
//         )
//       default:
//         // 3xl and aboves
//         return (
//           <StaffGroups
//             allGroups={faculty}
//             imageMap={imageMap}
//             cols={6}
//             colWidth="3/20"
//             imageSize={60}
//           />
//         )
//     }
//   } else {
//     return <NoResults text="No faculty found." />
//   }
// }

// type AllFacultyProps = {
//   breakpoint: string
//   faculty: any
//   peopleMap: any
//   imageMap: any
// }

// export const AllFaculty: React.FC<AllFacultyProps> = ({
//   breakpoint,
//   faculty,
//   peopleMap,
//   imageMap,
// }) => (
//   <FlHdDiv>
//     <Container>
//       {staff(breakpoint, faculty, peopleMap, imageMap)}

//       <ShowSmall size="md">
//         <StaffGroups
//           allGroups={faculty}
//           peopleMap={peopleMap}
//           imageMap={imageMap}
//           cols={2}
//           colWidth="w-9/20"
//         />
//       </ShowSmall>

//       <ShowBetween s1="md" s2="lg">
//         <StaffGroups
//           allGroups={faculty}
//           peopleMap={peopleMap}
//           imageMap={imageMap}
//           cols={3}
//           colWidth="w-3/10"
//         />
//       </ShowBetween>

//       <ShowBetween s1="lg" s2="xl">
//         <StaffGroups
//           allGroups={faculty}
//           peopleMap={peopleMap}
//           imageMap={imageMap}
//           cols={4}
//           colWidth="w-22/100"
//         />
//       </ShowBetween>

//       <HideSmall size="xl">
//         <StaffGroups
//           allGroups={faculty}
//           peopleMap={peopleMap}
//           imageMap={imageMap}
//           cols={5}
//           colWidth="w-19/100"
//         />
//       </HideSmall>
//     </Container>
//   </FlHdDiv>
// )

interface AppointmentsGridProps {
  person: any
  colWidth?: string
  headingColor?: string
}

const Appointments = ({
  person,
  colWidth = "w-full lg:w-1/2",
  headingColor = "text-columbia-secondary-blue",
}: AppointmentsGridProps) => {
  if (person.fields.appointments.length > 0) {
    const ret = person.fields.appointments.map(
      (appointment: string, index: number) => {
        const [institute, title, url] = appointment.split("::")
        return (
          <div className={`mb-4 ${colWidth}`}>
            <h4 className="m-0 font-medium">
              {url !== "" ? (
                <BlueLink to={url}>{institute}</BlueLink>
              ) : (
                <>{institute}</>
              )}
            </h4>
            <div>{title}</div>
          </div>
        )
      }
    )

    return (
      <SectionCard name="Appointments" className="mt-8">
        <Row wrap={true} className="w-full">
          {ret}
        </Row>
      </SectionCard>
    )
  } else {
    return <></>
  }
}

interface AdminTitlesProps {
  titles: string[]
}

export const AdminTitles = ({ titles }: AdminTitlesProps) => (
  <SectionCard name="Administrative Titles" className="mt-8">
    <ul className="block">
      {titles.map((title: string, index: number) => {
        return (
          <li className="text-lg font-light mb-2" key={index}>
            <Row>
              <FontAwesomeIcon
                icon="circle"
                className="mr-4 text-slate-300 text-xxs"
              />
              <div>{title}</div>
            </Row>
          </li>
        )
      })}
    </ul>
  </SectionCard>
)

export const search = (query: any, allFaculty: any): any => {
  const ql = query.text.toLowerCase()

  const faculty: any[] = []

  for (let group of allFaculty) {
    const g: { name: string; people: any[] } = {
      name: group.name,
      people: [],
    }

    g.name = group.name

    for (let p of group.people) {
      if (p.person.fields.name.toLowerCase().includes(ql)) {
        g.people.push(p)
      }
    }

    // Only keep groups with at least 1 faculty member
    if (g.people.length > 0) {
      faculty.push(g)
    }
  }

  return faculty
}

export const booleanSearchAnd = (s1: any, s2: any): any => {
  const names: Set<any> = new Set()

  for (let group of s2) {
    for (let p of group.people) {
      names.add(p.person.fields.name)
    }
  }

  const faculty: any[] = []

  for (let group of s1) {
    const g: { name: string; people: any[] } = {
      name: group.name,
      people: [],
    }
    g.name = group.name

    for (let p of group.people) {
      if (names.has(p.person.fields.name)) {
        g.people.push(p)
      }
    }

    // Only keep groups with at least 1 faculty member
    if (g.people.length > 0) {
      faculty.push(g)
    }
  }

  return faculty
}

export const booleanSearchOr = (s1: any, s2: any): any => {
  const peopleMap: any = {}

  for (let group of s1) {
    if (!(group.name in peopleMap)) {
      peopleMap[group.name] = {}
    }

    for (let p of group.people) {
      if (!(p.person.fields.lastName in peopleMap[group.name])) {
        peopleMap[group.name][p.person.fields.lastName] = {}
      }

      if (
        !(
          p.person.fields.firstName in
          peopleMap[group.name][p.person.fields.lastName]
        )
      ) {
        peopleMap[group.name][p.person.fields.lastName][
          p.person.fields.firstName
        ] = p
      }
    }
  }

  for (let group of s2) {
    if (!(group.name in peopleMap)) {
      peopleMap[group.name] = {}
    }

    for (let p of group.people) {
      if (!(p.person.fields.lastName in peopleMap[group.name])) {
        peopleMap[group.name][p.person.fields.lastName] = {}
      }

      if (
        !(
          p.person.fields.firstName in
          peopleMap[group.name][p.person.fields.lastName]
        )
      ) {
        peopleMap[group.name][p.person.fields.lastName][
          p.person.fields.firstName
        ] = p
      }
    }
  }

  const faculty: any[] = []

  for (let group of GROUPS) {
    if (group in peopleMap) {
      const g: { name: string; people: any[] } = {
        name: group,
        people: [],
      }

      for (let ln of Object.keys(peopleMap[group]).sort()) {
        for (let fn of Object.keys(peopleMap[group][ln]).sort()) {
          g.people.push(peopleMap[group][ln][fn])
        }
      }

      // Only keep groups with at least 1 faculty member
      if (g.people.length > 0) {
        faculty.push(g)
      }
    }
  }

  return faculty
}

interface SectionCardProps {
  name?: string
  className?: string
  children?: ReactNode
}

export const SectionCard = ({
  name,
  className,
  children,
}: SectionCardProps) => (
  <div className={`${className}`}>
    <Collapsible2 title={name}>{children}</Collapsible2>
  </div>
)

interface PublicationsProps {
  person: any
  allPublications: Array<any>
  showAbstract?: boolean
  showMoreButton?: boolean
}

export const Publications = ({
  person,
  allPublications,
  showAbstract = true,
  showMoreButton = true,
}: PublicationsProps) => (
  <SectionCard name="Selected Publications" className="mt-16">
    <RecentPublications
      publications={useSortPublications(allPublications)}
      showAbstract={showAbstract}
      showMoreButton={showMoreButton}
      showCount={false}
      showIndices={true}
    />

    {/* {html != null && (<ul dangerouslySetInnerHTML={{__html: html}} />)} */}

    <PubMedLink person={person} />
  </SectionCard>
)

interface HeaderExpandButtonProps {
  onClick: any
  expanded?: boolean
}

const HeaderExpandButton = ({ onClick, expanded }: HeaderExpandButtonProps) => {
  const [hover, setHover] = useState(false)

  useEffect(() => {
    let tl = gsap.timeline()

    tl.to(
      "#header-expand-button",
      {
        duration: 0.4,
        width: hover ? "6rem" : 0,
        ease: "power3.out",
      },
      hover ? 0 : 0.1
    )
      .to(
        "#header-expand-button",
        {
          duration: 0.4,
          backgroundColor: hover ? "white" : "rgba(255, 255, 255, 0.9)",
          ease: "power3.out",
        },
        hover ? 0 : 0.1
      )
      .to(
        "#header-expand-button-label",
        {
          duration: 0.4,
          opacity: hover ? 1 : 0,
          ease: "power3.out",
        },
        hover ? 0.2 : 0
      )
  }, [hover])

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  const _onClick = (e: any) => {
    setHover(false)

    onClick(e)
  }

  return (
    <button
      id="header-expand-button"
      onClick={_onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="bg-white-90 rounded-full min-w-8 h-8 shadow-button hover:shadow-button-lg outline-none trans-ani"
    >
      <div className="relative">
        <div
          id="header-expand-button-label"
          className={`absolute left-0 top-0 opacity-0 h-full flex flex-col justify-center ml-3`}
        >
          {expanded ? "Hide" : "Show"}
        </div>
        <div
          id="header-expand-button-icon"
          className="flex flex-col justify-center absolute top-0 right-0 h-full mr-2"
        >
          <FontAwesomeIcon
            icon={expanded ? faChevronUp : faChevronDown}
            className={`text-xl`}
          />
        </div>
      </div>
    </button>
  )
}

interface HeaderSectionProps {
  expanded: boolean
  person: any
  breakpoint?: string
  children?: ReactNode
}

export const HeaderSection = ({
  person,
  expanded,
  breakpoint = "3xl",
  children,
}: HeaderSectionProps) => {
  //const [expanded, setExpanded] = useState(false)

  let bgEl = useRef(null)

  useEffect(() => {
    let tl = gsap.timeline()

    let h

    switch (breakpoint) {
      case "sm":
        h = "14rem"
        break
      case "md":
        h = "16rem"
        break
      case "lg":
        h = "22rem"
        break
      case "xl":
        h = "24rem"
        break
      case "2xl":
        h = "26rem"
        break
      default:
        h = "28rem"
        break
    }

    tl.to(
      bgEl.current,
      0.5,
      { height: expanded ? "70rem" : h, ease: "power3.inOut" },
      0
    )
  }, [expanded, breakpoint])

  // const _handleClick = (e: any) => {
  //   const ret = !expanded
  //   setExpanded(ret)

  //   if (onExpand !== null) {
  //     onExpand(ret)
  //   }
  // }

  // if (data.header !== null) {
  return (
    <HideSmall
      className={`relative border-b border-solid border-slate-200`}
      ref={bgEl}
      size="lg"
    >
      <BaseImage
        alt="Heading"
        src={`faculty/header/${person.fields.personId}.jpg`}
        size={[1600, 900]}
        className="w-full h-full object-cover"
      />

      {children}

      {/* <Row className="absolute bottom-0 justify-end w-full">
        <HeaderExpandButton onClick={_handleClick} expanded={expanded} />
      </Row> */}
    </HideSmall>
  )
  // } else {
  //   return <></>
  // }
}

interface FacultyPageProps {
  person: any
  lab: any
}

const FacultyPage = ({ person, lab }: FacultyPageProps) => {
  const handleSearch = (text: string, clicked: boolean) => {
    setQuery(text)
  }

  const handleExpandHeaderClick = (e: any) => {
    setExpanded(!expanded)
  }

  const [expanded, setExpanded] = useState(false)
  const [query, setQuery] = useState(EMPTY_QUERY)
  const [filteredFaculty, setFilteredFaculty] = useState<Array<any>>([])
  const breakpoint = useBreakpoints()

  //const [allPublications, setAllPublications] = useState<Array<any>>([])

  // const [selectedPublications, setSelectedPublications] = useState<Array<any>>(
  //   []
  // )

  const [pubHtml, setPubHtml] = useState(null)

  // const allPublications =
  //   data.allPublications.edges.length > 0
  //     ? data.allPublications.edges[0].node.publications
  //     : []

  const facultyMember: any = null

  const headerImageCredit: string = ""
  //data.faculty !== null ? facultyMember.fields.headerImageCredit : ""

  //const [page, setPage] = useState(1)
  //const [recordsPerPage, setRecordsPerPage] = useState(20)

  const [selectedPublications, setSelectedPublications] = useState<any[]>([])

  useEffect(() => {
    useSelectedPublications(setSelectedPublications, person.fields.personId)
  }, [])

  const titles = person ? useContextName("admin", person.titleMap, true) : ""

  const adminTitles = titles !== "" ? titles.split(";") : []

  const data = {}

  const path = `/research-areas/faculty/${person.fields.personId}`

  return (
    <>
      <HeaderSection
        person={person}
        breakpoint={breakpoint}
        expanded={expanded}
      >
        <Container className="hidden md:block absolute bottom-0 right-0 text-sm text-white-80 mb-6">
          {headerImageCredit}
        </Container>
      </HeaderSection>

      <Row className="justify-end px-4 py-2">
        <ExpandButton onClick={handleExpandHeaderClick} isExpanded={expanded} />
      </Row>

      <Container>
        <MainSideCol className={`mt-8 mb-16`}>
          <div>
            <AltView size="xl">
              <>
                <PersonHeader person={person} />
                <div className="mt-8 bg-slate-100 p-8">
                  {/* <Abstract h="h-48"> */}
                  <About data={data} />
                  {/* </Abstract> */}
                </div>
              </>
              <MainCard>
                <PersonHeaderHoz person={person} faculty={facultyMember} />
                <div className="mt-4">
                  <About data={data} />
                </div>
              </MainCard>
            </AltView>

            {adminTitles.length > 0 && <AdminTitles titles={adminTitles} />}

            <ShowSmall size="xl" className="mt-8">
              <SectionCard name="Contact" className="mt-8">
                <ContactCard faculty={facultyMember} person={person} />

                {facultyMember && facultyMember.fields.url !== null && (
                  <Row className="my-4">
                    <BlueButtonLink
                      to={facultyMember.fields.url}
                      className="w-full lg:w-auto text-center"
                    >
                      {TEXT_LAB_WEBSITE}
                    </BlueButtonLink>
                  </Row>
                )}
              </SectionCard>
            </ShowSmall>

            {Object.keys(lab.groupMap).length > 0 && (
              <Team labGroupMap={lab.groupMap} faculty={facultyMember} />
            )}

            <Publications
              person={person}
              allPublications={selectedPublications}
              showAbstract={false}
              showMoreButton={false}
            />
          </div>
          <div className="md:ml-10">
            <SideContactCard title="Contact">
              <ContactCard faculty={facultyMember} person={person} />

              {facultyMember !== null && facultyMember.fields.url !== null && (
                <Row className="mt-8">
                  <BlueButtonLink
                    to={facultyMember.fields.url}
                    className="text-center"
                  >
                    {TEXT_LAB_WEBSITE}{" "}
                    <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
                  </BlueButtonLink>

                  {/* <BlueIndexLink
                            to={facultyMember.fields.url}
                            className="w-full lg:w-auto text-center"
                          >
                            {strings.labWebSite}
                          </BlueIndexLink> */}
                </Row>
              )}

              <h3 className="mt-24 mb-2">Links</h3>
              <BlueLink to={`${path}/publications`}>{TEXT_MY_PUBS}</BlueLink>
            </SideContactCard>
          </div>
        </MainSideCol>
      </Container>
    </>
  )
}

const PubPage = ({ person }: any) => {
  const [publications, setPublications] = useState<any[]>([])

  useEffect(() => {
    usePublications(setPublications, person.fields.personId)
  }, [])

  return <PublicationsPage publications={publications} />
}

interface PageProps extends FacultyPageProps {
  slug: string
  crumbs: ICrumb[]
}

const Page = ({ slug, person, lab, crumbs }: PageProps) => {
  let ret = null
  let path = `/research-areas/faculty/${person.fields.personId}`

  if (slug.includes("publication")) {
    path = `${path}/publications`
    ret = <PubPage person={person} />
  } else {
    ret = <FacultyPage person={person} lab={lab} />
  }

  return (
    <PageLayout
      path={path}
      crumbs={crumbs}
      title={"Faculty"}
      nav="Faculty"
      //crumbLocation="none"
      // titleContent={
      //   <SearchSummary count={groups.length} single="Lab" plural="Labs" />
      // }
    >
      {ret}
    </PageLayout>
  )
}

export default Page

type Params = {
  params: {
    slug: string[]
    crumbs: ICrumb[]
  }
}

export async function getStaticProps({ params }: Params) {
  const pid = params.slug[0]
  const slug = params.slug.join("/")

  // const allFaculty = getFaculty()
  const people = getAllPeople()
  const peopleMap = getPeopleMap(people)

  const person = peopleMap[pid]

  const facultyLabs = getFacultyLabs()

  const labId = facultyLabs[person.fields.personId]

  const lab = JSON.parse(
    fs.readFileSync(join(LABS_DIRECTORY, `${labId}.json`)).toString()
  )

  lab.groupMap = toLabPeopleMap(lab, peopleMap)

  let crumbs: ICrumb[]

  if (slug.includes("publication")) {
    crumbs = [
      ["Faculty", FACULTY_PATH],
      [getPersonName(person), `${FACULTY_PATH}/${person.fields.personId}`],
      [
        "Publications",
        `${FACULTY_PATH}/${person.fields.personId}/publications`,
      ],
    ]
  } else {
    crumbs = [
      ["Faculty", FACULTY_PATH],
      [getPersonName(person), `${FACULTY_PATH}/${person.fields.personId}`],
    ]
  }

  // allFaculty.forEach((faculty: any) => {
  //   faculty.people = faculty.peopleList.map(
  //     (person: any) => peopleMap[person.person]
  //   )
  // })

  return {
    props: {
      slug: slug,
      person: person,
      lab: lab,
      crumbs: crumbs,
    },
  }
}

export async function getStaticPaths() {
  const allFaculty = getFaculty()

  const paths: any[] = []

  allFaculty.forEach((faculty: any) => {
    faculty.people = faculty.peopleList.forEach((person: any) => {
      paths.push({ params: { slug: [person.person] } })
      paths.push({ params: { slug: [person.person, "publications"] } })
    })
  })

  return {
    paths,
    fallback: true, // false or 'blocking'
  }
}

// export const query = graphql`
//   query ($personId: String!) {
//     images: allFile(
//       filter: {
//         absolutePath: { regex: "/images/people/500x500/rounded/" }
//         ext: { regex: "/png/" }
//       }
//     ) {
//       edges {
//         node {
//           name
//           ext
//           relativePath
//           childImageSharp {
//             gatsbyImageData(placeholder: BLURRED, width: 500, aspectRatio: 1)
//           }
//         }
//       }
//     }

//     genericPersonImage: file(
//       absolutePath: { regex: "/images/people/500x500/rounded/generic.png/" }
//     ) {
//       name
//       ext
//       relativePath
//       childImageSharp {
//         gatsbyImageData(placeholder: BLURRED, width: 500, aspectRatio: 1)
//       }
//     }

//     faculty: markdownRemark(
//       fileAbsolutePath: { regex: "/faculty/" }
//       fields: { id: { eq: $personId } }
//     ) {
//       id
//       fields {
//         id
//         headerImageCredit
//         url
//         twitter
//         tagList
//       }
//       excerpt(format: HTML)
//       html
//     }

//     header: file(
//       absolutePath: { regex: "/images/faculty/header/" }
//       name: { eq: $personId }
//       ext: { regex: "/(jpg|png)/" }
//     ) {
//       relativePath
//       childImageSharp {
//         gatsbyImageData
//       }
//     }

//     genericHeader: file(
//       name: { eq: "generic-header" }
//       ext: { regex: "/jpg/" }
//     ) {
//       relativePath
//       childImageSharp {
//         gatsbyImageData
//       }
//     }

//     selectedPublications: allSelectedPublicationsJson(
//       filter: { person: { eq: $personId } }
//     ) {
//       edges {
//         node {
//           person
//           publications {
//             pmid
//             pmcid
//             doi
//             isbn
//             title
//             abstract
//             authorList
//             authors
//             peopleList
//             journal
//             issue
//             pages
//             volume
//             year
//             month
//             day
//             url
//             tagList
//           }
//         }
//       }
//     }
//   }
// `

// allPublications: allPublicationsJson(filter: { person: { eq: $personId } }) {
//   edges {
//     node {
//       person
//       publications {
//         pmid
//         pmcid
//         doi
//         isbn
//         title
//         abstract
//         authors
//         people
//         journal
//         issue
//         pages
//         volume
//         year
//         month
//         day
//         url
//         tags
//       }
//     }
//   }
// }
