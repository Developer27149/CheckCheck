import clsx from "clsx";



import { EStatus } from "~types"

interface IProps {
  status: EStatus
  classNames?: string
}

export default function ({ status, classNames }: IProps) {
  const statusMap = {
    [EStatus.Success]: <div className={classNames}>签到成功</div>,
    [EStatus.Disable]: (
      <div className={classNames}>
        启用 <span>签到功能</span>
      </div>
    ),
    [EStatus.Wait2Reset]: (
      <div className={clsx(classNames, "flex gap-1 items-center")}>
        初始化{" "}
        <svg
          className="text-purple-600 p-[2px] text-[20px] hover:bg-gray-100 rounded-full"
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
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

  return statusMap[status] ?? statusMap[EStatus.Wait2Reset]
}