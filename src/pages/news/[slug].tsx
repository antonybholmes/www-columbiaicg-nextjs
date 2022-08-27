import Container from "../../components/container"
//import CalEventSelector from "../../components/calendar/caleventselector"
import FullDiv from "../../components/fulldiv"
//import Breadcrumb from "../../components/breadcrumb2"
import FlHdDiv from "../../components/flhddiv"
import HTMLDiv from "../../components/htmldiv"
import FlatCard from "../../components/flatcard"
import GrayLink from "../../components/buttons/graylink"
import { useImageName } from "../../components/calendar/caleventdetails"
import Row from "../../components/row"
import CalEventDate from "../../components/calendar/caleventdate"
import MainSideCol from "../../components/mainsidecol"
import dayjs from "dayjs"
import NewsItem from "../../components/news/newsitem"
import PageLayout from "../../layouts/pagelayout"
import { ICAL_API } from "../../constants"
import { getNewsPosts, getNewsBySlug } from "../../lib/api"
import markdownToHtml from "../../lib/markdownToHtml"

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
  post?: any
}

const Page = ({ post }: PageProps) => (
  <PageLayout
    path={"/news"}
    crumbs={[
      ["News", "/news"],
      [post.fields.title, `/news/${post.slug}`],
    ]}
    title={post.fields.title}
    nav="News"
  >
    <FlHdDiv>
      <Container>
        <MainSideCol>
          <NewsItem newsItem={post} showLink={false} />

          <></>
        </MainSideCol>
      </Container>
    </FlHdDiv>
  </PageLayout>
)

export default Page

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getNewsBySlug(params.slug)

  const content = await markdownToHtml(post.fields.content || "")

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getNewsPosts(["slug"])

  return {
    paths: posts.map((post: any) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
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
