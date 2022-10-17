import Account from "../components/Account"
import { accountText } from "../utils/staticText"
import { useEffect, SetStateAction } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getUser } from "../features/user/userSlice"
import { AppDispatch } from "../app/store"
import Token from "../models/Token"
import { userFirstName, userLastName } from "../features/user/selector"
import { useState } from "react"
import UserFormName from "../components/UserFormName"

function Profil() {
	const dispatch = useDispatch<AppDispatch>()
	const [isDisplayForm, setIsDisplayForm] = useState(false)

	const firstName = useSelector(userFirstName)
	const lastName = useSelector(userLastName)

	let token: Token
	const tokenInStorage = localStorage.getItem("token")
	if (tokenInStorage) {
		token = new Token(tokenInStorage)
	}

	const displayHandler = (isDisplayForm: SetStateAction<boolean>) => {
		setIsDisplayForm(isDisplayForm)
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
					{isDisplayForm ? (
						<UserFormName firstName={firstName} lastName={lastName} displayHandler={displayHandler} />
					) : (
						`${firstName} ${lastName}!`
					)}
				</h1>
				<button onClick={() => setIsDisplayForm(!isDisplayForm)} className="edit-button">
					Edit Name
				</button>
			</div>
			<h2 className="sr-only">Accounts</h2>
			<Account account={accountText.argentBankChecking} />
			<Account account={accountText.argentBankSavings} />
			<Account account={accountText.argentBankCreditCard} />
		</main>
	)
}

export default Profil
