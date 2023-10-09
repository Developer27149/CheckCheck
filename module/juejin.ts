import { getHeaderFromRequestHeaders, saveWebsiteHeader } from "./help"

import { EWebsite } from "~types"
import { getRequestBodyFromWebRequestBodyDetails } from "~utils"

/**
 * juejin.cn 模块
 */
export const juejinUploadDataHandler = async (
  details: chrome.webRequest.WebRequestBodyDetails
) => {
  console.log("juejin request:", details)
  const { method, requestBody } = details
  if (method === "POST") {
    const uploadData = getRequestBodyFromWebRequestBodyDetails(requestBody)
    console.log("juejin upload data:", uploadData)
  }
}

export const juejinHeaderHandler = async (
  details: chrome.webRequest.WebRequestHeadersDetails
) => {
  console.log("raw details:", details)
  const { url, requestHeaders } = details
  if (url.startsWith(EWebsite.juejinCheckInUrl)) {
    // resolve headers
    const header = getHeaderFromRequestHeaders(requestHeaders)
    console.log("juejin header:", header)
    saveWebsiteHeader(EWebsite.juejinHeader, header)
  }
}
