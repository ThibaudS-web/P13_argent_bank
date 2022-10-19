import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../app/store"
import { updateStateLoginStatus } from "../features/user/userSlice"
import AuthManager from "../service/AuthManager"
import FetchUser from "../service/FetchUser"

function Login() {
	const fetchUser = new FetchUser()
	const authManager = new AuthManager()
	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()

	const [email, setEmail] = useState<null | string>(null)
	const [password, setPassword] = useState<null | string>(null)

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		if (email && password) {
			try {
				const response = await fetchUser.login(email, password)	
				authManager.setToken(response.token)
				dispatch(updateStateLoginStatus(true))
				navigate("/profile", { replace: true })
				return response
			} catch (error) {
				throw new Error("Error on Login page: ", error as Error)
			}
		}
	}

	return (
		<main className="main bg-dark">
			<section className="sign-in-content">
				<i className="fa fa-user-circle sign-in-icon"></i>
				<h1>Sign In</h1>
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper">
						<label htmlFor="username">Username</label>
						<input
							type="text"
							id="username"
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>
					<div className="input-remember">
						<input type="checkbox" id="remember-me" />
						<label htmlFor="remember-me">Remember me</label>
					</div>
					<button className="sign-in-button">Sign In</button>
				</form>
			</section>
		</main>
	)
}
export default Login
