import { IFavorites } from '@/components/layout/Favorites/favorites.interface'
import FavoritesContainer from '@/components/layout/Favorites/FavoritesContainer'
import React, { FC } from 'react'

const ProductPage: FC = () => {

  return (
    <div>
      <FavoritesContainer />
    </div>
  )
}

export default ProductPage