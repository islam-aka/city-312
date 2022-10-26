import Image from 'next/image'
import React, { FC } from 'react'

import user from '@/assets/images/userAvatar.png'

import styles from './userProfile.module.scss'

const userProfile: FC = () => {
	return (
		<div className={styles.userProfile}>
			<div>
				<div>
					<h2>мой профиль</h2>
					<div>
						<Image
							width={45}
							height={45}
							src={user}
							alt="City-312"
							draggable={false}
						/>
					</div>
					<div></div>
					<div></div>
				</div>
				<div>img 50%</div>
			</div>
			<div>
				<div>img 312</div>
				<div>баллы</div>
			</div>
		</div>
	)
}

export default userProfile
