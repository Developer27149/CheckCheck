import { EJuejinKeyword, EJuejinStorageKey } from "~types"
import { getRequestBodyFromWebRequestBodyDetails } from "~utils"
import { saveToStorage } from "~utils/storage"

import { getHeaderFromRequestHeaders } from "./help"

/**
 * juejin.cn 模块
 */
export const juejinUploadDataHandler = async (
  details: chrome.webRequest.WebRequestBodyDetails
) => {
  if (!details) return
  const { requestBody } = details
  const uploadData = getRequestBodyFromWebRequestBodyDetails(requestBody)
  saveToStorage(EJuejinStorageKey.请求凭证, uploadData)
}

export const juejinHeaderHandler = async (
  details: chrome.webRequest.WebRequestHeadersDetails
) => {
  const { url, requestHeaders, method } = details
  if (url.startsWith(EJuejinKeyword.签到接口地址)) {
    const header = getHeaderFromRequestHeaders(requestHeaders)
    saveToStorage(EJuejinStorageKey.请求头, header)
    saveToStorage(EJuejinStorageKey.url, url)
    saveToStorage(EJuejinStorageKey.method, method)
  }
}
