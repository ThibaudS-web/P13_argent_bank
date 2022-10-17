import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../assets/argent_bank_logo.png"
import { connectionState, userFirstName, stateGlobal } from "../features/user/selector"
import { updateStateLoginStatus } from "../features/user/userSlice"

function Header() {
	const dispatch = useDispatch()
	const username = useSelector(userFirstName)
	const isConnected = useSelector(connectionState)
	console.log(useSelector(stateGlobal))
	
	const handleLogOut = () => {
		localStorage.removeItem("token")
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
