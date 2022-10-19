import { RootState } from "../../app/store"

export const connectionState = (state: RootState) => state.user.isConnected
export const userFirstName = (state: RootState) => state.user.userInfos?.firstName ?? "error"
export const userLastName = (state: RootState) => state.user.userInfos?.lastName ?? "error"
