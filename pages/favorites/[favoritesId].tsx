import { favoritesCard } from '@/components/layout/Favorites/FavItems/favorites.data'
import FavoritesId from '@/components/layout/Favorites/FavoritesId'
import { partnerPage } from '@/components/layout/PartnerPages/partnerPages.data'
import React from 'react'

const favoritesId = () => {
  return (
    <div><FavoritesId data={favoritesCard} /></div>
  )
}

export default favoritesId