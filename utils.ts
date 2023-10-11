import { getSyncCheckStatusRecord } from "~module/help"
import { juejinHeaderHandler, juejinUploadDataHandler } from "~module/juejin"
import { EStorageKey, EWebsite } from "~types"

export const getDomainFromDetails = (
  details: chrome.webRequest.WebRequestDetails
) => {
  const { url } = details
  return url.split("/")[2]
}

const headerHandlerRecord = {
  [EWebsite.juejinHeader]: juejinHeaderHandler
}

const uploadHandlerRecord = {
  [EWebsite.juejinHeader]: juejinUploadDataHandler
}

export const domainCheckEntry = (
  details:
    | chrome.webRequest.WebRequestHeadersDetails
    | chrome.webRequest.WebRequestBodyDetails
) => {
  const domain = getDomainFromDetails(details)
  const headerHandler = headerHandlerRecord[domain]
  // headerHandler?.(details)
  // details
  const uploadHandler = uploadHandlerRecord[domain]
  uploadHandler?.(details)
}

export const commonHeaderHandlerEntry = (
  details: chrome.webRequest.WebRequestHeadersDetails
) => {
  const domain = getDomainFromDetails(details)
  const headerHandler = headerHandlerRecord[domain]
  headerHandler?.(details)
}

export const headersHandlerEntry = () => {}

export const bodyHandlerEntry = (
  requestBody: chrome.webRequest.WebRequestBody,
  domain: string
) => {
  console.log("header handler entry:", requestBody)
  console.log("domain:", domain)
  const headerHandler = headerHandlerRecord[domain]
  headerHandler?.(requestBody)
}

export const saveCheckInXHRData = (cookie: string, header: any) => {
  const xhrData = {
    cookie,
    header
  }
  // chrome.storage.sync.set({ xhrData }, () => {
  //   console.log("保存成功")
  // })
  console.log("xhr data:", xhrData)
}

export const getRequestBodyFromWebRequestBodyDetails = (
  requestBody: chrome.webRequest.WebRequestBodyDetails["requestBody"]
) => {
  if (requestBody?.error) {
    console.log("juejin request body error:", requestBody.error)
    return requestBody.error
  }
  if (requestBody?.formData) {
    console.log("juejin request body formData:", requestBody.formData)
    return requestBody.formData
  }
  if (requestBody?.raw) {
    // return raw
    console.log("juejin request body raw:", requestBody.raw)
    return requestBody.raw.map((item) => {
      if (item.bytes) {
        return new TextDecoder("utf-8").decode(item.bytes)
      }
    })
  }
  console.log("juejin request body:", requestBody)
  return null
}

// 读取是否点击已读tip
export const getIsClickTip = async (callback: (result: boolean) => void) => {
  const result = await chrome.storage.local.get(["isClickTip"])
  console.log("get result:", result)
  callback(result.isClickTip)
}

// 设置是否点击已读tip
export const setIsClickTip = (isClickTip: boolean) => {
  chrome.storage.local.set({ isClickTip }, () => {
    console.log("保存成功")
  })
}

export const asyncSleep = (ms: number = 1500) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// 读取应用的签到记录, 初始化所有插件模块的状态
export const initStorageCheckTask = async (
  callback: (record: Record<string, boolean>) => unknown
) => {
  // 检查已启用的数据
  const record = await getSyncCheckStatusRecord()
  console.log("record:", record)
  callback(record)
}
