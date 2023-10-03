import * as React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ children }: any) => {

	return (
		<>
			<Header siteTitle={`Worn And Faded`} />
			<main>{children}</main>
			<Footer siteTitle={`Worn And Faded`} siteLink={`https://www.madelab.io`} />
		</>
	)
}

export default Layout