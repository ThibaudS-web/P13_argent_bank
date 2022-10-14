import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { logIn } from "../features/user/userSlice"
import FetchUser from "../service/FetchUser"

function Login() {
	const navigate = useNavigate()
	const dispatch = useDispatch()
	const fetchUser = new FetchUser()

	const [email, setEmail] = useState<null | string>(null)
	const [password, setPassword] = useState<null | string>(null)

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		try {
			const token = await fetchUser.login(email, password)
			setEmail(null)
			setPassword(null)
			console.log("token: ", token.token)
			localStorage.setItem("token", token.token)
			dispatch(logIn())
			navigate("/profile", { replace: true })
			return token
		} catch (error) {
			throw new Error("Error on Login page: ", error as Error)
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
						<input type="text" id="username" onChange={e => setEmail(e.target.value)} />
					</div>
					<div className="input-wrapper">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							onChange={e => setPassword(e.target.value)}
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
