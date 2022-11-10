import { useRouter } from 'next/router'
import React, { FC } from 'react'

//Interfaces
import { IPartnerPage } from '../PartnerPages/partnerPages.interface'
import { IFavorites } from './FavItems/favorites.interface'

const FavoritesId: FC <{ data: IPartnerPage }> = ({ data }) => {
  const router = useRouter()
  const { favoritesId } = router.query;
  
  return (
    <div>
      {data.category}
      {data.id}
    </div>
  )
}

export default FavoritesId