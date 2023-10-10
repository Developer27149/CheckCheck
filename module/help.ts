import { EStatus, EStorageKey, EWebsite } from "~types"

export const getHeaderFromRequestHeaders = (
  requestHeaders: chrome.webRequest.HttpHeader[]
) => {
  return requestHeaders.reduce((acc, cur) => {
    acc[cur.name] = cur.value
    return acc
  }, {} as Record<string, string>)
}

export const saveWebsiteHeader = async (key: string, value: any) => {
  try {
    chrome.storage.sync.set({
      [`header-${key}`]: value
    })
  } catch (error) {
    console.log("key:", key, " value:", value)
    console.log("保存站点头部失败", error)
  }
}

export const getWebsiteHeader = async (key: string) => {
  const realKey = `header-${key}`
  try {
    const res = await chrome.storage.sync.get(realKey)
    return res[realKey]
  } catch (error) {
    console.log("获取站点头部失败", error)
    console.log("key:", realKey)
  }
}

// 保存站点是否启用签到的状态
export const saveWebsiteCheckInStatus = async (key: string, value: boolean) => {
  try {
    chrome.storage.sync.set({
      [`checkIn-${key}`]: value
    })
  } catch (error) {
    console.log("key:", key, " value:", value)
    console.log("保存站点签到状态失败", error)
  }
}

// 读取站点是否启用签到的状态
export const checkIsEnableByWebsiteKey = async (key: EWebsite) => {
  const realKey = `checkIn-${key}`
  try {
    // 读取配置，检查是否启用
    const res = await chrome.storage.sync.get(realKey)
    return res[realKey] ?? false
  } catch (error) {
    console.log("获取站点签到状态失败", error)
    console.log("key:", realKey)
    return false
  }
}
