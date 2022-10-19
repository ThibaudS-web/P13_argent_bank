interface IAuthManager {
	removeToken(): void
	setToken(token: string): void
	isTokenValid(): Boolean
}

export default IAuthManager
