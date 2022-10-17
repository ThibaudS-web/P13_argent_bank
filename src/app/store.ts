import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../features/user/userSlice"

const store = configureStore({
	reducer: {
		user: userSlice.reducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: ["user/getUser/fulfilled", "user/changeUserName"],
				ignoredPaths: ["user.userInfos"]
			}
		})
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
