import React, { FC } from 'react'
import FavoritesPage from './FavoritesPage'
import { favoritesPage } from './FavoritesPage.data'

const FavoritesPageContainer: FC = () => {
  return (
    <div><FavoritesPage data={favoritesPage} /></div>
  )
}

export default FavoritesPageContainer