import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from "react-router-dom"

export interface IRoute {
  key: number
  path: string
  name: string
  component: FunctionComponent<RouteComponentProps>
  exact?: boolean
}
