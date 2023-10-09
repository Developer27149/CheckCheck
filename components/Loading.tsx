import { animated, useSpring } from "@react-spring/web"
// @ts-ignore
import gif from "data-url:../assets/cat.gif"

export default () => {
  const springs = useSpring({
    from: {
      transform: "translateY(-10deg)"
    },
    to: {
      transform: "translateY(0deg)"
    }
  })

  return (
    <div className="w-[400px] p-4 h-[200px] flex items-center justify-center">
      <animated.div style={springs}>
        <img src={gif} className="w-8 h-8 rounded-sm mr-2" />
      </animated.div>
      <animated.div style={springs}>loading...</animated.div>
    </div>
  )
}
