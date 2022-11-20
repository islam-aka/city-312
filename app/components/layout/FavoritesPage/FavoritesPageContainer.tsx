import React, { FC } from 'react'
import FavoritesPage from './FavoritesPageElement/FavoritesPage'
import { favoritesPage } from './FavoritesPageElement/FavoritesPage.data'

const FavoritesPageContainer: FC = () => {
  
  return (
    <div><FavoritesPage data={favoritesPage} /></div>
  )
}

export default FavoritesPageContainer