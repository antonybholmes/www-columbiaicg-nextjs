import React, { ReactNode, useState } from "react"
import useCollapse from "react-collapsed"
import CollapseBar from "./collapsebar"

type CollapsibleProps = {
  title?: string
  headerClassName?: string
  children?: ReactNode
}

const Collapsible2 = ({ title, children }: CollapsibleProps) => {
  const [hover, setHover] = useState(false)

  const [isExpanded, setExpanded] = useState(true)
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded })

  const toggle = () => {
    setExpanded(!isExpanded)
  }

  const onMouseEnter = () => {
    setHover(true)
  }

  const onMouseLeave = () => {
    setHover(false)
  }

  return (
    <div
      className="w-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {/* <Row
        className={`py-4 border-t border-solid border-slate-200 text-slate-400 cursor-pointer w-full justify-between`}
        onClick={toggle}
        aria-label={`Collapse ${title}`}
      >
        <div>
          {title !== "" && (
            <h4 className={`uppercase tracking-wide ${headerClassName}`}>
              {title}
            </h4>
          )}
        </div>
        <div>
          <FontAwesomeIcon
            icon={_height === "0" ? "chevron-down" : "chevron-up"}
            className={`text-lg`}
          />
        </div>
      </Row> */}

      <div
        className={`relative cursor-pointer trans-ani w-full`}
        onClick={toggle}
        aria-label={`Collapse ${title}`}
      >
        <CollapseBar title={title} isExpanded={isExpanded} onClick={toggle} />
      </div>

      <div className="mt-4" {...getCollapseProps()}>
        {children}
      </div>

      {/* <Row className="justify-end pt-4">
        <FontAwesomeIcon
          icon={_height === "0" ? "chevron-down" : "chevron-up"}
          size="sm"
          className="text-slate-400 cursor-pointer trans-ani hover:text-black"
          onClick={toggle}
        />
      </Row> */}
    </div>
  )
}

export default Collapsible2
