import { Navigate } from "react-router-dom"

function PrivateRoutes() {
	const isConnected = false

	if (!isConnected) {
		return <Navigate to="/login"  />
	}
	return <Navigate to="/profile"  />
}

export default PrivateRoutes
