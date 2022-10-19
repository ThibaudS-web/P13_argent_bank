import UserLocal from "../UserLocal"

class UserState {
	isConnected: Boolean
	loaded: Boolean
	userInfos: UserLocal | null
	constructor(loaded: Boolean, userInfos: UserLocal, isConnected: Boolean) {
		this.isConnected = isConnected
		this.loaded = loaded
		this.userInfos = userInfos
	}
}

export default UserState
