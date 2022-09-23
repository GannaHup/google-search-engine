import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import store from "@/app/ui/stores"
import App from './App'
import '@/app/ui/assets/styles/index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <App />
  </Provider>
)
