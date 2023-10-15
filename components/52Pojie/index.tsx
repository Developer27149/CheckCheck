import Status from "~components/Status"
import { EJuejinKeyword, EJuejinStorageKey } from "~types"
import { saveToStorage } from "~utils/storage"

import Logo from "./Logo"
import { useInitLogic } from "./useInitLogic"

export default function () {
  const { hadSign, isEnable, setIsEnable } = useInitLogic()

  const reverseStatus = () => {
    setIsEnable(!isEnable)
    // save to storage
    saveToStorage(EJuejinStorageKey.签到启用状态, !isEnable)
  }

  return (
    <div
      className="relative cursor-pointer flex items-center justify-between gap-4 p-6 rounded-lg"
      style={{
        background: "linear-gradient(45deg, #f7f7f7, #dbf5e3)"
      }}>
      <Logo />
      <div>
        <Status
          checkInPage={EJuejinKeyword.签到页面}
          isEnable={isEnable}
          reverseStatus={reverseStatus}
          hadSign={hadSign}
        />
      </div>
    </div>
  )
}
