import { EStatus, EStatusKey, EStorageKey, EWebsite } from "~types"
import {
  checkIsEnableByWebsiteKey,
  saveWebsiteCheckInStatus
} from "~module/help"
import { useEffect, useState } from "react"

import Logo from "./Logo"
import Status from "~components/Status"
import clsx from "clsx"
import { juejinStore } from "~store"
import { useAtom } from "jotai"

export default function () {
  const [config, setConfig] = useAtom(juejinStore)

  useEffect(() => {
    // 检查是否启用
    checkIsEnableByWebsiteKey(EWebsite.juejinHeader).then(async (isEnable) => {
      console.log("juejin is enable:", isEnable)
      
      // setConfig({ status:  })
    })
  }, [])

  const onChangeState = (status: EStatus) => {
    console.log("change juejin state", status)
    setConfig({ status })
    saveWebsiteCheckInStatus(
      EWebsite.juejinHeader,
      status === EStatus.Disable ? false : true
    )
  }

  return (
    <div className="relative cursor-pointer bg-[#f7f8fa] flex items-center justify-between gap-4 p-6 rounded-lg">
      <Logo />
      <Status
        status={config.status}
        checkInPage={EWebsite.juejinCheckInPage}
        enableKey={EStatusKey.juejin}
        onEnable={() => onChangeState(EStatus.Wait2Reset)}
        onDisable={() => onChangeState(EStatus.Disable)}
      />
    </div>
  )
}
