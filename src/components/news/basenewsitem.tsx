import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import dayjs from "dayjs"
import { useState } from "react"
import AltView from "../altview"
import HTMLDiv from "../htmldiv"
import ZoomImage from "../images/zoomimage"
import BlueLink from "../buttons/bluelink"
import Row from "../row"
import { IMAGEKIT_URL, NEWS_PATH } from "../../constants"
import BaseLink from "../buttons/baselink"
import { faTags } from "@fortawesome/free-solid-svg-icons"

const title = (newsItem: any, date: any, showLink: boolean) => (
  <>
    <div className="my-2">
      <h1>
        {showLink ? (
          <BlueLink underline={false} to={`${NEWS_PATH}/${newsItem.fields.id}`}>
            {newsItem.fields.title}
          </BlueLink>
        ) : (
          newsItem.fields.title
        )}
      </h1>
    </div>

    <div className="font-light text-gray-500">
      {date.format("MMMM DD, YYYY")}
    </div>
  </>
)

const taglist = (newsItem: any) => (
  <Row className="my-4">
    <div className="mr-2">
      <FontAwesomeIcon icon={faTags} />
    </div>

    <ul>
      {newsItem.fields.tagList.map((t: any, index: number) => {
        return (
          <li
            className={`text-sm font-medium bg-gray-100 hover:bg-gray-200 trans-ani rounded px-3 py-1 mt-2 inline ${
              index > 0 ? "ml-2" : ""
            }`}
            key={index}
          >
            <BaseLink to={useTypeUrl(NEWS_PATH, t)}>{t}</BaseLink>
          </li>
        )
      })}
    </ul>
  </Row>
)

const useTypeUrl = (root: string, eventType: string) => {
  return `${root}/topics/${eventType.replace(/ /g, "-").toLowerCase()}`
}

export type NewsItemProps = {
  newsItem: any
  showLink?: boolean
}

const BaseNewsItem = ({ newsItem, showLink = true }: NewsItemProps) => {
  const [hover, setHover] = useState(false)

  const onMouseEnter = (e: any) => {
    setHover(true)
  }

  const onMouseLeave = (e: any) => {
    setHover(false)
  }

  const date = dayjs(newsItem.fields.start)

  let fluid = undefined

  if ("photo" in newsItem.fields) {
    fluid = `news/${newsItem.fields.photo}.jpg`
  }

  return (
    <AltView size="lg">
      <>
        {title(newsItem, date, showLink)}

        {taglist(newsItem)}

        {fluid && (
          <div className="w-48 h-48 my-4">
            <ZoomImage
              src={fluid}
              alt={newsItem.fields.title}
              className="w-full h-full"
            />
          </div>
        )}

        <HTMLDiv o={newsItem} />
      </>

      <Row isVCentered={false}>
        <div className="pr-8">
          {title(newsItem, date, showLink)}
          {taglist(newsItem)}

          <HTMLDiv o={newsItem} />
        </div>

        {fluid && (
          <div className="min-w-48 h-48 rounded-full overflow-hidden">
            <ZoomImage
              src={fluid}
              alt={newsItem.fields.title}
              className="w-full h-full"
            />
          </div>
        )}
      </Row>
    </AltView>
  )
}

export default BaseNewsItem
