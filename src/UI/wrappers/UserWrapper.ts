import UserLocal from "../../models/UserLocal"

/**
 * @description Wrapper classes format model fields into displayable data. This class only formats fields needed for UI. 
 * This wrapping layer enables us to separate UI logic (wrapper class) from business logic (model class).
 * 
 * It is required to display the user fullname.
 */

class UserWrapper{
    private userLocal: UserLocal
    constructor(userLocal: UserLocal) {
        this.userLocal = userLocal
    }

    getFullName() {
        return `${this.userLocal.firstName} ${this.userLocal.lastName}!`
    }
}

export default UserWrapper