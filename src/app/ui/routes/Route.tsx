import React from 'react'
import { Route } from "react-router-dom"
import { IRoute } from '@/app/infrastructures/misc/types/common/Route'
import MainLayout from '../layout'

export default function RouteWrapper(props: IRoute) {
  const { component: Component, ...rest } = props
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <MainLayout name={rest.name}>
            <Component {...props} />
          </MainLayout>
        )}
      }
    />
  )
}
