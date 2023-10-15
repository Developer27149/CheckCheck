export const getHeaderFromRequestHeaders = (
  requestHeaders: chrome.webRequest.HttpHeader[]
) => {
  return requestHeaders.reduce((acc, cur) => {
    acc[cur.name] = cur.value
    return acc
  }, {} as Record<string, string>)
}