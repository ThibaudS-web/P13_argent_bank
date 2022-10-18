import jwtDecode from "jwt-decode"
import IAuthManager from "./IAuthManager"

class AuthManager implements IAuthManager {
	private getToken() {
		return localStorage.getItem("token")
	}

	removeToken() {
		localStorage.removeItem("token")
	}

	setToken(token: string) {
		localStorage.setItem("token", token)
	}

	isTokenValid() {
		const token = this.getToken()
		if (token) {
			const decodedToken: { exp: number; iat: number; id: string } = jwtDecode(token)
			const tokenExpireDate = new Date(decodedToken.exp * 1000)
			const currentDate = new Date()

			if (currentDate > tokenExpireDate) {
				localStorage.removeItem("token")
				return false
			}

			return true
		}

		return false
	}
}

export default AuthManager
