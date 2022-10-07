import Footer from "./Footer"
import Header from "./Header"

function Layout(props: { children: JSX.Element }) {
	return (
		<>
			<Header />
			<main>{props.children}</main>
			<Footer />
		</>
	)
}

export default Layout
