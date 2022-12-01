import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import Header from '../Header/Header'
import UserProfile from '../UserProfile/UserProfile'
import { IFavorites } from './favorites.interface'
import FavoritesItem from './FavoritesItem'
import styles from './Favorites.module.scss'

const Favorites: FC<{ data: IFavorites }> = ({ data: { items } }) => {
	console.log(items)

	return (
		<>
			<Header />
			<div className={styles.favorites}>
				<div className={styles.favorites_flex}>
					<div className={styles.userProfile}>
						<UserProfile />
					</div>
					<div className={styles.favorites_flex__favBlock}>
						<div className={styles.favorites_flex__favBlock_title}>
							<div className={styles.icon}>
								<AiOutlineHeart color="red" />
							</div>
							<h2>мои избранные</h2>
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
