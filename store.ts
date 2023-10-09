import { atom } from "jotai"

import { EStatus, EWebsite } from "~types"

export const pluginStatusStore = atom({
  [EWebsite.juejinHeader]: true
})

export const juejinStore = atom({
  status: EStatus.Wait2Reset
})
