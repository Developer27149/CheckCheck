import { endOfDay, subDays } from "date-fns"
import { useState } from "react"

import { EJuejinStorageKey } from "~types"
import { execAsyncFunctionWithUseEffect } from "~utils/function"
import { getFromStorage } from "~utils/storage"

export function useInitLogic() {
  const [hadSign, setHadSign] = useState(false)
  const [isEnable, setIsEnable] = useState(false)

  execAsyncFunctionWithUseEffect(async () => {
    // 获取启用状态和签到状态，以及签到记录
    const [enableStatus, record] = await Promise.all([
      getFromStorage<boolean>(EJuejinStorageKey.签到启用状态),
      getFromStorage<number>(EJuejinStorageKey.签到记录)
    ])
    // 设置启用状态
    setIsEnable(enableStatus)
    // 设置签到状态
    const yesterday = subDays(new Date(), 1)
    setHadSign(!!record && record > endOfDay(yesterday).getTime())
  })

  return {
    hadSign,
    isEnable,
    setIsEnable,
    setHadSign
  }
}
