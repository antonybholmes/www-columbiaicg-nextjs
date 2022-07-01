import React, { ReactElement, useEffect, useRef, useState } from "react"
import Row from "../row"
import AltView from "../altview"
import VertTab from "./verttab"
import { gsap } from "gsap"

type TabsProps = {
  tab?: number
  className?: string
  children?: ReactElement[]
}

const VertTabs = ({ tab = 0, className, children = []}:TabsProps) => {
  let tabListRef = useRef(null)

  const [activeTab, setActiveTab] = useState(tab)
  const [tabs, setTabs] = useState<ReactElement[]>([])
  const [vertTabs, setVertTabs] = useState<ReactElement[]>([])

  useEffect(() => {
    setTabs(
      children.map((child: ReactElement, index: number) => {
        return child
      })
    )
  }, [])

  useEffect(() => {
    setVertTabs(
      tabs.map((child: ReactElement, index: number) => {
        const { id } = child.props

        return (
          <VertTab
            activeTab={index === activeTab}
            key={id}
            id={id}
            index={index}
            n={tabs.length}
            onClick={onClickTabItem}
          />
        )
      })
    )
  }, [activeTab, tabs])

  useEffect(() => {
    gsap.killTweensOf("#tabblock")

    const tl = gsap.timeline()

    tl.to(
      "#tabblock",
      { duration: 0.3, y: `${activeTab * 2.5}rem`, ease: "power3.out" },
      "+=0.0"
    )
  }, [activeTab])

  const onClickTabItem = (event: any) => {
    setActiveTab(parseInt(event.target.getAttribute("index")))
  }

  return (
    <AltView size="lg" className={className}>
      {/* <Tabs tab={tab}>{children}</Tabs> */}

      <div className="mt-8">
        {tabs.map((child: any) => {
          return child //.props.children
        })}
      </div>

      <Row isVCentered={false}>
        {/* <div className="w-3/20 mr-8 border-r border-solid border-cuimc-dark-gray min-h-80"> */}
        <div className="relative w-1/5 2xl:w-3/20 mr-12 min-h-80">
          <div
            id="tabblock"
            className="absolute h-10 bg-cuimc-button-blue-15 rounded w-full right-0"
            style={{ top: 0 }}
          />

          <ul ref={tabListRef} className="absolute inline-block w-full">
            {vertTabs}
          </ul>
        </div>
        <div className="w-4/5 2xl:w-17/20">{tabs[activeTab]}</div>
      </Row>
    </AltView>
  )
}



export default VertTabs
