import React, { useState, useEffect, useRef, ReactNode } from "react"
import Container from "../../components/container"
import ShowSmall from "../../components/showsmall"
import HideSmall from "../../components/hidesmall"
import useImageMap from "../../hooks/imagemap"
import useContextName from "../../hooks/contextname"
import FlHdDiv from "../../components/flhddiv"
import Row from "../../components/row"
import useBreakpoints from "../../hooks/breakpoints"
import { FACULTY_PATH, GROUPS, TEXT_LAB_PUBS, TEXT_LAB_WEBSITE } from "../../constants"
import useBooleanSearch from "../../hooks/booleansearch"
import BWImage from "../../components/images/bwimage"
import PersonHeader from "../../components/people/personheader"
import ContactCard from "../../components/people/contactcard"
import PersonHeaderHoz from "../../components/people/personheaderhoz"
import BlueLink from "../../components/buttons/bluelink"
import AltView from "../../components/altview"
import MainSideCol from "../../components/mainsidecol"
import BlueButtonLink from "../../components/buttons/bluebuttonlink"
import RecentPublications from "../../components/publication/recentpublications"
import useSortPublications from "../../hooks/sortpublications"
import PubMedLink from "../../components/buttons/pubmedlink"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap"
import MainCard from "../../components/maincard"
import HTMLDiv from "../../components/htmldiv"
import VertTabs from "../../components/tabs/verttabs"
import Collapsible2 from "../../components/collapsible2"
import PeopleGroups from "../../components/people/peoplegroups"
import BaseImage from "../../components/images/baseimage"
import ExpandButton from "../../components/buttons/expandbutton"
import PageLayout from "../../layouts/pagelayout"
import BaseLink from "../../components/buttons/baselink"
import getFaculty from "../../lib/faculty"


const EMPTY_QUERY = ""

interface FacultyCardProps {
  person: any
  imageMap: any
}

interface SideContactCardProps {
  title: string
  className?: string
  children?: ReactNode
}

export const SideContactCard = ({
  title,
  className,
  children,
}: SideContactCardProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  return (
    // <div
    //   onMouseEnter={onMouseEnter}
    //   onMouseLeave={onMouseLeave}
    //   className="bg-black-5 p-8 trans-ani"
    // >
    //   {children}
    // </div>

    // <FlatCard className={className}>{children}</FlatCard>
    <div
      className={`border-t-3 border-solid border-cuimc-orange-40 pt-4 ${className}`}
    >
      {title !== "" && <h3 className={`mb-4`}>{title}</h3>}

      {children}
    </div>
  )
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

  const fluid = imageMap[person.frontmatter.personId]
  // let generic = false

  // if (person.frontmatter.personId in imageMap) {
  //   fluid = imageMap[person.frontmatter.personId]
  // } else {
  //   fluid = imageMap["generic"]
  //   generic = true
  // }

  return (
    <BaseLink
      to={`${FACULTY_PATH}/${person.frontmatter.personId}`}
      className={`block w-full h-full trans-ani ${
        hover ? "text-cuimc-button-blue" : ""
      }`}
    >
      <AltView size="md">
        <div>
          <Row isCentered={true}>
            {/* <Circle className="border border-solid border-cuimc-gray"> */}
            <BWImage
              image={fluid}
              extZoom={hover}
              alt={person.frontmatter.name}
              className={`w-64`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* </Circle> */}
            {/* <BWImage2
                  src={usePersonImageURL(person)}
                  extZoom={hover}
                  alt={person.frontmatter.name}
                /> */}
          </Row>
          <Row isCentered={true}>
            <div className={`w-full h-full py-4 text-center`}>
              {/* <h3 className="m-0">{`${person.frontmatter.name}, ${person.frontmatter.postNominalLetters}`}</h3> */}
              <h4 className="m-0 font-medium">{`${person.frontmatter.name}`}</h4>
              <div>{titles[0]}</div>
            </div>
          </Row>
        </div>

        <div>
          <Row isCentered={true}>
            {/* <Circle className="border border-solid border-cuimc-gray"> */}
            <BWImage
              image={fluid}
              extZoom={hover}
              className={`w-64`}
              alt={person.frontmatter.name}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            />
            {/* </Circle> */}

            {/* <BWImage2
                  src={usePersonImageURL(person)}
                  extZoom={hover}
                  alt={person.frontmatter.name}
                /> */}
          </Row>

          <div className={`w-full h-full py-4`}>
            {/* <h4 className="m-0">{`${person.frontmatter.name}, ${person.frontmatter.postNominalLetters}`}</h4> */}
            <h5 className="m-0 font-medium">{`${person.frontmatter.name}`}</h5>
            <div className={`text-sm`}>{titles[0]}</div>
          </div>
        </div>
      </AltView>
    </BaseLink>
  )
}

interface StaffGridProps {
  people: any[]
  imageMap?: any
  colWidth?: string
}

export const StaffGrid = ({
  people,
  imageMap = {},
  colWidth = "w-full sm:w-1/3 md:w-1/4 xl:w-1/5 3xl:w-16/100",
}: StaffGridProps) => {
  const ret: any[] = []

  people.map((person: any, index: number) => {
    ret.push(
      <li className={`block ${colWidth} mx-4 mb-4`} key={`person-${index}`}>
        <FacultyCard person={person.person} imageMap={imageMap} />
      </li>
    )
  })

  return <ul className="flex flex-row flex-wrap -mx-4">{ret}</ul>
}

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
    {/* <div className="border border-solid border-gray-200 rounded-lg p-4"> */}

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
//   headingColor: "text-gray-700 md:text-gray-600",
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
  if (person.frontmatter.appointments.length > 0) {
    const ret = person.frontmatter.appointments.map(
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
                className="mr-4 text-gray-300 text-xxs"
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
      if (p.person.frontmatter.name.toLowerCase().includes(ql)) {
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
      names.add(p.person.frontmatter.name)
    }
  }

  const faculty: any[] = []

  for (let group of s1) {
    const g: { name: string; people: any[]} = {
      name: group.name,
      people: [],
    }
    g.name = group.name

    for (let p of group.people) {
      if (names.has(p.person.frontmatter.name)) {
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
  const names: Set<any> = new Set()

  const peopleMap: any = {}

  for (let group of s1) {
    if (!(group.name in peopleMap)) {
      peopleMap[group.name] = {}
    }

    for (let p of group.people) {
      if (!(p.person.frontmatter.lastName in peopleMap[group.name])) {
        peopleMap[group.name][p.person.frontmatter.lastName] = {}
      }

      if (
        !(
          p.person.frontmatter.firstName in
          peopleMap[group.name][p.person.frontmatter.lastName]
        )
      ) {
        peopleMap[group.name][p.person.frontmatter.lastName][
          p.person.frontmatter.firstName
        ] = p
      }
    }
  }

  for (let group of s2) {
    if (!(group.name in peopleMap)) {
      peopleMap[group.name] = {}
    }

    for (let p of group.people) {
      if (!(p.person.frontmatter.lastName in peopleMap[group.name])) {
        peopleMap[group.name][p.person.frontmatter.lastName] = {}
      }

      if (
        !(
          p.person.frontmatter.firstName in
          peopleMap[group.name][p.person.frontmatter.lastName]
        )
      ) {
        peopleMap[group.name][p.person.frontmatter.lastName][
          p.person.frontmatter.firstName
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
            icon={expanded ? "chevron-up" : "chevron-down"}
            className={`text-xl`}
          />
        </div>
      </div>
    </button>
  )
}

interface HeaderSectionProps {
  expanded: boolean
  data: any
  breakpoint?: string
  children?: ReactNode
}

export const HeaderSection = ({
  data,
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
      className={`relative border-b border-solid border-gray-200`}
      ref={bgEl}
      size="lg"
    >
      <BaseImage
        alt="Heading"
        image={data.header}
        style={{
          filter: "brightness(100%) grayscale(0) blur(0)",
        }}
        className="w-full h-full"
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

interface PageProps {
  allFaculty: any[]
}

const Page = ({
  allFaculty
}: PageProps) => {
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
    //data.faculty !== null ? facultyMember.frontmatter.headerImageCredit : ""

  //const [page, setPage] = useState(1)
  //const [recordsPerPage, setRecordsPerPage] = useState(20)

  const imageMap = {} //useImageMap(data)

  const selectedPublications: any[] = []
    //data.selectedPublications.edges.length > 0
    //  ? data.selectedPublications.edges[0].node.publications
    //  : []

  useEffect(() => {
    if (query !== "") {
      setFilteredFaculty(
        useBooleanSearch(
          query,
          faculty,
          search,
          booleanSearchAnd,
          booleanSearchOr
        )
      )
    } else {
      setFilteredFaculty([])
    }
  }, [query])

  const faculty: Array<any> = query !== "" ? filteredFaculty : allFaculty

  const person: any = null

  const titles =
    person !== null ? useContextName("admin", person.titleMap, true) : ""
  const adminTitles = titles !== "" ? titles.split(";") : []

  return (
    <PageLayout
      path={"/research-areas/faculty"}
      crumbs={[["Publications", FACULTY_PATH]]}
      title={"Facuty"}
      nav="Faculty"
      //crumbLocation="none"
      // titleContent={
      //   <SearchSummary count={groups.length} single="Lab" plural="Labs" />
      // }
    >
      {/* <SearchBar
        handleInputChange={handleInputChange}
        placeholder="Search labs"
        text={query}
        className="my-4"
      /> */}

      {person !== null && query === "" ? (
        <>
          <HeaderSection
            data={data}
            breakpoint={breakpoint}
            expanded={expanded}
          >
            <Container className="hidden md:block absolute bottom-0 right-0 text-sm text-white-80 mb-6">
              {headerImageCredit}
            </Container>
          </HeaderSection>

          <Row className="justify-end px-4 py-2">
            <ExpandButton
              onClick={handleExpandHeaderClick}
              isExpanded={expanded}
            />
          </Row>

          <Container>
            <MainSideCol className={`mt-8 mb-16`}>
              <div>
                <AltView size="xl">
                  <>
                    <PersonHeader person={person} imageMap={imageMap} />
                    <div className="mt-8 bg-gray-100 p-8">
                      {/* <Abstract h="h-48"> */}
                      <About data={data} />
                      {/* </Abstract> */}
                    </div>
                  </>
                  <MainCard>
                    <PersonHeaderHoz
                      person={person}
                      faculty={facultyMember}
                      imageMap={imageMap}
                    />
                    <div className="mt-4">
                      <About data={data} />
                    </div>
                  </MainCard>
                </AltView>

                {adminTitles.length > 0 && <AdminTitles titles={adminTitles} />}

                <ShowSmall size="xl" className="mt-8">
                  <SectionCard name="Contact" className="mt-8">
                    <ContactCard faculty={facultyMember} person={person} />

                    {facultyMember !== null &&
                      facultyMember.frontmatter.url !== null && (
                        <Row className="my-4">
                          <BlueButtonLink
                            to={facultyMember.frontmatter.url}
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

                  {facultyMember !== null &&
                    facultyMember.frontmatter.url !== null && (
                      <Row className="mt-8">
                        <BlueButtonLink
                          to={facultyMember.frontmatter.url}
                          className="text-center"
                        >
                          {TEXT_LAB_WEBSITE}{" "}
                          <FontAwesomeIcon
                            icon="chevron-right"
                            className="ml-1"
                          />
                        </BlueButtonLink>

                        {/* <BlueIndexLink
                            to={facultyMember.frontmatter.url}
                            className="w-full lg:w-auto text-center"
                          >
                            {strings.labWebSite}
                          </BlueIndexLink> */}
                      </Row>
                    )}

                  <h3 className="mt-24 mb-2">Links</h3>
                  <BlueLink to={`${path}/publications`}>
                    {TEXT_LAB_PUBS}
                  </BlueLink>
                </SideContactCard>
              </div>
            </MainSideCol>
          </Container>
        </>
      ) : (
        <FlHdDiv>
          <Container>
            <VertTabs>
              <div id="Institute">
                {faculty
                  .filter((g: any) => {
                    return g.name.includes("Director") || g.name === "Members"
                  })
                  .map((g: any) => {
                    return (
                      <div key={`header-${g.name}`} className="mb-8">
                        <AltView className="mb-8" size="lg">
                          <h2 className={`text-center mb-8`}>{g.name}</h2>
                          <h2 className={``}>{g.name}</h2>
                        </AltView>

                        <StaffGrid
                          people={g.people}
                          imageMap={imageMap}
                          key={g.name}
                        />
                      </div>
                    )
                  })}
              </div>

              <div id="Associate Members">
                {faculty
                  .filter((g: any) => {
                    return g.name.includes("Associate")
                  })
                  .map((g: any) => {
                    return (
                      <div key={`header-${g.name}`}>
                        <AltView className="mb-8" size="lg">
                          <h2 className={`text-center`}>{g.name}</h2>
                          <h2 className={``}>{g.name}</h2>
                        </AltView>

                        <StaffGrid
                          people={g.people}
                          imageMap={imageMap}
                          key={g.name}
                        />
                      </div>
                    )
                  })}
              </div>
            </VertTabs>
          </Container>
        </FlHdDiv>
      )}
    </PageLayout>
  )
}

export default Page

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const faculty = getFaculty()

  return {
    props: {
      allFaculty: faculty,
    },
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
//       frontmatter: { id: { eq: $personId } }
//     ) {
//       id
//       frontmatter {
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
