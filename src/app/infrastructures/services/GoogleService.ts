import axios from "axios"

const baseURL = 'https://google-search3.p.rapidapi.com/'

const GoogleSEApi = axios.create({
  baseURL: baseURL,
  headers: {
    'X-User-Agent': 'desktop',
    'X-Proxy-Location': 'ID',
    'X-RapidAPI-Key': 'c8b0fb49c9msh7bdb20b120da60bp1846d9jsna26f02a514b1',
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
