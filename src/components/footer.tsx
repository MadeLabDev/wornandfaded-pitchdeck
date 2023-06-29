import * as React from "react"

const Footer = ({ siteTitle, siteLink }: any) => (
	<footer>
		© {new Date().getFullYear()} &middot; Built with
		{` `}
		<a href={siteLink}>{siteTitle}</a>
	</footer>
)

export default Footer