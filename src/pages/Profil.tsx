import Account from "../components/Account"
import { accountText } from "../utils/staticText"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../features/user/userSlice"
import { AppDispatch } from "../app/store"
import Token from "../models/Token"
import { userState } from "../features/user/selector"

function Profil() {
	const dispatch = useDispatch<AppDispatch>()

	let token: Token
	const tokenInStorage = localStorage.getItem("token")
	if (tokenInStorage) {
		token = new Token(tokenInStorage)
	}

	const username = {
		firstName: useSelector(userState).userInfos?.firstName,
		lastName: useSelector(userState).userInfos?.lastName,
		getFullName: function () {
			return `${this.firstName} ${this.lastName}!`
		}
	}

	useEffect(() => {
		dispatch(getUser(token))
	}, [])

	return (
		<main className="main bg-dark">
			<div className="header">
				<h1>
					Welcome back
					<br />
					{username.getFullName()}
				</h1>
				<button className="edit-button">Edit Name</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<Account account={accountText.argentBankChecking} />
			<Account account={accountText.argentBankSavings} />
			<Account account={accountText.argentBankCreditCard} />
		</main>
	)
}

export default Profil
