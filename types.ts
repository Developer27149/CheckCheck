export enum EWebsite {
  juejin = "https://api.juejin.cn/*",
  juejinHeader = "api.juejin.cn",
  juejinCheckInUrl = "https://api.juejin.cn/growth_api/v1/check_in?",
  juejinCheckInPage = "https://juejin.cn/user/center/signin?from=main_page"
}

export enum EStorageKey {
  // 签到记录配置
  CheckInRecord = "checkInRecord",
  // 站点头部配置
  WebsiteHeader = "websiteHeader",
  // 站点请求体配置
  WebsiteBody = "websiteBody"
}

export enum EStatusKey {
  juejin = EWebsite.juejinHeader
}

export enum EStatus {
  Disable = "disable",
  Enable = "enable"
}

// sign in status record
export enum EStorageKey {
  签到启用状态表 = "checkInEnableStatus",
  签到记录表 = "checkInRecord"
}

export type TSignInEnableMap = Map<string, boolean>