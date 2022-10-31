import React, { FC } from 'react'
import Header from '../Header/Header';
import UserProfile from '../UserProfile/UserProfile';
import { IFavorites } from './favorites.interface';
import FavoritesItem from './FavoritesItem';

const Favorites: FC <{ favorites: IFavorites }> = ({ favorites: {items} }) => {
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
export default Favorites;
