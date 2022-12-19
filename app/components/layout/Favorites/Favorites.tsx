import React, { FC, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import Header from '../Header/Header'
import Profile from '../Profile/Profile'
import { IFavorites } from './favorites.interface'
import FavoritesItem from './FavoritesItem'
import styles from './Favorites.module.scss'
import { userProfile } from '../Profile/profile.data'

const Favorites: FC<{ data: IFavorites }> = ({ data: { items } }) => {
	const [profile, setProfile] = useState(true)
	console.log(items)

	return (
		<>
			<Header />
			<div className={styles.favorites}>
				<div className={styles.favorites_flex}>
					<div className="flex justify-between mb-6 ">
						<button
							onClick={() => setProfile(!profile)}
							className="block lg:hidden py-[9px] px-[22px] font-semibold"
							style={{
								background: 'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
								borderRadius: '5px',
							}}
						>
							мой профиль
						</button>
						<div className={styles.favorites_flex__favBlock_title_mobile}>
							<div className={styles.icon}>
								<AiOutlineHeart color="red" />
							</div>
							<h2>Избранные</h2>
						</div>
					</div>
					<div
						className={!profile ? styles.userProfile : styles.userProfileNone}
					>
						<Profile {...userProfile} />
					</div>
					<div className={styles.userProfile_none}>
						<Profile {...userProfile} />
					</div>
					<div className={styles.favorites_flex__favBlock}>
						<div className={styles.favorites_flex__favBlock_title}>
							<div className={styles.icon}>
								<AiOutlineHeart color="red" />
							</div>
							<h2>Избранные</h2>
						</div>
						<div className={styles.favoriteItems}>
							{items.map((item) => (
								<FavoritesItem key={item.id} item={item} />
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
export default Favorites
