import Head from "next/head"

export interface SEOProps {
	pageTitle: string
	siteDescription: string
	siteName: string
	meta?: {
		title?: string
		description?: string
	}
	openGraph?: {
		cardImageUrl?: string
	}
	twitter?: {
		username?: string
		cardImageUrl?: string
	}
}

export const SEO = ({
	meta,
	pageTitle,
	siteDescription,
	siteName,
	openGraph,
	twitter,
}: SEOProps) => {
	const description = meta?.description ?? siteDescription
	const title = meta?.title ?? pageTitle

	return (
		<Head>
			<title>
				{title} | {siteName}
			</title>

			<meta name="description" content={description} />

			{/* Open Graph */}
			<meta property="og:type" content="website" />
			<meta property="og:site_name" content={siteName} />
			<meta property="og:description" content={description} />
			<meta property="og:title" content={title} />
			{openGraph?.cardImageUrl && (
				<meta
					name="image"
					property="og:image"
					content={openGraph.cardImageUrl}
				/>
			)}

			{/* Twitter */}
			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			{twitter?.cardImageUrl && (
				<meta name="twitter:image" content={twitter.cardImageUrl} />
			)}
			{twitter?.username && (
				<meta name="twitter:site" content={twitter.username} />
			)}
		</Head>
	)
}
