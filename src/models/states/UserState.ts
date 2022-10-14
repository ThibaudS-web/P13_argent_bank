import User from "../UserLocal"

class UserState {
	isConnected: Boolean
	loaded: Boolean
	userInfos: User | null
	constructor(loaded: Boolean, userInfos: User, isConnected: Boolean) {
		this.isConnected = isConnected
		this.loaded = loaded
		this.userInfos = userInfos
	}
}

export default UserState
