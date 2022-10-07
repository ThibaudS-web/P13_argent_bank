import { Routes, Route } from "react-router-dom"
import Layout from "./components/layout/Layout"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profil from "./pages/Profil"
import "./style/main.css"

function App() {
	return (
		<>
			<Layout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/profile" element={<Profil />} />
				</Routes>
			</Layout>
		</>
	)
}

export default App

