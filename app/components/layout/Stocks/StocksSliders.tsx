import React, { FC, useEffect, useState } from 'react'

import styles from './Stocks.module.scss'
import { IStocks } from './Stocks.interface'
import StocksItem from './StocksItem'

import { Swiper, SwiperSlide } from 'swiper/react'

import { Navigation, Pagination } from 'swiper'

const StocksSliders: FC<{ data: IStocks }> = ({ data: { data } }) => {
	const [max, setMax] = useState(0)

	useEffect(() => {
		setMax(window.innerWidth)
	}, [])

	return (
		<>
			<div className="hidden lg:block">
				<Swiper
					slidesPerView={3}
					rewind={true}
					spaceBetween={15}
					navigation={true}
					modules={[Navigation]}
					className={styles.swiperWrapper}
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							<StocksItem item={item} key={item.id} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="block lg:hidden">
				<Swiper
					slidesPerView={1}
					spaceBetween={10}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						640: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
						1024: {
							slidesPerView: 5,
							spaceBetween: 50,
						},
					}}
					modules={[Pagination]}
					className="mySwiper"
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							<StocksItem item={item} key={item.id} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</>
	)
}

export default StocksSliders
