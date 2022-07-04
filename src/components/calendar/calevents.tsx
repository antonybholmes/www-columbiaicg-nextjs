import dayjs from "dayjs"
import { ReactNode } from "react"
import CalEvent2 from "./calevent2"

type EventListItemProps = {
  index: number
  className?: string
  children?: ReactNode
}

export const EventListItem = ({
  index,
  className,
  children,
}: EventListItemProps) => (
  <li
    className={`mb-6 bg-white overflow-hidden trans-ani ${
      index > 0 ? "border-t border-solid border-cuimc-dark-gray" : ""
    } ${className}`}
  >
    <div className={`${index > 0 ? "mt-6" : ""}`}>{children}</div>
  </li>
)

// export const EventMonthItem: React.FC = ({ children }) => (
//   <li>
//     {/* <h4 className="text-center bg-cuimc-gray border-t-4 border-solid border-gray-300 text-gray-500 font-medium py-3 mb-4">
//       {children}
//     </h4> */}
//     <div className="relative h-24">
//       <hr className="absolute border-t border-b border-solid border-gray-200 w-full top-1/2" />

//       <h5
//         className="absolute top-1/2 left-1/2 text-gray-400 font-medium bg-white px-4 whitespace-nowrap"
//         style={{ transform: "translate(-50%, -50%)" }}
//       >
//         {children}
//       </h5>
//     </div>
//   </li>
// )

interface EventMonthItemProps {
  children: ReactNode
}

export const EventMonthItem = ({ children }: EventMonthItemProps) => (
  <li className="block border-t-8 border-solid border-gray-100 pt-4 pb-8 text-gray-400 font-medium uppercase tracking-wide">
    {children}
  </li>
)

export const sortByMonth = (events: any[]) => {
  const ret: any[] = []

  let currentMonth = ""

  events.forEach((event: any) => {
    const month = dayjs(event.fields.start).format("MMMM YYYY")

    if (month != currentMonth) {
      ret.push({ month: month, events: [] })
      currentMonth = month
    }

    ret[ret.length - 1].events.push(event)
  })

  return ret
}

interface CalEventsProps {
  calEvents: any[]
}

const CalEvents = ({ calEvents }: CalEventsProps) => {
  const ret: any[] = []

  let i: number = 0

  sortByMonth(calEvents).forEach((m: any) => {
    ret.push(<EventMonthItem key={i}>{m.month}</EventMonthItem>)
    ++i
    m.events.forEach((e: any, index: number) => {
      ret.push(
        <EventListItem key={i} index={index}>
          <CalEvent2 event={e} />
        </EventListItem>
      )
      ++i
    })
  })

  return <ul className="w-full">{ret}</ul>
}

export default CalEvents
