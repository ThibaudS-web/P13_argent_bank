import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import UserState from "../../models/states/UserState"
import FetchUser from "../../service/FetchUser"
import Token from "../../models/Token"
import userMapper from "../../UI/mappers/userMapper"

export const getUser = createAsyncThunk("user/getUser", async (token: Token) => {
	const fetchUser = new FetchUser()
	const response = await fetchUser.getUserInfos(token)
	const userMapping = new userMapper(response)
	const userMapped = userMapping.mapAPI(response)
	console.log("user: ", userMapped)
	return userMapped
})

const initialState: UserState = {
	isConnected: false,
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
		logIn: (state) => {
			console.log("Je me co")
			state.isConnected = !state.isConnected
		},
		logOut: (state) => {
			console.log("Je deco")
			state.isConnected = !state.isConnected
			state.loaded = !state.loaded
			state.userInfos = null		
		}
	}
})

export const { logIn, logOut } = userSlice.actions

export default userSlice
