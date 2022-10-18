import jwtDecode from "jwt-decode"

export interface IAuthManager {
	removeToken(): void
	setToken(token: string): void
	isTokenValid(): Boolean
}

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

			console.log(decodedToken)
			console.log("current date: ", currentDate, "||", "tokenExpireDate: ", tokenExpireDate)

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
