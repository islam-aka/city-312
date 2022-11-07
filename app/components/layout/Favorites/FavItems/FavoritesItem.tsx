import React, { FC } from 'react'
import { IFavoritesItem } from './favorites.interface'
import styles from './FavoritesItem.module.scss'
import { AiOutlineHeart } from 'react-icons/ai'
import Link from 'next/link'

const FavoritesItem: FC <{item: IFavoritesItem}> = ({ item }) => {
  return (
    <div className={styles.favorite}>
      <div className={styles.favorite__Card}>
        <div className={styles.favorite__Card_top}>
          <div className={styles.favorite__Card_top_left}>
            <img src={item.logo} alt={item.name} />
            <div>
              <p>{item.name}</p>
              <p>{item.title}</p>
            </div>
          </div>
          <div className={styles.favorite__Card_top_right}>
            <AiOutlineHeart color='red' />
          </div>
        <p  className={styles.favorite__Card_top_bottom}>{item.discount}</p>
        </div>
        <Link href={`/partner/${item.partner.id}`}>
          <img src={item.image} alt={item.title} />
        </Link>
        <div className={styles.favorite__Card_desc}>
          <div className={styles.favorite__Card_desc_flex}>
            <h3>{item.title}</h3>
            <span>куплено: {item.count}</span>
          </div>
            <p>{item.description}</p>
          <div className='flex justify-between'>
            <span>Опубликовано: {item.date}</span>
            <p>{item.price} сом</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FavoritesItem