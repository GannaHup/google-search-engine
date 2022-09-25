<div align="center">
  <a href="https://g-goose.netlify.app/">
    <img src="https://user-images.githubusercontent.com/86098273/192129086-53f7017e-0161-48f8-a1e9-47a15aadb940.png" alt="Logo">
  </a>
  <br />
  <h4>Goose</h4>
  <span>Google Search Engine</span>
  <br />
  [<a href="https://g-goose.netlify.app/">See Apps</a>]
</div>

#### FOLDER STRUCTURE IN THIS PROJECT

Contains information how this project conventions, pattern, and flows.

Generally this project is divided to 2 layers: `App`, `Data`

```
+ src
  + app
    + infrastructures
      + misc (Contains miscellanous function needed in the app layer)
        + constants (Defining data static)
          + actions (Data Static for actions store)
          + common (Data static for common apps)
        + types (Contains type or interface for ui requirement)
          + common (Type or interface for common)
          + components (Type or interface for components)
          + store (Type or interface for stores)
        + utils (Small function reusable)
      + services (Defining core/initial service and configuration that will be used)
    + ui
      + assets (Contains assets like fonts, icons, styles global & images)
      + components (Contains low-level reusable component)
        + atoms (Smallest component)
        + molecules (A combination of several atomic components)
      + layout (Contains the root generic container of UI that always shows in the page, example: Header, Sidebar)
      + router (Defining available route and permission logic)
      + stores (Setup stores)
      + views (Contains UI of the page)
  + data
    + responses
      + contracts (Defining type or interface of response)
  - App.tsx
  - main.tsx
```



## Built with

- [TypeScript](https://www.typescriptlang.org/)
- [React v18](https://reactjs.org/)
- [Redux](https://react-redux.js.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Tailwind CSS](https://tailwindcss.com/)
- [React-Router-DOM](https://v5.reactrouter.com/web/guides/quick-start)
- [SASS](https://sass-lang.com/)
- [Vite](https://vitejs.dev/)


## Project setup

1. Clone this repository with SSH
```
  $ git clone git@github.com:GannaHup/google-search-engine.git
```

2. Before your run this project: install all packages needed
```
  $ yarn ci
```
3. Run this project with command:
```
  $ yarn dev
```


### Compiles and minifies for production

```
yarn run build

or

yarn build
```
