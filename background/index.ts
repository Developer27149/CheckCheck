import { EJuejinKeyword } from "~types";
import { bodyHandlerEntry, commonHeaderHandlerEntry, getDomainFromDetails } from "~utils";





chrome.webRequest.onBeforeSendHeaders.addListener(
  function (details) {
    commonHeaderHandlerEntry(details)
    return { cancel: false }
  },
  { urls: [`${EJuejinKeyword.签到接口地址}*`] },
  ["requestHeaders", "extraHeaders"]
)

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const domain = getDomainFromDetails(details)
    bodyHandlerEntry(details.requestBody, domain)
    return { cancel: false }
  },
  { urls: [`${EJuejinKeyword.签到接口地址}*`] },
  ["requestBody", "extraHeaders"]
)