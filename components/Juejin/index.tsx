import clsx from "clsx"
import { useAtom } from "jotai"
import { useEffect, useState } from "react"

import Status from "~components/Status"
import { getWebsiteCheckInStatus, saveWebsiteCheckInStatus } from "~module/help"
import { juejinStore } from "~store"
import { EWebsite } from "~types"

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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(
          "bg-[#016bff] w-10 h-10 common-website-iconx rounded-sm",
          {
            grayscale: false
          }
        )}
        viewBox="0 0 300 300">
        <path
          fill="#FFF"
          d="M171.899925,73.7589379 L150.529912,57 L128.202695,74.5098893 L127.045384,75.4372939 L150.529912,94.0612996 L174.086643,75.4372939 L171.899925,73.7589379 Z M252.8807,138.751117 L150.468024,219.06804 L48.1172365,138.80036 L33,150.877136 L150.468024,243 L268,150.827893 L252.8807,138.751117 Z M150.468024,145.26757 L94.7376552,101.562607 L79.6183557,113.639383 L150.468024,169.201582 L221.377518,113.59014 L206.258219,101.513364 L150.468024,145.26757 Z"
        />
      </svg>
      <Status status={config.status} />
    </div>
  )
}
