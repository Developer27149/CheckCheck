import { animated, useSpring } from "@react-spring/web"
import type { Dispatch, SetStateAction } from "react"

import { setIsClickTip } from "~utils"

export default ({
  setGotTip
}: {
  setGotTip: Dispatch<SetStateAction<boolean>>
}) => {
  const [tipSprings, api] = useSpring(() => ({
    from: {
      height: 0,
      opacity: 0
    },
    to: {
      height: 132,
      opacity: 1
    }
  }))

  return (
    <animated.p
      style={{ ...tipSprings, transformOrigin: "top" }}
      className="text-gray-500 text-sm p-2 bg-green-50 my-2 mb-4 border-l-[4px] rounded-sm border-green-500">
      启用目标站点的签到功能之后，需要手动进行一次签到以获取凭证，后续每天将会自动签到，直到目标站点的凭证过期
      🚀 <br />
      <span
        onClick={() => {
          api.start({
            from: {
              height: 132,
              opacity: 1
            },
            to: {
              height: 0,
              opacity: 0
            },
            onResolve: () => {
              setGotTip(true)
              setIsClickTip(true)
            }
          })
        }}
        className="inline-block text-sm text-right mt-6 ml-[185px] cursor-pointer bg-green-100 text-gray-500 px-2 py-1 hover:bg-green-200 transition-all rounded-sm">
        好了好了，我知道了 👌🏻
      </span>
    </animated.p>
  )
}
