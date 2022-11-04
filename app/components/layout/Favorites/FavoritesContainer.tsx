import React, { FC } from 'react'
import Favorites from './FavItems/Favorites'
import { favoritesCard } from './FavItems/favorites.data'


const FavoritesContainer: FC = () => {
  return (
    <div><Favorites data={favoritesCard} /></div>
  )
}

export default FavoritesContainer