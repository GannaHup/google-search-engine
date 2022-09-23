export const isOnlyWhiteSpace = (str: string) => {
  return /^\s*$/.test(str)
}

export const queryString = (query: string) => {
  const urlSearchParams = new URLSearchParams(query)
  const params = Object.fromEntries(urlSearchParams.entries())
  return params
}

export const toSnakeCase = (input: string) => {
  return (
    input[0].toLowerCase() +
    input
      .slice(1, input.length)
      .replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
  )
}

export const serializeQuery = (query: any) => {
  return Object.keys(query)
    .map(key => {
      const formattedKey = toSnakeCase(key)
      return `${encodeURIComponent(formattedKey)}=${query[key]}`
    })
    .join("&")
}
