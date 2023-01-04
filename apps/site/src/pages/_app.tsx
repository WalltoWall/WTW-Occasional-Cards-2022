import * as React from "react"
import "../styles/index.css"

import Head from "next/head"
import { type AppProps } from "next/app"
import { type NextPage } from "next"

export type NextPageWithLayout<P = Record<string, unknown>> = NextPage<P> & {
	getLayout?: (page: React.ReactElement<P>) => React.ReactNode
}

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout
}

function defaultGetLayout(page: React.ReactElement) {
	return page
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
	const getLayout = Component.getLayout ?? defaultGetLayout

	return (
		<React.Suspense>
			<Head>
				<link rel="icon" href="/favicon/favicon-32x32.png" />
				<link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
				<link rel="manifest" href="/manifest.webmanifest" />
				<title>WTW Occasional Cards 2022</title>
			</Head>

			{getLayout(<Component {...pageProps} />)}
		</React.Suspense>
	)
}

export default App
