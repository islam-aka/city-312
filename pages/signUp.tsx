import Link from 'next/link'
import React, { FC } from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Btn from '@/components/ui/Btn/Btn'

import styles from './signUp.module.scss'

const registration: FC = () => {
	return (
		<div className={styles.registration}>
			<Header />
			<div className={styles.registration__btn}>
				<h2>РЕГИСТРАЦИЯ</h2>
				<div>
					<Link href="/userRegistration">
						<Btn>я пользователь карты</Btn>
					</Link>
					<Link href="/partnerRegistration">
						<Btn>я партнер</Btn>
					</Link>
				</div>
			</div>
			<div className={styles.registration__bgImage}>
				<div className={styles.bgImage}></div>
			</div>
			<Footer />
		</div>
	)
}

export default registration