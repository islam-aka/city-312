import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { IPartnerPage } from '../PartnerPages/partnerPages.interface'
import { IFavorites } from './FavItems/favorites.interface'

const FavoritesId: FC <{ data: IFavorites }> = ({ data: {items} }) => {
  const router = useRouter()
  const favoritesId = router.query.favoritesId
  
  return (
    <div>
      asa {favoritesId}
    </div>
  )
}

export default FavoritesId