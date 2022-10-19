import Footer from "./Footer"
import Header from "./Header"

function Layout(props: { children: JSX.Element }) {
	return (
		<>
			<Header />
			{props.children}
			<Footer />
		</>
	)
}

export default Layout
