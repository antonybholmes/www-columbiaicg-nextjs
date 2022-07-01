import React, { useState } from "react"
import Tab from "./tab"
import Row from "../row"

import AltView from "../altview"

type TabsProps = {
  tab?: string
}

const Tabs: React.FC<TabsProps> = ({ tab, children }) => {
  const [activeTab, setActiveTab] = useState(
    tab !== "" ? tab : children[0].props.id
  )

  const onClickTabItem = (tab: string) => {
    setActiveTab(tab)
  }

  let tabContent = undefined

  for (let child of children) {
    if (child.props.id === activeTab) {
      tabContent = child //.props.children
      break
    }
  }

  return (
    <AltView>
      <div className="mt-8">
        {children.map((child: any) => {
          return child //.props.children
        })}
      </div>

      <div>
        <div className="border-b border-solid border-cuimc-dark-gray w-full">
          <Row className="w-full justify-center md:justify-start">
            {children.map((child: any, index: number) => {
              const { id } = child.props

              return (
                <Tab
                  activeTab={activeTab}
                  key={id}
                  id={id}
                  index={index}
                  n={children.length}
                  onClick={onClickTabItem}
                />
              )
            })}
          </Row>
        </div>
        <div>{tabContent}</div>
      </div>
    </AltView>
  )
}

Tabs.defaultProps = {
  tab: "",
}

export default Tabs
