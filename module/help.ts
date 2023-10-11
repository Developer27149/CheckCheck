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

export const getSyncCheckStatusRecord = async () => {
  const record = await chrome.storage.sync.get(EStorageKey.签到启用状态表)
  return record[EStorageKey.签到启用状态表] ?? {}
}

const saveSyncCheckStatusRecord = (record: Record<string, boolean>) =>
  chrome.storage.sync.set({
    [EStorageKey.签到启用状态表]: record
  })

// 读取站点是否启用签到的状态
export const checkIsEnableByWebsiteKey = async (key: EWebsite) => {
  try {
    const record = await getSyncCheckStatusRecord()
    return !!record[key]
  } catch (error) {
    console.log("failed: get status by key:", key)
    return false
  }
}

// 保存签到记录启用状态
export const saveCheckInRecord = async (key: string, value: boolean) => {
  try {
    const record = await getSyncCheckStatusRecord()
    record[key] = value
    await saveSyncCheckStatusRecord(record)
  } catch (error) {
    console.log("key:", key, " value:", value)
    console.log("保存签到记录启用状态失败", error)
  }
}
