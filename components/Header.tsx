import { animated, useSpring } from "@react-spring/web"
import githubIcon from "data-base64:~assets/github.svg"
import logo from "data-base64:~assets/icon.png"

export default () => {
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

  return (
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
  )
}
