// import { useNavigate } from "react-router-dom"
import Token from "../models/Token"
import User from "../models/UserAPI"
import { ApiResult } from "./apiResult"

class FetchUser {
	BASE_URL = "http://localhost:3001/api/v1"
	// navigate = useNavigate()

	async login(email: string | null, password: string | null): Promise<Token> {
		let data: Token
		try {
			const result = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				body: JSON.stringify({
					email: email,
					password: password
				}),
				headers: {
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			data = ((await result.json()) as ApiResult<Token>).body
			console.log("data", data)
			return data
		} catch (error) {
			console.log(error)
			throw new Error("Error API: ", error as Error)
		}
	}

	async getUserInfos(token: Token): Promise<User> {
		let data: User
		try {
			const result = await fetch("http://localhost:3001/api/v1/user/profile", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token.token.toString()}`,
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			data = ((await result.json()) as ApiResult<User>).body
			return data
		} catch (error) {
			console.log(error)
			throw new Error("Error API: ", error as Error)
		}
	}

	//I NEED TO IMPLEMENTS THIS PAGE
	// handleError(result: { status: number }) {
	// 	if (result.status === 404) {
	// 		this.navigate("/page-not-found", { replace: true })
	// 	}
	// }
}

export default FetchUser
