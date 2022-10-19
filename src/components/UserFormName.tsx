import { useState } from "react"
import { useDispatch } from "react-redux"
import { changeUserName } from "../features/user/userSlice"
import FetchUser from "../service/FetchUser"
import UserMapper from "../UI/mappers/UserMapper"

function UserFormName(props: { displayHandler: Function; firstName: string; lastName: string }) {
	const fetchUser = new FetchUser()

	const tokenInLocal = localStorage.getItem("token")

	const [firstName, setFirstName] = useState<null | string>(null)
	const [lastName, setLastName] = useState<null | string>(null)

	const dispatch = useDispatch()

	const updateDisplayForm = () => {
		props.displayHandler(false)
	}

	const handleSubmit = async (event: { preventDefault: () => void }) => {
		event.preventDefault()
		if (firstName && lastName && tokenInLocal) {
			try {
				const newUsername = await fetchUser.changeUserName(
					firstName,
					lastName,
					tokenInLocal
				)
				setFirstName(null)
				setLastName(null)
				const userMapping = new UserMapper().mapAPI(newUsername)
				dispatch(changeUserName(userMapping))
				updateDisplayForm()
			} catch (error) {
				throw new Error("Error on Login page: ", error as Error)
			}
		}
	}

	return (
		<>
			<div className="form-wrapper">
				<form onSubmit={handleSubmit}>
					<div className="input-wrapper-name">
						<input
							placeholder={props.firstName}
							type="text"
							id="firsName"
							onChange={(e) => setFirstName(e.target.value)}
						/>
						<input
							placeholder={props.lastName}
							type="text"
							id="lastName"
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className="buttons-wrapper-name">
						<button className="form-name-button">Save</button>
						<button className="form-name-button" onClick={updateDisplayForm}>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default UserFormName
