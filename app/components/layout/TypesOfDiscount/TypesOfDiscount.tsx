import React, { FC } from 'react'
import Image from 'next/image'

import discount_1 from '@/assets/images/typesofDiscoutn_1.png'
import discount_2 from '@/assets/images/typesofDiscoutn_2.png'
import discount_3 from '@/assets/images/typesofDiscoutn_3.png'
import discount_4 from '@/assets/images/typesofDiscoutn_4.png'
import discount_5 from '@/assets/images/typesofDiscoutn_5.png'
import discount_6 from '@/assets/images/typesofDiscoutn_6.png'

// styles
import styles from './TypesOfDiscount.module.scss'

const TypesOfDiscount:FC = () => {
  return (
    <div className={styles.TypesOfDiscount}>
      <h2>Основные виды скидки</h2>
      <div className={styles.TypesOfDiscount_Wrapper}>
        <div className={styles.Wrapper_item}>
          <Image src={discount_1} alt='discount' />
          <p>Постоянная скидка, то есть скидка одинаковая во времени на все типы товаров. </p>
        </div>
        <div className={styles.Wrapper_item}>
          <Image src={discount_2} alt='discount' />
          <p>Скидка по времени или дате, например, при покупке товара или услуги с 9:00 до 12:00 или скидка предоставляется каждую пятницу с 10:00 до 19:00. </p>
        </div>
        <div className={styles.Wrapper_item}>
          <Image src={discount_3} alt='discount' />
          <p>Скидка, зависящая от суммы покупки, например, текущая покупка до 500 с. скидка 2%. </p>
        </div>
        <div className={styles.Wrapper_item}>
          <Image src={discount_4} alt='discount' />
          <p>Скидка на определенные типы или группы товаров, например, скидка на все товары с желтым ценником. </p>
        </div>
        <div className={styles.Wrapper_item}>
          <Image src={discount_5} alt='discount' />
          <p>Накопительная система скидок, например, при каждой потраченной тысячи сомов, последующая скидка возрастает на 1%. </p>
        </div>
        <div className={styles.Wrapper_item}>
          <Image src={discount_6} alt='discount' />
          <p>Бонусная программа - отложенная скидка, например, при каждой покупке клиент копит баллы, и при достижении определенного порога, клиент может накопленные баллы обменять на товар или услугу</p>
        </div>
        
      </div>
    </div>
  )
}

export default TypesOfDiscount