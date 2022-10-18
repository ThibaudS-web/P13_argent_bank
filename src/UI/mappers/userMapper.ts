import UserAPI from "../../models/UserAPI"
import userLocal from "../../models/UserLocal"

/**
 * @description Mapper classes apply data mapping rules between two layers of entities. This mapping layer reduces the impact of external data sources.
 * UserAPI is our model from api/v1/user/profile.
 */


class UserMapper {
	mapAPI(userAPI: UserAPI): userLocal {
		return new userLocal(userAPI.email, userAPI.firstName, userAPI.lastName, userAPI.id)
	}
}

export default UserMapper
