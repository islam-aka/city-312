import Btn from '@/components/ui/Btn/Btn'
import React, { FC } from 'react'

// interfaces
import { IPartnerPage } from '../PartnerPages/partnerPages.interface'
import { IFavoritesPage } from './FavoritesPage.interface'

// styles
import styles from './FavoritesPage.module.scss'

const FavoritesPage: FC <{data: IFavoritesPage}>= ({data}) => {
  return (
    <div className={styles.favoritePage}>
      <div className='flex justify-evenly pt-[140px]'>
        <div className={styles.favoritePage__flex_left}>
          {data.name}
          <img src={data.image} alt="" />
          <div>
          {data.description.paragraf.map(item => {
            return (
              <p>{item}</p>
            )
          })}
          </div>
          ADRES
          {data.address}
        </div>
        <div className={styles.favoritePage__flex_right}>
          <del>{data.price}</del>
          <p>{data.price}</p>
          <Btn>{'Купить'}</Btn>
        </div>
      </div>
      <div>
      </div>
      <div>
      </div>
      
    </div>
  )
}

export default FavoritesPage