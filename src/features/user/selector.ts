import { RootState } from "../../app/store"

export const connectionState = (state: RootState) => state.user.isConnected
export const userState = (state: RootState) => state.user
