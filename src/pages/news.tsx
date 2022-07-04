import { useState } from "react"
import Container from "../components/container"
//import CalEventSelector from "../components/calendar/caleventselector"
import FullDiv from "../components/fulldiv"
//import Breadcrumb from "../components/breadcrumb2"
import FlHdDiv from "../components/flhddiv"
import HTMLDiv from "../components/htmldiv"
import FlatCard from "../components/flatcard"
import GrayLink from "../components/buttons/graylink"
import { useImageName } from "../components/calendar/caleventdetails"
import Row from "../components/row"
import CalEventDate from "../components/calendar/caleventdate"
import MainSideCol from "../components/mainsidecol"
import BlueButton from "../components/buttons/bluebutton"
import dayjs from "dayjs"
import NewsResults from "../components/news/newsresults"
import NewsItem from "../components/news/newsitem"
import PageLayout from "../layouts/pagelayout"
import { ICAL_API } from "../constants"
import { getNewsPosts } from "../lib/api"

type CalEventProps = {
  award: any
}

const SingleAward = ({ award }: CalEventProps) => {
  const title = award.fields.title

  const imageName = useImageName(award)

  return (
    <MainSideCol>
      <FullDiv className="md:mr-4">
        <FlatCard>
          <Row isVCentered={false}>
            <div className="w-28 min-w-28 mr-6 mb-8">
              <CalEventDate calEvent={award} />
            </div>
            <FullDiv>
              {/* <div className="mb-8">
                <EventImage name={imageName} imageMap={imageMap} size={72} />
              </div> */}
              <h2 className="m-0">{title}</h2>
              <div className="w-full mt-4">
                <h4>
                  <HTMLDiv o={award} />
                </h4>
              </div>
              <div className="mt-4">
                {/* <FontAwesomeIcon icon={["far", "calendar"]} className={`text-xl text-gray-500 mr-2`} /> */}
                <GrayLink to={award.icsFile}>Add To Calendar</GrayLink>
              </div>
            </FullDiv>
          </Row>
        </FlatCard>
      </FullDiv>

      <></>
    </MainSideCol>
  )
}

export const useNews = (data: any) => {
  const ret = []

  for (const { node } of data.news.edges) {
    const calEvent = node

    const title = calEvent.fields.title
    const start = dayjs(calEvent.fields.start)
    const end = dayjs(calEvent.fields.end)
    const formattedTitle = title.toLowerCase().replace(/ /g, "-")
    const formattedDate = start.format("YYYY-MM-DD")

    // calEvent.date = {
    //   year: start.getFullYear(),
    //   month: start.getMonth() + 1,
    //   day: start.getDate(),
    //   start: start.getHours(),
    // }

    calEvent.id = `${formattedTitle}-${formattedDate}`
    calEvent.icsFile = `${ICAL_API}?id=${calEvent.id}`

    calEvent.start = start
    calEvent.end = end

    ret.push(calEvent)
  }

  return ret
}

interface PageProps {
  allNews?: any[]
  filterEventTypes?: string[]
}

const Page = ({ allNews = [], filterEventTypes = [] }: PageProps) => {
  const [page, setPage] = useState(1)
  const [recordsPerPage, setRecordsPerPage] = useState(20)

  //const imageMap = useImageMap(data)

  const offset = 0 //(page - 1) * recordsPerPage

  const handleShowMoreClick = (e: any) => {
    setRecordsPerPage(2 * recordsPerPage)
  }

  const onPageChanged = (data: any) => {
    const { page } = data
    setPage(page)
  }

  let news

  // Filter by types
  if (filterEventTypes.length > 0) {
    news = allNews.filter((e: any) => {
      for (let t of filterEventTypes) {
        if (e.fields.tagList.includes(t)) {
          return true
        }
      }

      return false
    })
  } else {
    news = allNews
  }

  let pagedNews = news.slice(offset, offset + recordsPerPage)

  return (
    <PageLayout
      path={"/news"}
      crumbs={[["News", "/news"]]}
      title={"News"}
      nav="News"
    >
      <FlHdDiv>
        <Container>
          <MainSideCol>
            <FullDiv>
              <NewsResults
                news={news}
                pagedNews={pagedNews}
                page={page}
                recordsPerPage={recordsPerPage}
                onPageChanged={onPageChanged}
              />

              {recordsPerPage < allNews.length && (
                <Row isCentered={true} className="mt-8">
                  <div>
                    <BlueButton onClick={handleShowMoreClick}>
                      More Awards
                    </BlueButton>
                  </div>
                </Row>
              )}
              {/* </FlatCard> */}
            </FullDiv>
            <></>
          </MainSideCol>
        </Container>
      </FlHdDiv>
    </PageLayout>
  )
}

export default Page

export async function getStaticProps() {
  const allNews = getNewsPosts()

  return {
    props: {
      allNews,
    },
  }
}

// export const query = graphql`
//   query {
//     news: allMarkdownRemark(
//       sort: { fields: fields___start, order: DESC }
//       filter: { fileAbsolutePath: { regex: "/news/" } }
//     ) {
//       edges {
//         node {
//           fields {
//             id
//             title
//             photo
//             start
//             url
//             peopleList
//             tagList
//           }
//           excerpt(format: HTML)
//           html
//         }
//       }
//     }

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
//   }
// `
