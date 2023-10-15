import "./style.css"
import "react-toastify/dist/ReactToastify.css"
import "react-tooltip/dist/react-tooltip.css"

import { useState } from "react"
import { ToastContainer } from "react-toastify"

import Pojie from "~components/52Pojie"
import Header from "~components/Header"
import Juejin from "~components/Juejin"
import Loading from "~components/Loading"
import Net163Music from "~components/Net163Music"
import Tip from "~components/Tip"
import { asyncSleep, getIsClickTip } from "~utils"
import { execAsyncFunctionWithUseEffect } from "~utils/function"

function IndexPopup() {
  const [loading, setLoading] = useState(true)

  const [gotTip, setGotTip] = useState(null)

  execAsyncFunctionWithUseEffect(async () => {
    try {
      await Promise.all([getIsClickTip(setGotTip), asyncSleep(0)])
      setLoading(false)
    } catch (error) {
      console.log("init error:", error)
    }
  })

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[400px] p-4 select-none">
          <Header />
          {gotTip === false && <Tip setGotTip={setGotTip} />}
          <div className="flex flex-col gap-2">
            <Net163Music />
            <Juejin />
            <Pojie />
          </div>
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default IndexPopup
