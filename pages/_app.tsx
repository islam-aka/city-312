import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>City-312 || Дисконтная карта для скидок</title>
				<meta name="description" content="Проект создан компанией Ogogo" />
				<link key={1} rel="icon" href="/favicon2.ico" />
			</Head>
			<Component {...pageProps} />
		</>
	)
}

export default MyApp
