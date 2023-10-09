export enum EWebsite {
  juejin = "https://api.juejin.cn/*",
  juejinHeader = "api.juejin.cn",
  juejinCheckInUrl = "https://api.juejin.cn/growth_api/v1/check_in?"
}

export enum EStorageKey {
  // 签到记录配置
  CheckInRecord = "checkInRecord",
  // 站点头部配置
  WebsiteHeader = "websiteHeader",
  // 站点请求体配置
  WebsiteBody = "websiteBody"
}

export enum EStatus {
  // Success
  Success = "success",
  // 禁用
  Disable = "disable",
  // 等待重置
  Wait2Reset = "wait2Reset"
}
