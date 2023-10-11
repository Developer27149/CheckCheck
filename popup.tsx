import Header from "~components/Header"
import Juejin from "~components/Juejin"
import Loading from "~components/Loading"
import Tip from "~components/Tip"
import { asyncSleep, getIsClickTip, initStorageCheckTask } from "~utils"
import { useEffect, useState } from "react"
import { ToastContainer } from "react-toastify"

import "./style.css";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

function IndexPopup() {
  const [loading, setLoading] = useState(true)

  const [gotTip, setGotTip] = useState(null)

  useEffect(() => {
    const init = async () => {
      try {
        await Promise.all([
          getIsClickTip(setGotTip),
          asyncSleep(0),
          initStorageCheckTask((record: Record<string, boolean>) => {
            // 拿到所有签到功能启用状态数据记录
            console.log("all enable record:", record)
          })
        ])
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    }
    init()
  }, [])

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="w-[400px] p-4 select-none">
          <Header />
          {gotTip === false && <Tip setGotTip={setGotTip} />}
          <Juejin />
        </div>
      )}
      <ToastContainer />
    </div>
  )
}

export default IndexPopup