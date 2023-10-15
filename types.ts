// JUE JIN >> Enums
export enum EJuejinStorageKey {
  签到启用状态 = "juejin-check-in-enable-status",
  签到记录 = "juejin-check-in-record",
  签到页面 = "juejin-check-in-page",
  请求头 = "juejin-check-in-header",
  请求凭证 = "juejin-check-in-cookie"
}

export enum EJuejinKeyword {
  网络通配符 = "https://api.juejin.cn/*",
  签到接口地址 = "https://api.juejin.cn/growth_api/v1/check_in?",
  签到页面 = "https://juejin.cn/user/center/signin?from=main_page",
  域名 = "api.juejin.cn"
}

// COMMON  >> Enums
export enum EArea {
  Sync = "sync",
  Local = "local"
}
