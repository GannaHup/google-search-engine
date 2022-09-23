import HomePage from '@/app/ui/views/Home/index'
import ResultPage from '@/app/ui/views/Result'

const PATH = {
  HOME: '/',
  RESULT: '/result'
}

export const MenuRoutes = [
  {
    path: PATH.HOME,
    name: 'Home',
    component: HomePage,
    exact: true,
  },
  {
    path: PATH.RESULT,
    name: 'Result',
    component: ResultPage,
    exact: true,
  },
]
