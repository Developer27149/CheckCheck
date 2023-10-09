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
    [EStatus.Wait2Reset]: <div className={classNames}>初始化</div>
  }

  return statusMap[status] ?? statusMap[EStatus.Wait2Reset]
}
