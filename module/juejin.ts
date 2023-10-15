import { endOfDay, subDays } from "date-fns"
import { isNumber } from "lodash-es"

import { EJuejinKeyword, EJuejinStorageKey } from "~types"
import { getRequestBodyFromWebRequestBodyDetails } from "~utils"
import { getFromStorage, saveToStorage } from "~utils/storage"

import { getHeaderFromRequestHeaders } from "./help"

/**
 * juejin.cn 模块
 */
export const juejinUploadDataHandler = async (
  details: chrome.webRequest.WebRequestBodyDetails
) => {
  if (!details) return
  const { method = "", requestBody } = details
  if (method === "POST") {
    const uploadData = getRequestBodyFromWebRequestBodyDetails(requestBody)
    saveToStorage(EJuejinStorageKey.请求凭证, uploadData)
  }
}

export const juejinHeaderHandler = async (
  details: chrome.webRequest.WebRequestHeadersDetails
) => {
  const { url, requestHeaders } = details
  if (url.startsWith(EJuejinKeyword.签到接口地址)) {
    const header = getHeaderFromRequestHeaders(requestHeaders)
    saveToStorage(EJuejinStorageKey.请求头, header)
  }
}

// 签到模块
getFromStorage(EJuejinStorageKey.签到启用状态)
  .then((isEnable) => {
    console.log("is enable:", isEnable)
    if (isEnable) {
      return getFromStorage<number>(EJuejinStorageKey.签到记录)
    }
  })
  .then((record) => {
    const yesterday = subDays(new Date(), 1)
    // 如果存在签到记录，且签到记录是今天之前的，那么读取请求头和请求体进行签到
    console.log("record...", record)
    if (!!record === true && record < endOfDay(yesterday).getTime()) {
      return Promise.all([
        getFromStorage<object>(EJuejinStorageKey.请求头),
        getFromStorage<object>(EJuejinStorageKey.请求凭证)
      ])
    }
  })
  .then((data) => {
    console.log("header and body:", data)
    if (data) {
      const [header, body] = data
      // 尝试签到
      const url = `${EJuejinKeyword.签到接口地址}${Object.entries(body).reduce(
        (prev, [key, value]) => {
          return `${prev}${key}=${value}&`
        },
        ""
      )}`
      fetch(url, {
        method: "GET",
        headers: header as any
      })
        .then((res) => {
          console.log("res:", res)
        })
        .catch((error) => {
          console.log("fetch error:", error)
        })
    }
  })
  .catch((error) => {
    console.log("掘金签到失败:", error)
  })

console.log("hello from background message...")
