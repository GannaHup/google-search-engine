import React from 'react'

// Common
import LoadingBubbleIcon from './common/icon_loading_bubble'
import SearchIcon from './common/icon_search'

const iconTypes: any = {
  search: SearchIcon,
  'loading-bubble': LoadingBubbleIcon
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
