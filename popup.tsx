import "./style.css";



import { animated, useSpring } from "@react-spring/web"
import githubIcon from "data-base64:~assets/github.svg"
import logo from "data-base64:~assets/icon.png"
import { useEffect, useState } from "react"

import Juejin from "~components/Juejin"
import Loading from "~components/Loading"
import { getIsClickTip, setIsClickTip } from "~utils"

function IndexPopup() {
  const [loading, setLoading] = useState(true)

  const [gotTip, setGotTip] = useState(null)

  const springs = useSpring({
    from: {
      opacity: 0,
      transform: "translateY(-20px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0)"
    }
  })

  const [tipSprings, api] = useSpring(() => ({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }))

  useEffect(() => {
    getIsClickTip(setGotTip)
  }, [])

  if (loading) return <Loading />

  return (
    <div className="w-[400px] p-4 select-none">
      <animated.div style={springs} className="flex justify-between mb-4">
        <h3
          className="font-bold text-[20px]"
          style={{
            backgroundColor: "gray",
            background: `linear-gradient(to right, #8D08CF 0%, #CF1512 100%)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
          签到面板
          <img src={logo} className="inline-block w-4 h-4 ml-1" />
        </h3>
        <a href="https://github.com/Developer27149" target="_blank">
          <img
            src={githubIcon}
            alt="github"
            className="w-6 inline-block group-hover:rotate-12 transition-all mr-2 group-hover:scale-105"
          />
        </a>
      </animated.div>
      {gotTip === false && (
        <animated.p
          style={tipSprings}
          className="text-gray-500 text-sm p-2 bg-green-50 m-2 mb-12 border-l-[4px] rounded-sm border-green-500">
          启用目标站点的签到功能之后，需要手动进行一次签到以获取凭证，后续每天将会自动签到，直到目标站点的凭证过期
          🚀 <br />
          <span
            onClick={() => {
              setGotTip(true)
              // setIsClickTip(!gotTip)
              api.start({
                from: {
                  opacity: 1
                },
                to: {
                  opacity: 0
                }
              })
            }}
            className="inline-block text-sm text-right mt-4 ml-[170px] cursor-pointer bg-green-100 text-gray-500 px-2 py-1 hover:bg-green-200 transition-all rounded-sm">
            好了好了，我知道了 👌🏻
          </span>
        </animated.p>
      )}
      <Juejin />
    </div>
  )
}

export default IndexPopup