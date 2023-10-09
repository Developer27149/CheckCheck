import clsx from "clsx"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"

import Status from "~components/Status"
import { getWebsiteCheckInStatus, saveWebsiteCheckInStatus } from "~module/help"
import { juejinStore } from "~store"
import { EWebsite } from "~types"

import Logo from "./Logo"

export default function () {
  const [config, setConfig] = useAtom(juejinStore)

  useEffect(() => {
    getWebsiteCheckInStatus(EWebsite.juejinHeader).then((status) => {
      console.log(status)
      setConfig({ status })
    })
  }, [])

  const onChangeState = () => {
    console.log("change juejin state")
    // setIsEnable(!isEnable)
    // saveWebsiteCheckInStatus(EWebsite.juejinHeader, !isEnable)
  }
  return (
    <div
      className="relative cursor-pointer bg-[#f4f6f8] flex items-center justify-between gap-4 p-6 rounded-lg"
      onClick={onChangeState}>
      <Logo />
      <Status status={config.status} />
    </div>
  )
}
