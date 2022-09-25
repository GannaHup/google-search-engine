import Cookies from "js-cookie"

export const setCookies = (key: string, val: string) => {
  Cookies.set(key, val)
}

export const getCookies = (key: string) => {
  return Cookies.get(key)
}

export const setCookieEncode = async (key: string, payload: Object) => {
  const setValue = JSON.stringify(payload)
  await setCookies(key, setValue)
  return true
}

export const getCookieDecode = (key: string) => {
  const getKey = getCookies(key)
  if (getKey === "undefined" || getKey === undefined) {
    return null
  } else {
    return JSON.parse(getKey.split("%22").join(""))
  }
}
