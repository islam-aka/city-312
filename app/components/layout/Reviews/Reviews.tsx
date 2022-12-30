import React, { FC } from 'react'

// styles
import styles from './Reviews.module.scss'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'
import { dataReviews } from './Reviews.data'
import Btn from '@/components/ui/Btn/Btn'

const Reviews: FC = () => {
	let data = dataReviews

	return (
		<div className={styles.Reviews}>
			<Swiper
				direction={'vertical'}
				slidesPerView={1}
				spaceBetween={60}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination]}
				className={styles.mySwiper}
			>
				{data.data.map((item) => (
					<SwiperSlide key={item.id} className={styles.Reviews__Comment}>
						<div className={styles.Comment__Wrapper}>
							<div className={styles.Comment__Wrapper_left}>
								<p>{item.description}</p>
							</div>

							<div className={styles.Comment__Wrapper_right}>
								<img src={item.img} alt="" />
								<h2>{item.name}</h2>
								<p>{item.cardOwner}</p>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Btn>дОБАВИТЬ ОТЗЫВ</Btn>
		</div>
	)
}

export default Reviews
