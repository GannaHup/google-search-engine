import axios from "axios"

const baseURL = 'https://google-search3.p.rapidapi.com/'

const GoogleSEApi = axios.create({
  baseURL: baseURL,
  headers: {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'ID',
    'X-RapidAPI-Key': 'faaaff0e2bmshf88522177f785cfp170d0djsnfc64583d63cb',
    'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
  }
})

GoogleSEApi.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

GoogleSEApi.interceptors.response.use(
  (res) => {
    return res
  },
  (error) => {
    if (error.response === undefined || error.response === "undefined") {
      return Promise.reject(error)
    }
    if (error.response.status) {
      return Promise.reject(error)
    }
  }
)

export default GoogleSEApi
