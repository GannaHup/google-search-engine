import React, { useEffect, useState } from "react"
import { ItemTabsTypes, TabsTypes } from "@/app/infrastructures/misc/types/components/Tabs.type"
import "./style.scss"

const Tabs = (props: TabsTypes) => {
  const { currentTab, customClass, itemTabs, onClick } = props
  const [classWrapper, setClassWrapper] = useState('')

  const onTabClick = (id: string) => {
    onClick(id)
  }

  useEffect(() => {
    let activeClass = 'wrapper-tabs'
    if (customClass) {
      activeClass += ` ${customClass}`
    } else {
      activeClass += ''
    }
    setClassWrapper(activeClass)
  }, [customClass])

  return (
    <div className={classWrapper}>
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
