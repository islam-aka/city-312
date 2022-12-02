import React, { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper'
import { IAdvertisement } from './advertisement.interface'

const Advertisement: FC<{ data: IAdvertisement }> = ({ data: { items } }) => {
	return (
		<div>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
				className="mySwiper"
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<div style={{ background: `url(${item.image})` }}></div>
					</SwiperSlide>
				))}
				<SwiperSlide>Slide 1</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Advertisement
