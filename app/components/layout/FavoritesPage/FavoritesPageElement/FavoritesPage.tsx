import React, { FC } from 'react';

//components
import Btn from '@/components/ui/Btn/Btn';
import FPageSlder from './slider/FPageSlider';
import Map from '../../Map/Map'
import { useJsApiLoader } from '@react-google-maps/api'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// interfaces
import { IFavoritesPage } from './FavoritesPage.interface';
import {menuData} from './Menudesc.data'

// styles
import styles from './FavoritesPage.module.scss';
import Footer from '../../Footer/Footer';
import Menudesc from './menuDesc/Menudesc';
import StocksSliders from '../../Stocks/StocksSliders';
import { stocksCard } from '../../Stocks/stocks.data';

type Libraries = (
  | 'drawing'
  | 'geometry'
  | 'localContext'
  | 'places'
  | 'visualization'
)[]

const libraries: Libraries = ['places']
const FavoritesPage: FC <{data: IFavoritesPage}>= ({data}) => {
  
  const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBCKfxyxhPafyv0-c5x_kxO24aNijt0b6U',
		libraries,
	})

  const socialmedia = [
    'https://i.ibb.co/SnFDZk4/Iconinst.png',
    'https://i.ibb.co/zR5QzNY/Iconwh.png',
    'https://i.ibb.co/XDCqgn6/Icontg.png',
    'https://i.ibb.co/6t3NmDV/Icon.png'
  ]
  return (
    <div className={styles.favoritePage}>
      <div className={styles.container}>
      <div className={styles.favoritePage__flex}>
        <div className={styles.favoritePage__flex_left}>
          <div className={styles.left_title}>
            <h1>{data.name}</h1>
            <span>{data.address}</span>
          </div>
          {/* <FPageSlder image={data.images} /> */}
          <img src={data.images} alt="" />
        </div>
        <div className={styles.favoritePage__flex_right}>
          <div>
            <div className={styles.right_price}>
              <del>от {data.price} сом</del>
              <p>от {data.price} сом</p>
            </div>
            <Btn>{'Купить'}</Btn>
            <p>до конца продаж : {data.discountEnd[0]}д.{data.discountEnd[1]}ч.{data.discountEnd[2]}мин</p>
          </div>
          <div className={styles.right_social}>
            <p>Поделиться с друзьями</p>
            <div className={styles.right_socialLinks}>
              {socialmedia.map((item, index) => {
                  return (
                    <span key={index}>
                      <img src={item} alt="img social" />
                    </span>
                  )
                })}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.favoritePage__description}>
        
        <div className={styles.favoritePage__description_title}>
          <Menudesc menuData={menuData} />
          {/* <Menudesc  /> */}
          {/* <p>{data.descript}</p> */}
        </div>
        <div className={styles.favoritePage__description_address}  id='address'>
          <p>Адрес</p>
          <p>{data.address}</p>
          <div className="w-full h-[443px]">
						{isLoaded ? <Map center={data.location} /> : <h2>loading</h2>}
					</div>
        </div>
        <div className={styles.favoritePage__description_review}  id='review'>
          <h2>Отзывы об услуге</h2>
          <div className={styles.review_flex}>
          <div className={styles.reviewBlock}>
            {data.feedback.feedbackItem.map((item, index) => {
              return(
                <div key={index} className={styles.reviewCard}>
                  <img src={item.imageFB} alt="" />
                  <div>
                    <p>{item.name} {item.second_name}</p>
                    <p>{item.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className={styles.reviewButton}>
            <div>
              <button className={styles.reviewButton_question}>Задать вопрос</button>
            </div>
            <div>
              <button className={styles.reviewButton_review}>Оставить отзыв</button>
            </div>
          </div>
          </div>
        </div>
        <div className={styles.favoritePage__description_mustLike}>
          <h2>Вам может понравиться</h2>
          <div className={styles.mustLike_cards}>
            <StocksSliders data={stocksCard} />
          </div>
        </div>
      </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default FavoritesPage