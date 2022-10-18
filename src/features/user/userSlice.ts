import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import UserState from "../../models/states/UserState"
import FetchUser from "../../service/FetchUser"
import Token from "../../models/Token"
import UserMapper from "../../UI/mappers/UserMapper"
import AuthManager from "../../service/AuthManager"
import IAuthManager from "../../service/IAuthManager"

const fetchUser = new FetchUser()
const authManager: IAuthManager = new AuthManager()

export const getUser = createAsyncThunk("user/getUser", async (token: Token) => {
	const response = await fetchUser.getUserInfos(token)
	const userMapped = new UserMapper().mapAPI(response)
	console.log("user: ", userMapped)
	return userMapped
})

const initialState: UserState = {
	isConnected: authManager.isTokenValid(),
	loaded: false,
	userInfos: null
}

const userSlice = createSlice({
	name: "user",
	initialState: initialState,
	extraReducers: (builder) => {
		builder.addCase(getUser.pending, (state, action) => {
			state.loaded = false
		})
		builder.addCase(getUser.fulfilled, (state, action) => {
			console.log(action)
			state.loaded = true
			state.userInfos = action.payload
		})
		builder.addCase(getUser.rejected, (state, action) => {
			state.loaded = false
			console.log(action.error.message)
		})
	},
	reducers: {
		updateStateLoginStatus: (state, action) => {
			const connected: Boolean = action.payload
			if (connected) {
				state.isConnected = connected
			} else {
				state.isConnected = false
				state.loaded = false
				state.userInfos = null
			}
		},
		changeUserName: (state, action) => {
			state.userInfos = action.payload
		}
	}
})

export const { updateStateLoginStatus, changeUserName } = userSlice.actions

export default userSlice
