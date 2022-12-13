import Link from 'next/link'
import React, { FC } from 'react'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { IStocksItem } from '../Stocks/Stocks.interface'
import styles from './DiscountsItem.module.scss'

const DiscountsItem: FC<{ item: IStocksItem }> = ({ item }) => {
	const [favourite, setFavourites] = React.useState(false)
	let itemCategory = []
	for (let i = 0; i < 2; i++) {
		itemCategory[i] = item.partner_category.split(' ')[i]
	}

	return (
		<div className={styles.discountsItem}>
			<div>
				<div className="flex justify-between absolute top-2 z-10 w-full px-2">
					<Link href={`/partner/${item.id}`}>
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
								<p className="text-[9px]">
									{itemCategory[0]} {itemCategory[1]}
								</p>
							</div>
						</div>
					</Link>
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

				<Link href={`/productPage/${item.id}`}>
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
						></div>
					</a>
				</Link>
			</div>

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

export default DiscountsItem
