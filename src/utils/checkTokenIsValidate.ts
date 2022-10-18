import jwtDecode from "jwt-decode"

function checkTokenIsValidate(token: string | null) {
	if (token) {
		const decodedToken: { exp: number; iat: number; id: string } = jwtDecode(token)
		const tokenExpireDate = new Date(decodedToken.exp * 1000)
        const currentDate = new Date()
        
        console.log(decodedToken)
        console.log('current date: ', currentDate, '||', 'tokenExpireDate: ', tokenExpireDate)
        
		if (currentDate > tokenExpireDate) {
			localStorage.removeItem("token")
			return false
		}

		return true
	}

	return false
}

export default checkTokenIsValidate
