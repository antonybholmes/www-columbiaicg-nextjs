import { GROUPS } from "../../constants"
import PeopleGrid from "./peoplegrid"

interface PeopleGroupsProps {
  groupMap: any
  colWidth?: string
  smallView?: boolean
  showHeadings?: boolean
  faculty?: any
  headingColor?: string
  photoMode?: string
  showUrl?: boolean
  context?: string
  gridBg?: string
  showLetters?: boolean
  outline?: boolean
  className?: string
}

const PeopleGroups = ({
  groupMap,
  colWidth = "w-full sm:w-9/20 lg:w-3/10 xl:w-22/100 2xl:w-18/100",
  smallView = false,
  showHeadings = true,
  faculty = null,
  headingColor = "text-slate-700 md:text-slate-600",
  photoMode = "show,generic",
  showLetters = false,
  showUrl = false,
  outline = false,
  context = "",
  className,
}: PeopleGroupsProps) => {
  const ret = []

  for (const g of GROUPS) {
    if (g in groupMap) {
      const people = groupMap[g]
      //context = g

      if (people.length > 0) {
        ret.push(
          <PeopleGrid
            key={g}
            name={g}
            people={people}
            faculty={faculty}
            colWidth={colWidth}
            smallView={smallView}
            headingColor={headingColor}
            photoMode={photoMode}
            context={context}
            showHeadings={showHeadings}
            showUrl={showUrl}
            outline={outline}
            showLetters={showLetters}
            className={className}
          />
        )
      }
    }
  }

  return <div>{ret}</div>
}

export default PeopleGroups
