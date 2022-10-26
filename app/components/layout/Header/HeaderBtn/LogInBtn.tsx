import Link from 'next/link'
import { FC, ReactNode } from 'react'

import styles from './LoginBtn.module.scss'

interface ILogInBtnProps {
	children: ReactNode
}

const LogInBtn: FC<ILogInBtnProps> = ({ children }: ILogInBtnProps) => {
	return (
		<button className={styles.loginBtn}>
			<Link href="/logIn">
				<a className={styles.btnLink}>{children}</a>
			</Link>
		</button>
	)
}

export default LogInBtn
