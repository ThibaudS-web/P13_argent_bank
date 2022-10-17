import UserAPI from "../../models/UserAPI"
import userLocal from "../../models/UserLocal"

class UserMapper {
	mapAPI(userAPI: UserAPI): userLocal {
		return new userLocal(userAPI.email, userAPI.firstName, userAPI.lastName, userAPI.id)
	}
}

export default UserMapper
