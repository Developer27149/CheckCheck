import logoImg from "data-base64:~assets/net163.svg"

export default () => {
  return (
    <div className="flex gap-1 items-center">
      <img src={logoImg} />
      <span className="pl-[4px] text-[22px]">网易云音乐</span>
    </div>
  )
}
