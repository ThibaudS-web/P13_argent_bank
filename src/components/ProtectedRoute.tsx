import { Navigate } from "react-router-dom"

function ProtectedRoute(props: { isAuthenticated: Boolean; children: JSX.Element }) {
	const { isAuthenticated, children } = props
	if (!isAuthenticated) {
		return <Navigate to="/login" replace />
	}
	return children
}
export default ProtectedRoute
