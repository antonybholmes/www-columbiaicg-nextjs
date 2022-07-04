import {
  EventListItem,
  EventMonthItem,
  sortByMonth,
} from "../calendar/calevents"
import NewsItem from "./newsitem"

interface AllNewsProps {
  items: any[]
}

const AllNews = ({ items }: AllNewsProps) => {
  const ret: any[] = []

  let i: number = 0

  sortByMonth(items).forEach((m: any) => {
    ret.push(<EventMonthItem key={i}>{m.month}</EventMonthItem>)
    ++i
    m.events.forEach((a: any, index: number) => {
      ret.push(
        <EventListItem key={i} index={index} className="md:py-4">
          <NewsItem newsItem={a} />
        </EventListItem>
      )
      ++i
    })
  })

  return <ul className="w-full">{ret}</ul>
}

export default AllNews
