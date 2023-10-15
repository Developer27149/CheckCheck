import clsx from "clsx"
import { Tooltip } from "react-tooltip"

interface IProps {
  classNames?: string
  checkInPage: string
  isEnable: boolean
  hadSign: boolean
  reverseStatus: () => void
}

export default function ({
  classNames,
  checkInPage,
  reverseStatus,
  isEnable
}: IProps) {
  const onOpenCheckInPage = () => {
    window.open(checkInPage, "_blank")
  }

  // 如果在启用的时候，没有签到成功，则显示过期提示

  return (
    <div className="flex gap-2 items-center ">
      {isEnable && (
        <div data-tooltip-id="my-tooltip" data-tooltip-content="手动签到一次">
          <svg
            onClick={onOpenCheckInPage}
            xmlns="http://www.w3.org/2000/svg"
            className="relative bottom-[2px] text-purple-500"
            width="20"
            height="20"
            viewBox="0 0 20 20">
            <path
              fill="currentColor"
              d="M7.5 2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2a.5.5 0 0 1 .5-.5ZM3.61 3.61a.5.5 0 0 1 .708 0l1.414 1.415a.5.5 0 1 1-.707.707L3.611 4.318a.5.5 0 0 1 0-.707Zm7.78 0a.5.5 0 0 1 0 .708L9.974 5.732a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0ZM2 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm6.64-.2A1 1 0 0 0 7 8.067v9.101c0 .924 1.145 1.354 1.753.659l2.026-2.316A1.5 1.5 0 0 1 11.908 15h3.211c.935 0 1.359-1.17.64-1.768L8.64 7.299ZM8 17.17V8.067L15.119 14h-3.211a2.5 2.5 0 0 0-1.882.854L8 17.169Z"
            />
          </svg>
        </div>
      )}
      <div
        data-tooltip-id="my-tooltip"
        // data-tooltip-content="点击启用！"
        className={clsx(classNames, "flex gap-1 items-center text-sm")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={clsx("rounded-full p-[2px]", {
            "text-gray-800 hover:bg-gray-200": !isEnable,
            "text-green-400 hover:bg-gray-100": isEnable
          })}
          onClick={reverseStatus}
          width="32"
          height="32"
          viewBox="0 0 24 24">
          <mask id="lineMdSwitchFilled0">
            <g
              fill="#fff"
              fill-opacity="0"
              stroke="#fff"
              strokeLinecap="round"
              stroke-linejoin="round"
              stroke-width="2">
              <rect
                width="18"
                height="8"
                x="3"
                y="8"
                stroke-dasharray="54"
                stroke-dashoffset="54"
                rx="4">
                <animate
                  fill="freeze"
                  attributeName="stroke-dashoffset"
                  dur="0.6s"
                  values="54;0"
                />
              </rect>
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.7s"
                dur="0.2s"
                values="0;1"
              />
            </g>
            <circle cx={isEnable ? 7 : 17} cy="12" r="3" fill-opacity="0">
              <animate
                fill="freeze"
                attributeName="fill-opacity"
                begin="0.9s"
                dur="0.2s"
                values="0;1"
              />
            </circle>
          </mask>
          <rect
            width="20"
            height="10"
            x="2"
            y="7"
            fill="currentColor"
            mask="url(#lineMdSwitchFilled0)"
          />
        </svg>
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  )
}
