export interface ItemTabsTypes {
  id: string
  label: string
}

export interface TabsTypes {
  currentTab: string
  customClass?: string
  itemTabs: ItemTabsTypes[]
  onClick: (id: string) => void
}
