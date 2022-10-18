import { Routes, Route } from "react-router-dom"

import "./style/main.css"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profil from "./pages/Profil"
import Error404 from "./pages/Error404"
import ProtectedRoute from "./components/ProtectedRoute"

import { PersistGate } from "redux-persist/lib/integration/react"
import { useSelector } from "react-redux"
import { persistor } from "./app/store"
import { connectionState } from "./features/user/selector"


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



