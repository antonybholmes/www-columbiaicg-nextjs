import dayjs from "dayjs"
import BaseNewsItem, { NewsItemProps } from "./basenewsitem"

const NewsItem = ({ newsItem, showLink = true }: NewsItemProps) => {
  const date = dayjs(newsItem.fields.start)

  return <BaseNewsItem newsItem={newsItem} showLink={showLink} />
}

export default NewsItem
