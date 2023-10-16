import { EJuejinKeyword } from "~types"
import {
  bodyHandlerEntry,
  commonHeaderHandlerEntry,
  getDomainFromDetails
} from "~utils"
import { juejinLogic } from "~utils/module"

chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    if (details?.initiator?.startsWith("chrome-extension://"))
      return { cancel: false }
    commonHeaderHandlerEntry(details)
    return { cancel: false }
  },
  { urls: [`${EJuejinKeyword.签到接口地址}*`] },
  ["requestHeaders", "extraHeaders"]
)

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (details?.initiator?.startsWith("chrome-extension://"))
      return { cancel: false }

    const domain = getDomainFromDetails(details)
    bodyHandlerEntry(details.requestBody, domain)
    return { cancel: false }
  },
  { urls: [`${EJuejinKeyword.签到接口地址}*`] },
  ["requestBody", "extraHeaders"]
)

chrome.tabs.onActivated.addListener((activeInfo) => {
  console.log("active page:", activeInfo)
  // 激活页面的时候，自动尝试签到
  juejinLogic()
})
