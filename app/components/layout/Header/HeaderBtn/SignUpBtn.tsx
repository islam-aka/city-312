import Link from 'next/link'
import { FC, ReactNode } from 'react'

import styles from './SignUpBtn.module.scss'

interface ISignUpBtnProps {
	children: ReactNode
}

const SignUpBtn: FC<ISignUpBtnProps> = ({ children }: ISignUpBtnProps) => {
	return (
		<button className={styles.signUpBtn}>
			<Link href="/signUp">
				<a className={styles.btnLink}>{children}</a>
			</Link>
		</button>
	)
}

export default SignUpBtn
