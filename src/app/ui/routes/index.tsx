import React from 'react'
import { Switch } from 'react-router-dom'
import { MenuRoutes } from './menus'
import Route from './Route'

const Routes = () => {
  return (
    <Switch>
      {MenuRoutes.map((menu, idx: number) => {
        return (
          <Route
            key={idx}
            path={menu.path}
            name={menu.name}
            component={menu.component}
            exact={menu.exact}
          />
        )
      })}
    </Switch>
  )
}

export default Routes
