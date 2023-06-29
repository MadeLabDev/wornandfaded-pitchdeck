import * as React from "react"

function Seo({ description, title, children }: any) {

	const metaDescription = description
	const defaultTitle = title

	return (
		<>
			<title>{defaultTitle ? `${title} | ${defaultTitle}` : title}</title>
			<meta name="description" content={metaDescription} />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={metaDescription} />
			<meta property="og:type" content="website" />
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:creator" content={``} />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={metaDescription} />
			{children}
		</>
	)
}

export default Seo