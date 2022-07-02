import React from "react"
import { GROUPS } from "../../constants"
import PeopleGrid from "./peoplegrid"

type PeopleGroupsProps = {
  groupMap: any
  imageMap?: any
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

const PeopleGroups: React.FC<PeopleGroupsProps> = ({
  groupMap,
  imageMap,
  colWidth,
  smallView,
  showHeadings,
  faculty,
  headingColor,
  photoMode,
  showLetters,
  showUrl,
  outline,
  context,
  gridBg,
  className,
}) => {
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
            imageMap={imageMap}
            people={people}
            faculty={faculty}
            colWidth={colWidth}
            smallView={smallView}
            headingColor={headingColor}
            photoMode={photoMode}
            context={context}
            showHeadings={showHeadings}
            showUrl={showUrl}
            gridBg={gridBg}
            outline={outline}
            showLetters={showLetters}
            className={className}
          />
        )
      }
    }
  }

  return ret
}

PeopleGroups.defaultProps = {
  faculty: null,
  imageMap: {},
  photoMode: "show,generic",
  smallView: false,
  showHeadings: true,
  showUrl: false,
  colWidth: "w-full sm:w-9/20 lg:w-3/10 xl:w-22/100 2xl:w-18/100",
  headingColor: "text-slate-700 md:text-slate-600",
  context: "",
  gridBg: "bg-white",
  outline: false,
  showLetters: false,
  className: "",
}

export default PeopleGroups
