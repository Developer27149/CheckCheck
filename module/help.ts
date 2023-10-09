import { EStatus, EStorageKey } from "~types"

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
export const getWebsiteCheckInStatus = async (key: string) => {
  const realKey = `checkIn-${key}`
  try {
    // 读取配置，检查是否启用
    const res = await chrome.storage.sync.get(realKey)
    const isEnable = res[realKey] ?? false
    if (!isEnable) return EStatus.Disable
    // 检查签到是否过期
    const validKey = `checkIn-${key}-valid`
    const checkInRecord = await chrome.storage.sync.get(validKey)
    const isValid = checkInRecord[validKey] ?? false
    if (!isValid) return EStatus.Wait2Reset
    return EStatus.Success
  } catch (error) {
    console.log("获取站点签到状态失败", error)
    console.log("key:", realKey)
  }
}
