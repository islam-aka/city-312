import Favorites from '@/components/layout/Favorites/Favorites'
import { IFavorites } from '@/components/layout/Favorites/favorites.interface'
import FavoritesItem from '@/components/layout/Favorites/FavoritesItem'
import Header from '@/components/layout/Header/Header'
import UserProfile from '@/components/layout/UserProfile/UserProfile'
import React, { FC } from 'react'

const favorites: FC <{ favorites: IFavorites }>  = ({ favorites: { items } }) => {

  return (
    <>
    <Header />
    <div className='max-w-full'>
      <div className='flex justify-evenly  '>
        <div className='w-2/6'>
          <UserProfile />
        </div>
        <div className='w-8/12	'>
          <ul>
            {
              items.map ( item => (
                  <FavoritesItem key={item.id} item={item} />
              ))
            }
          </ul>
          favorites
        </div>
      </div>
    </div>
    </>
  )
}

export default favorites