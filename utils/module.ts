import { endOfDay, subDays } from "date-fns"

import { EJuejinKeyword, EJuejinStorageKey } from "~types"

import { getFromStorage } from "./storage"

export const juejinLogic = async () => {
  try {
    console.log(EJuejinKeyword.域名)
    const isEnable = await getFromStorage(EJuejinStorageKey.签到启用状态)
    console.log("isEnable:", isEnable)
    if (isEnable) {
      const record = await getFromStorage<number>(EJuejinStorageKey.签到记录)
      console.log("record:", record)
      if (
        record === undefined ||
        Number(record) < endOfDay(subDays(new Date(), 1)).getTime()
      ) {
        // 没有签到或今天未签到
        const [headers, body, url, method] = await Promise.all([
          getFromStorage<object>(EJuejinStorageKey.请求头),
          getFromStorage<object>(EJuejinStorageKey.请求凭证),
          getFromStorage<string>(EJuejinStorageKey.url),
          getFromStorage<string>(EJuejinStorageKey.method)
        ])
        console.log("header and body:", headers, body, url, method)
        const newHeaders = {}
        Object.keys(headers ?? {}).forEach((key) => {
          if (!key.toLocaleLowerCase().startsWith("sec")) {
            newHeaders[key] = headers[key]
          }
        })
        console.log("newHeaders:", newHeaders)
        const res = await fetch(
          "https://api.juejin.cn/growth_api/v1/check_in",
          {
            method: "POST",
            headers: newHeaders as any
          }
        )
        console.log(res)
        if (res.ok) {
          console.log("res:", await res.json())
        }
      } else {
        console.log("今天已经签到过了")
      }
    } else {
      console.log("签到未启用")
    }
  } catch (error) {
    console.log("error:", error)
  }
}
