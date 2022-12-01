import React, { FC } from 'react'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import UserProfile from '@/components/layout/UserProfile/UserProfile'
import UserCards from '@/components/layout/UserCard/UserCard'
import styles from './userCard.module.scss'
import { userProfile } from '@/components/layout/UserCard/userCard.data'

const UserCard: FC = () => {
	return (
		<>
			<Header />
			<div className={styles.userCard}>
				<div>
					<UserProfile />
				</div>
				<div>
					<UserCards data={userProfile} />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default UserCard
