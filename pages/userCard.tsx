import React, { FC } from 'react'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Profile from '@/components/layout/Profile/Profile'
import UserCards from '@/components/layout/UserCard/UserCard'
import styles from './userCard.module.scss'

import { userProfile } from '@/components/layout/Profile/profile.data'
import { userProfileCard } from '@/components/layout/UserCard/userCard.data'

const UserCard: FC = () => {
	return (
		<>
			<Header />
			<div className={styles.userCard}>
				<div className={styles.profile}>
					<Profile {...userProfile} />
				</div>
				<div>
					<UserCards {...userProfileCard} />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default UserCard
