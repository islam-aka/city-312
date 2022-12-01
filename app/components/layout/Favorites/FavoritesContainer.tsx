import React, { FC } from 'react'
import Favorites from './Favorites'
import { favoritesCard } from './favorites.data'

const FavoritesContainer: FC = () => {
	return (
		<div>
			<Favorites data={favoritesCard} />
		</div>
	)
}

export default FavoritesContainer
