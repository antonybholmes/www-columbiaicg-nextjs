import React, { useState } from "react"
import useCollapse from "react-collapsed"
import CheckMark from "../buttons/checkmark"
import CollapseBar from "../collapsebar"

type JournalProps = {
  index: number
  journal: [string, number]
  selected: boolean
  onClick: any
}

const Journal: React.FC<JournalProps> = ({
  index,
  journal,
  selected,
  onClick,
}) => {
  const [hover, setHover] = useState(false)

  const mouseEnterHandler = (e: any) => {
    setHover(true)
  }

  const mouseLeaveHandler = (e: any) => {
    setHover(false)
  }

  return (
    <li>
      <button
        className={`flex flex-row items-center justify-start text-sm w-full py-1`}
        onClick={() => onClick(index, !selected)}
        onMouseEnter={mouseEnterHandler}
        onMouseLeave={mouseLeaveHandler}
      >
        <CheckMark selected={selected} hover={hover} className="mr-4" />

        <div
          className={`trans-ani truncate mr-2 w-full text-left ${
            hover && !selected ? "text-cuimc-button-blue" : ""
          }`}
        >
          {journal[0]}
        </div>

        <div className="text-xs text-default-gray">({journal[1]})</div>
      </button>

      {/* <CheckBox onChange={() => onClick(journal[0], !selected)} selected={selected}>{`${useElipsis(journal[0])} (${journal[1]})`}</CheckBox> */}
    </li>
  )
}

type JournalFilterProps = {
  journals: [string, number][]
  selected: Set<number>
  onClick: any
}

const JournalFilter = ({ journals, selected, onClick }: JournalFilterProps) => {
  const [isExpanded, setExpanded] = useState(false)
  const { getCollapseProps, getToggleProps } = useCollapse({
    isExpanded,
    collapsedHeight: 170,
  })

  return (
    <>
      <CollapseBar
        title="Top Journals"
        isExpanded={isExpanded}
        onClick={() => setExpanded(prevExpanded => !prevExpanded)}
        isSmall={true}
        className="mt-8 mb-2"
      />
      <div className="relative">
        <ul {...getCollapseProps()}>
          {journals.map((journal: any, index: number) => {
            return (
              <Journal
                index={index}
                journal={journal}
                selected={selected.has(index)}
                key={index}
                onClick={onClick}
              />
            )
          })}
        </ul>
        {!isExpanded && (
          <div
            className="absolute w-full bottom-0 h-8"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255, 0.8) 50%, rgba(255,255,255, 1) 100%)",
            }}
          />
        )}
      </div>
      <button
        className="text-sm text-cuimc-button-blue my-4"
        {...getToggleProps({
          onClick: () => setExpanded(prevExpanded => !prevExpanded),
        })}
      >
        {isExpanded ? "Show less" : "Show all"}
      </button>
    </>
  )
}

export default JournalFilter
