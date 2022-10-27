interface IAuthManager {
	removeToken(): void
	setToken(token: string): void
	isTokenValid(): boolean
}

export default IAuthManager
