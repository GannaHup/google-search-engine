import MainPage from '@/app/ui/views/Apps'

const PATH = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  CERTIFICATES: '/certificates'
}

export const MenuRoutes = [
  {
    path: PATH.HOME,
    name: 'Home',
    component: MainPage,
    exact: true,
  },
]

export const MenuSidebar = [
  {
    path: PATH.HOME,
    label: `I'm Ganna`,
    icon: 'cubes',
  },
  {
    path: PATH.ABOUT,
    label: 'About',
    icon: 'product',
  },
  {
    path: PATH.PROJECTS,
    label: 'Projects',
    icon: 'product',
  },
  {
    path: PATH.CERTIFICATES,
    label: 'Certificate',
    icon: 'certificate',
  }
]
