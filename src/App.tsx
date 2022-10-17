import { Routes, Route } from "react-router-dom"

import "./style/main.css"

import Layout from "./layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profil from "./pages/Profil"
// import PrivateRoutes from "./utils/PrivateRoutes"
import { PersistGate } from "redux-persist/lib/integration/react"
import { Provider } from "react-redux"
import store from "./app/store"
import Error404 from "./pages/Error404"
import { persistor } from "./app/store"

function App() {
	return (
		<>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<Layout>
						<Routes>
							<Route path="/profile" element={<Profil />} />
							<Route path="/" element={<Home />} />
							<Route path="/login" element={<Login />} />
							<Route path="*" element={<Error404 />} />
						</Routes>
					</Layout>
				</PersistGate>
			</Provider>
		</>
	)
}

export default App

