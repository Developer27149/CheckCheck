import clsx from "clsx"
import { Tooltip } from "react-tooltip"

import { EStatus } from "~types"

interface IProps {
  status: EStatus
  classNames?: string
}

export default function ({ status, classNames }: IProps) {
  const statusMap = {
    [EStatus.Success]: (
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="本日已签到！"
        className={clsx(classNames, "flex gap-1 items-center text-sm")}>
        <svg
          className="text-green-600 p-[2px]  hover:bg-gray-200 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 1024 1024">
          <path
            fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896zm-55.808 536.384l-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
          />
        </svg>
      </div>
    ),
    [EStatus.Disable]: (
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="启用！"
        className={clsx(classNames, "flex gap-1 items-center text-sm")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-800 p-[2px]  hover:bg-gray-200 rounded-full"
          width="32"
          height="32"
          viewBox="0 0 24 24">
          <mask id="lineMdSwitchFilled0">
            <g
              fill="#fff"
              fill-opacity="0"
              stroke="#fff"
              stroke-linecap="round"
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
            <circle cx="17" cy="12" r="3" fill-opacity="0">
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
    ),
    [EStatus.Wait2Reset]: (
      <div
        data-tooltip-id="my-tooltip"
        data-tooltip-content="手动签到一次以获得凭证用于自动签到"
        className={clsx(classNames, "flex gap-1 items-center text-sm")}>
        <svg
          className="text-purple-600 p-[2px]  hover:bg-gray-200 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 20 20">
          <g fill="currentColor">
            <path d="M14.5 14.5v-3.25a.5.5 0 0 1 1 0V15a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 1 .5-.5h3.75a.5.5 0 0 1 0 1H5.5v9h9Z" />
            <path d="M10.354 10.354a.5.5 0 0 1-.708-.708l5-5a.5.5 0 0 1 .708.708l-5 5Z" />
            <path d="M15.5 8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 1 0v3.5Z" />
            <path d="M11.5 5.5a.5.5 0 0 1 0-1H15a.5.5 0 0 1 0 1h-3.5Z" />
          </g>
        </svg>
      </div>
    )
  }

  return (
    <div>
      {statusMap[status] ?? statusMap[EStatus.Wait2Reset]}
      <Tooltip id="my-tooltip" />
    </div>
  )
}
