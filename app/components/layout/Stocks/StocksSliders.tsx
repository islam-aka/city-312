import React, { FC, useRef, useState } from 'react'

import styles from './Stocks.module.scss'
import { IStocks } from './Stocks.interface'
import StocksItem from './StocksItem'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation } from 'swiper'

const StocksSliders: FC<{ data: IStocks }> = ({ data: { items } }) => {
	return (
		<>
			<Swiper
				slidesPerView={3}
				rewind={true}
				navigation={true}
				modules={[Navigation]}
				className={styles.swiperWrapper}
			>
				{items.map((item) => (
					<SwiperSlide key={item.id}>
						<StocksItem item={item} key={item.id} />
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default StocksSliders
