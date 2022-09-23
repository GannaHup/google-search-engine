export interface ItemTabsTypes {
  id: string
  label: string
}

export interface TabsTypes {
  currentTab: string
  itemTabs: ItemTabsTypes[]
  onClick: (id: string) => void
}
