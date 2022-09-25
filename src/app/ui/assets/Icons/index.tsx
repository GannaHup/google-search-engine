import React from 'react'

// Common
import ChevronIcon from './common/icon_chevron'
import EmptyStateIcon from './common/icon_empty_state'
import LoadingBubbleIcon from './common/icon_loading_bubble'
import SearchIcon from './common/icon_search'

const iconTypes: any = {
  'empty-state': EmptyStateIcon,
  'loading-bubble': LoadingBubbleIcon,
  chevron: ChevronIcon,
  search: SearchIcon
}

interface Props {
  name: string
  width?: number
  height?: number
  color?: string
  path?: string
  index?: number
}

const IconComponent = (props: Props): any => {
  const name = props.name
  const Icon = iconTypes[name]

  if (name && iconTypes[name]) {
    return <Icon {...props} color={props.color} />
  } else {
    return ''
  }
}

export default IconComponent
