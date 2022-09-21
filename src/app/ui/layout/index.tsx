import React from "react";
import './style.scss'
import { IMainLayout } from "./type";

const MainLayout = (props: IMainLayout) => {
  const { children, name } = props
  return (
    <div className="wrapper-main-layout">
      {children}
    </div>
  )
}

export default MainLayout
