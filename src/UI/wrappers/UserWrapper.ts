import UserLocal from "../../models/UserLocal"

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