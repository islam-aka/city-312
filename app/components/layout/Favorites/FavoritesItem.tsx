import React, { FC } from 'react'
import { IFavoritesItem } from './favorites.interface'

const FavoritesItem: FC <{item: IFavoritesItem}> = ({ item }) => {
  return (
    <li>{item.title}</li>
  )
}

export default FavoritesItem
