import HomePage from '@/app/ui/views/Home/index'

const PATH = {
  HOME: '/',
}

export const MenuRoutes = [
  {
    path: PATH.HOME,
    name: 'Home',
    component: HomePage,
    exact: true,
  },
]
