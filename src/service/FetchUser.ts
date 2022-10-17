// import { useNavigate } from "react-router-dom"
import Token from "../models/Token"
import UserAPI from "../models/UserAPI"
import { ApiResult } from "./apiResult"

class FetchUserAPI {
	BASE_URL = "http://localhost:3001/api/v1"
	// navigate = useNavigate()

	async login(email: string, password: string): Promise<Token> {
		let data: Token
		try {
			const result = await fetch("http://localhost:3001/api/v1/user/login", {
				method: "POST",
				body: JSON.stringify({
					email,
					password
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

	async getUserInfos(token: Token): Promise<UserAPI> {
		let data: UserAPI
		try {
			const result = await fetch("http://localhost:3001/api/v1/user/profile", {
				method: "POST",
				headers: {
					Authorization: `Bearer ${token.token.toString()}`,
					"Content-type": "application/json; charset=UTF-8"
				}
			})
			data = ((await result.json()) as ApiResult<UserAPI>).body
			return data
		} catch (error) {
			console.log(error)
			throw new Error("Error API: ", error as Error)
		}
	}

	async changeUserName(firstName: string, lastName: string, token: string): Promise<UserAPI> {
		let data: UserAPI
		try {
			const result = await fetch("http://localhost:3001/api/v1/user/profile", {
				method: "PUT",
				headers: {
					Authorization: `Bearer ${token}`,
					"Content-type": "application/json; charset=UTF-8"
				},
				body: JSON.stringify({
					firstName,
					lastName
				})
			})
			data = ((await result.json()) as ApiResult<UserAPI>).body
			console.log('data via fetcher: ', data )
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

export default FetchUserAPI
