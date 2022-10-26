import { FC, ReactNode } from 'react'

import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

interface ILayoutProps {
	children: ReactNode
}

const Layout: FC<ILayoutProps> = ({ children }: ILayoutProps) => {
	return (
		<>
			<Header />
			<main className={styles.center}>{children}</main>
			<div className="text-yellow-700">home page</div>
			<Footer />
		</>
	)
}

export default Layout
