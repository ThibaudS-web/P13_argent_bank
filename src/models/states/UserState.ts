import UserLocal from "../UserLocal"

class UserState {
	isConnected: boolean
	loaded: boolean
	userInfos: UserLocal | null
	constructor(loaded: boolean, userInfos: UserLocal, isConnected: boolean) {
		this.isConnected = isConnected
		this.loaded = loaded
		this.userInfos = userInfos
	}
}

export default UserState
