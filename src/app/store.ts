import { configureStore } from "@reduxjs/toolkit"
import userSlice from "../features/user/userSlice"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage" // defaults to localStorage for web

const persistConfig = {
	key: "root",
	storage,
	blacklist: ['isConnected']
}

const persistedReducer = persistReducer(persistConfig, userSlice.reducer)

const store = configureStore({
	reducer: {
		user: persistedReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				// Ignore these action types
				ignoredActions: [
					"user/getUser/fulfilled",
					"user/changeUserName",
					"persist/PERSIST"
				],
				ignoredPaths: ["user.userInfos"]
			}
		})
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
