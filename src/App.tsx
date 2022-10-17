import { Routes, Route } from "react-router-dom"

import "./style/main.css"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profil from "./pages/Profil"

import { PersistGate } from "redux-persist/lib/integration/react"
import { Provider, useSelector } from "react-redux"
import store from "./app/store"
import Error404 from "./pages/Error404"
import { persistor } from "./app/store"
import { connectionState } from "./features/user/selector"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
	const isAuthenticated = useSelector(connectionState)
	return (
		<>
			<PersistGate loading={null} persistor={persistor}>
				<Layout>
					<Routes>
						<Route
							path="/profile"
							element={
								<ProtectedRoute isAuthenticated={isAuthenticated}>
									<Profil />
								</ProtectedRoute>
							}
						/>
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
						<Route path="*" element={<Error404 />} />
					</Routes>
				</Layout>
			</PersistGate>
		</>
	)
}

export default App

