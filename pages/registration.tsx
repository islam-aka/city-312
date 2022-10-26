import React, { FC } from 'react'

import Btn from '@/components/ui/Btn/Btn'

import styles from './registration.module.scss'

const registration: FC = () => {
	return (
		<div className={styles.registration}>
			<div className={styles.registration__btn}>
				<h2>РЕГИСТРАЦИЯ</h2>
				<div>
					<Btn>я пользователь карты</Btn>
					<Btn>я партнер</Btn>
				</div>
			</div>
			<div className={styles.registration__bgImage}>
				<div className={styles.bgImage}></div>
			</div>
		</div>
	)
}

export default registration
