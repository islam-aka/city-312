import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'
import styles from './StocksItem.module.scss'
import { IStocksItem } from './Stocks.interface'

const StocksItem: FC<{ item: IStocksItem }> = ({ item }) => {
	const [favourite, setFavourites] = React.useState(true)

	return (
		<div className={styles.stocksItem}>
			<Link href={`/partner/${item.id}`}>
				<a>
					<div
						style={{
							background: `url(${item.image_stocks})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
							width: '100%',
							height: '158px',
						}}
						className={styles.item__bg}
					>
						<div className={styles.item__partner}>
							<div
								style={{
									background: `url(${item.logo_partner})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover',
									width: '30px',
									height: '30px',
									borderRadius: '50%',
								}}
							></div>
							<div>
								<p className="text-[12px] leading-3 font-semibold">
									{item.name_partner}
								</p>
								<p className="text-[9px]">{item.partner_category}</p>
							</div>
						</div>

						<div
							className={styles.heart}
							onClick={() => setFavourites(!favourite)}
						>
							{favourite ? (
								<AiFillHeart color="red" />
							) : (
								<AiOutlineHeart color="red" />
							)}
						</div>
					</div>
				</a>
			</Link>
			<div className="mt-2 text-black-900 px-3 relative">
				<div className="flex gap-5 justify-between mb-4">
					<h3 className="font-semibold h-[50px h-[50px] overflow-hidden">
						{item.name_stocks}
					</h3>
					<p className="opacity-30 hidden md:flex">
						Куплено: <span>{item.sold}</span>
					</p>
				</div>
				<div className="h-[78px] w-[calc(100%_-_36px)] overflow-hidden ">
					{item.description_stocks}{' '}
					<Link href={`/productPage/${item.id}`}>
						<span className="absolute top-[60%] w-[48px] right-3 text-[blue] cursor-pointer">
							... ещё
						</span>
					</Link>
				</div>
				<div className="flex items-center justify-between mt-5">
					<p className="text-[10px] text-[#707070] ">
						Опубликовано: {item.date_publication}
					</p>
					<p className="text-[#0077FF] text-[18px]">{item.price_stocks} сом</p>
				</div>
			</div>
		</div>
	)
}

export default StocksItem
