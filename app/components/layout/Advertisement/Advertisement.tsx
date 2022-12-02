import React, { FC } from 'react'
import { IAdvertisement } from './advertisement.interface'
import AdvertisementItem from './AdvertisementItem'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Pagination } from 'swiper'

const Advertisement: FC<{ data: IAdvertisement }> = ({ data: { items } }) => {
	return (
		<>
			<Swiper
				pagination={{
					dynamicBullets: true,
				}}
				modules={[Pagination]}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<AdvertisementItem item={item} key={item.id} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default Advertisement
