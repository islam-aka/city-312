import React, { useEffect, useState } from 'react'


import { Swiper, SwiperSlide } from "swiper/react";
import share from '@/assets/svg/share.svg'
import Image from 'next/image';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import styles from './PartnerCardSlider.module.scss';
import { partnerCard } from '../partnerCard.data';
import Btn from '@/components/ui/Btn/Btn';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrSearch } from 'react-icons/gr';



function getWindowDimensions() {
  if (typeof window !== "undefined") {
    const { innerWidth: width, innerHeight: height } = window;
    console.log(width)
    if (width > 768) {
      return {
        col: 3,
        mobile: false
      };
    } else if (width <= 768 && width > 420) {
      return {
        col: 2,
        mobile: false
      };
    }  else {
      return {
        col: 1,
        mobile: true
      };
    }
  }
}


const PartnerCardSlider = () => {
  const partnerData = partnerCard;
  const [mobile, setMobile] = useState<any>();

  useEffect(() => {
    function handleResize() {
      setMobile(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.custom_slider}>
      {mobile?.mobile ? (
        <div className={styles.custom_slider_mob}>
          Hello
        </div>
      ) : (
        <div className={styles.custom_slider_sm}>
        <Swiper 
          navigation={true} 
          modules={[Navigation]}
          spaceBetween={15} 
          slidesPerView={mobile?.col || 3} 
          className={styles.mySwiper}

        >
          {
            partnerData.items.map(item => {
              return (
                <SwiperSlide className={styles.slider_Wrapper} key={item.id}>
                  <div className={styles.slider_Wrapper_item}>
                    <div className={styles.slider_img}>
                      <img src={item.image} alt={item.name} />
                      <div className={styles.overlay_logo}>
                        <div className={styles.share}><Image src={share} alt="share" /></div>
                        <div className={styles.logo}><img src={item.logo} alt="" /></div>
                        <div className={styles.heart2}><AiOutlineHeart color='red' /></div>
                      </div>
                    </div>
                    <div className={styles.slider_text}>
                      <h2>{item.name}</h2>
                      <p>{item.description}</p>
                      <Link href={`/partner/${item.id}`}>
                      <button>Подписаться</button>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })
          }
      </Swiper>
      <div className={styles.mainBtn}>
        <Link href='/partnerCard'>
          <Btn>полный список</Btn>
        </Link>
      </div>
      </div>
      )}  
    </div>
  )
}

export default PartnerCardSlider