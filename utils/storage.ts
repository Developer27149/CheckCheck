import { EArea } from "~types"

/**
 * 保存数据到 chrome.storage
 * @param key
 * @param value
 * @param area sync 同步数据；local 本地数据
 */
export const saveToStorage = async (
  key: string,
  value: any,
  area = EArea.Sync
) => {
  try {
    chrome.storage[area].set({
      [key]: value
    })
  } catch (error) {
    console.log("key:", key, " value:", value)
    console.log("保存失败", error)
  }
}

/**
 * 读取数据从 chrome.storage
 * @param key
 * @param area sync 同步数据；local 本地数据
 * @returns
 */
export const getFromStorage = async <T>(
  key: string,
  area = EArea.Sync
): Promise<T> => {
  try {
    const res = await chrome.storage[area].get(key)
    return res[key]
  } catch (error) {
    console.log("获取失败", error)
    console.log("key:", key)
  }
}
