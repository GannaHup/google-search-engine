import React from "react"
import { ItemTabsTypes, TabsTypes } from "@/app/infrastructures/misc/types/components/Tabs.type"
import "./style.scss"

const Tabs = (props: TabsTypes) => {
  const { currentTab, itemTabs, onClick } = props

  const onTabClick = (id: string) => {
    onClick(id)
  }

  return (
    <div className="wrapper-tabs">
      {itemTabs.map((tab: ItemTabsTypes, idx: number) => {
        return (
          <div
            id={tab.id}
            className={currentTab === tab.id ? 'tab-active' : 'tab'}
            key={idx}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </div>
        )
      })}
    </div>
  )
}

export default Tabs
