import {
  bodyHandlerEntry,
  commonHeaderHandlerEntry,
  domainCheckEntry,
  getDomainFromDetails
} from "~utils"

import { EWebsite } from "~types"

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    commonHeaderHandlerEntry(details)
    return { cancel: false }
  },
  { urls: [EWebsite.juejin] },
  ["requestHeaders", "extraHeaders"]
)

// chrome.webRequest.onBeforeRequest.addListener(
//   function (details) {
//     // console.log("before request:", details?.requestBody)
//     // details?.requestBody?.raw?.forEach((item) => {
//     //   if (item.bytes) {
//     //     const str = new TextDecoder("utf-8").decode(item.bytes)
//     //     console.log("before request:", str)
//     //   }
//     // })
//     const domain = getDomainFromDetails(details)
//     bodyHandlerEntry(details.requestBody, domain)
//     console.log(details)
//     return { cancel: false }
//   },
//   { urls: [EWebsite.juejin] },
//   ["requestBody", "extraHeaders"]
// )
