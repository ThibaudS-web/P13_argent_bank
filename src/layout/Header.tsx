import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../assets/argent_bank_logo.png"
import { connectionState, userFirstName } from "../features/user/selector"
import { updateStateLoginStatus } from "../features/user/userSlice"
import AuthManager from "../service/AuthManager"
import { AppDispatch } from "../app/store"
import { useDispatch } from "react-redux"

function Header() {
	const username = useSelector(userFirstName)
	const isConnected = useSelector(connectionState)
	const dispatch = useDispatch<AppDispatch>()
	const authManager = new AuthManager()

	const handleLogOut = () => {
		authManager.removeToken()
		dispatch(updateStateLoginStatus(false))
	}

	return (
		<header>
			<nav className="main-nav">
				<Link className="main-nav-logo" to="/">
					<img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
					<h1 className="sr-only">Argent Bank</h1>
				</Link>
				{isConnected ? (
					<div>
						<Link className="main-nav-item" to="/profile">
							<i className="fa fa-user-circle"></i>
							{username}
						</Link>
						<Link onClick={handleLogOut} className="main-nav-item" to="/">
							<i className="fa fa-sign-out"></i>
							Sign Out
						</Link>
					</div>
				) : (
					<div>
						<Link className="main-nav-item" to="/login">
							<i className="fa fa-user-circle"></i> Sign In
						</Link>
					</div>
				)}
			</nav>
		</header>
	)
}

export default Header
