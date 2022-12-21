import React, { FC } from 'react'
import FavoritesPage from './ProductPageElement/ProductPage'
import { favoritesPage } from './ProductPageElement/ProductPage.data'

const FavoritesPageContainer: FC = () => {
  
  return (
    <div><FavoritesPage data={favoritesPage} /></div>
  )
}

export default FavoritesPageContainer