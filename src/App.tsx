import { Routes, Route } from "react-router-dom"

import "./style/main.css"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profil from "./pages/Profil"
// import PrivateRoutes from "./utils/PrivateRoutes"

import { Provider } from "react-redux"
import store from "./app/store"

function App() {
	return (
		<>
			<Provider store={store}>
				<Layout>
					<Routes>
						<Route path="/profile" element={<Profil />} />
						<Route path="/" element={<Home />} />
						<Route path="/login" element={<Login />} />
					</Routes>
				</Layout>
			</Provider>
		</>
	)
}

export default App

