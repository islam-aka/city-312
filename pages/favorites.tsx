import { IFavorites } from '@/components/layout/Favorites/FavItems/favorites.interface'
import FavoritesContainer from '@/components/layout/Favorites/FavoritesContainer'
import React, { FC } from 'react'

const favorites: FC = () => {

  return (
    <div>
      <FavoritesContainer />
    </div>
  )
}

export default favorites