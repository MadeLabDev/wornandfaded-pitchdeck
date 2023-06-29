import * as React from "react"
import Header from "./header"

const Layout = ({ children }: any) => {

	return (
		<>
			<Header siteTitle={`Title`} />
				<main>{children}</main>
			<footer>
				© {new Date().getFullYear()} &middot; Built with
				{` `}
				<a href="https://www.gatsbyjs.com">Gatsby</a>
			</footer>
		</>
	)
}

export default Layout