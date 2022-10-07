import { Routes, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profil from "./pages/Profil"
import "./style/main.css"

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/profile" element={<Profil />} />
			</Routes>
		</>
	)
}

export default App



