import UserAPI from "../../models/UserAPI"
import userLocal from "../../models/UserLocal"

class userMapper {
	private userAPI: UserAPI
	constructor(userAPI: UserAPI) {
		this.userAPI = userAPI
	}

    mapAPI(userAPI: UserAPI): userLocal {
        return new userLocal(
            userAPI.email,
            userAPI.firstName,
            userAPI.lastName,
            userAPI.id
        )
    }
}

export default userMapper
