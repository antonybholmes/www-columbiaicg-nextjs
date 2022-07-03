import { useState, useEffect } from "react"
import PeopleGroups from "../../components/people/peoplegroups"
import Container from "../../components/container"
import FlHdDiv from "../../components/flhddiv"
import useImageMap from "../../hooks/imagemap"
import useBreakpoints from "../../hooks/breakpoints"
import useBooleanSearch from "../../hooks/booleansearch"
import PeopleGrid from "../../components/people/peoplegrid"
import useSortByTitle from "../../hooks/sortbytitle"
import VertTabs from "../../components/tabs/verttabs"
import PageLayout from "../../layouts/pagelayout"
import IFieldMap from "../../types/field-map"
import { STAFF_PATH } from "../../constants"
import { getAllPeople, getPeopleMap } from "../../lib/api"

const EMPTY_QUERY = ""

export const search = (query: any, admin: any): any => {
  const ql = query.text.toLowerCase()

  const groupMap: any = {}

  for (let g of Object.keys(admin)) {
    const people = []

    for (const person of admin[g]) {
      if (person.fields.name.toLowerCase().includes(ql)) {
        people.push(person)
      }
    }

    if (people.length > 0) {
      groupMap[g] = people
    }
  }

  return groupMap
}

export const booleanSearchAnd = (s1: any, s2: any): any => {
  const names: Set<any> = new Set()

  for (let g of Object.keys(s2)) {
    for (let person of s2[g]) {
      names.add(person.fields.name)
    }
  }

  const groupMap: any = {}

  for (let g of Object.keys(s1)) {
    const people = []
    for (let person of s1[g]) {
      if (names.has(person.fields.name)) {
        people.push(person)
      }
    }

    if (people.length > 0) {
      groupMap[g] = people
    }
  }

  return groupMap
}

export const booleanSearchOr = (s1: any, s2: any): any => {
  const names: Set<any> = new Set()

  const peopleMap: any = {}

  for (let g of Object.keys(s1)) {
    if (!(g in peopleMap)) {
      peopleMap[g] = {}
    }

    for (let person of s1[g]) {
      if (!(person.fields.lastName in peopleMap[g])) {
        peopleMap[g][person.fields.lastName] = {}
      }

      if (!(person.fields.firstName in peopleMap[g][person.fields.lastName])) {
        peopleMap[g][person.fields.lastName][person.fields.firstName] = person
      }
    }
  }

  for (let g of Object.keys(s2)) {
    if (!(g in peopleMap)) {
      peopleMap[g] = {}
    }

    for (let person of s2[g]) {
      if (!(person.fields.lastName in peopleMap[g])) {
        peopleMap[g][person.fields.lastName] = {}
      }

      if (!(person.fields.firstName in peopleMap[g][person.fields.lastName])) {
        peopleMap[g][person.fields.lastName][person.fields.firstName] = person
      }
    }
  }

  const ret: any = {}

  for (let group of Object.keys(peopleMap)) {
    ret[group] = []

    for (let ln of Object.keys(peopleMap[group]).sort()) {
      for (let fn of Object.keys(peopleMap[group][ln]).sort()) {
        ret[group].push(peopleMap[group][ln][fn])
      }
    }
  }

  return ret
}

interface PageProps {
  allGroupMap: IFieldMap
}

const Page = ({ allGroupMap }: PageProps) => {
  const [query, setQuery] = useState(EMPTY_QUERY)
  const [filteredGroupMap, setFilteredGroupMap] = useState({})
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(20)

  //const [width, height] = useWindowSize()

  const breakpoint = useBreakpoints()

  const imageMap: IFieldMap = {} //useImageMap(data)

  useEffect(() => {
    if (query !== "") {
      // const groupMap: any = {}

      // for (const g of GROUPS) {
      //   const people = []
      //   if (g in admin.groupMap) {
      //     for (const person of admin.groupMap[g]) {
      //       if (person.fields.name.toLowerCase().includes(query)) {
      //         people.push(person)
      //       }
      //     }
      //   }

      //   if (people.length > 0) {
      //     groupMap[g] = people
      //   }
      // }

      // setFilteredGroupMap(groupMap)

      setFilteredGroupMap(
        useBooleanSearch(
          query,
          allGroupMap,
          search,
          booleanSearchAnd,
          booleanSearchOr
        )
      )
    } else {
      setFilteredGroupMap([])
    }
  }, [query])

  const handleSearch = (text: string, clicked: boolean) => {
    setQuery(text)
  }

  const groupMap = query !== "" ? filteredGroupMap : allGroupMap

  // const renderStaff = (groupMap: any, breakpoint: string) => {
  //   if (Object.keys(groupMap).length > 0) {
  //     switch (breakpoint) {
  //       case "sm":
  //       case "md":
  //         return (
  //           <PeopleGroups
  //             groupMap={groupMap}
  //             cols={2}
  //             photoMode="show,generic,all"
  //             colWidth="w-9/20"
  //             imageMap={imageMap}
  //           />
  //         )
  //       case "lg":
  //         return (
  //           <PeopleGroups
  //             groupMap={groupMap}
  //             cols={3}
  //             photoMode="show,generic,all"
  //             colWidth="w-3/10"
  //             imageMap={imageMap}
  //           />
  //         )
  //       case "xl":
  //         return (
  //           <PeopleGroups
  //             groupMap={groupMap}
  //             photoMode="show,generic,all"
  //             cols={4}
  //             colWidth="w-23/100"
  //             imageMap={imageMap}
  //           />
  //         )
  //       case "2xl":
  //         return (
  //           <PeopleGroups
  //             groupMap={groupMap}
  //             photoMode="show,generic,all"
  //             cols={5}
  //             colWidth="w-19/100"
  //             imageMap={imageMap}
  //           />
  //         )
  //       default:
  //         // 3xl and aboves
  //         return (
  //           <PeopleGroups
  //             groupMap={groupMap}
  //             photoMode="show,generic,all"
  //             cols={6}
  //             colWidth="w-3/20"
  //             imageMap={imageMap}
  //           />
  //         )
  //     }
  //   } else {
  //     return <NoResults text="No staff found." />
  //   }
  // }

  return (
    <PageLayout
      path={STAFF_PATH}
      crumbs={[["Administration", STAFF_PATH]]}
      title={"Administration"}
      nav="Administration"
    >
      {/* <SearchBar
        handleInputChange={handleInputChange}
        placeholder="Search labs"
        text={query}
        className="my-4"
      /> */}

      <FlHdDiv>
        <Container>
          {/* <H1>Administrative Staff</H1> */}

          {/* {renderStaff(groupMap, breakpoint)} */}

          <PeopleGroups
            groupMap={groupMap}
            photoMode="show,generic,all"
            imageMap={imageMap}
            context="admin"
          />

          <VertTabs>
            <div id="Directors">
              <PeopleGrid
                name={"Directors"}
                imageMap={imageMap}
                people={useSortByTitle(
                  groupMap["admin::Director"],
                  "admin",
                  true
                )}
                showHeadings={false}
                showUrl={true}
                context="admin"
              />
            </div>

            <div id="Staff">
              <PeopleGrid
                name={"Administrator"}
                imageMap={imageMap}
                people={groupMap["admin::Administrator"]}
                context="admin"
              />

              <div className="mt-8">
                <PeopleGrid
                  name={"Administrative Staff"}
                  imageMap={imageMap}
                  people={groupMap["admin::Administrative Staff"]}
                  context="admin"
                />
              </div>
              <div className="mt-8">
                <PeopleGrid
                  name={"Website"}
                  imageMap={imageMap}
                  people={groupMap["admin::Web Site"]}
                  context="admin"
                  showUrl={true}
                />
              </div>
            </div>
          </VertTabs>
        </Container>
      </FlHdDiv>
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
  const people = getAllPeople()
  const peopleMap = getPeopleMap(people)

  const allPeopleGroupMap: IFieldMap = {}

  for (let person of people) {
    //allPeopleGroupMap[group.name] = []

    for (let group of person.fields.groups) {
      if (!(group in allPeopleGroupMap)) {
        allPeopleGroupMap[group] = []
      }

      allPeopleGroupMap[group].push(person)
    }
  }

  const adminGroupMap: IFieldMap = {}

  for (let g of Object.keys(allPeopleGroupMap)) {
    if (g.includes("admin")) {
      adminGroupMap[g] = allPeopleGroupMap[g]
    }
  }

  return {
    props: {
      allGroupMap: adminGroupMap,
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
