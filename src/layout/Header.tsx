import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../assets/argent_bank_logo.png"
import { connectionState } from "../features/user/selector"
import { logOut } from "../features/user/userSlice"

function Header() {
	const dispatch = useDispatch()
	const isConnected = useSelector(connectionState)
	console.log('suis je connecté:', isConnected)

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
							Tony
						</Link>
						<Link onClick={() => dispatch(logOut())} className="main-nav-item" to="/">
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
