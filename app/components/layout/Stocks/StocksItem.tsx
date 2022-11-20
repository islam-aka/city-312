import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

import Btn from '@/components/ui/Btn/Btn'

import share from '@/assets/svg/share.svg'

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
			<div className="mt-2 text-black-900 px-3">
				<div className="flex gap-5 justify-between mb-4">
					<h3 className="font-semibold">{item.name_stocks}</h3>
					<p className="flex opacity-30">
						Куплено: <span>{item.sold}</span>
					</p>
				</div>
				<p className="text-[14px]">{item.description_stocks}</p>
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

{
	/* <div className="mt-1 relative">
				<Link href={`/partner/${item.id}`}>
					<div className="rounded-[12px] cursor-pointer">
						<div
							style={{
								background: `url(${item.image_stocks})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: ' cover',
								width: '100%',
								height: '210px',
							}}
						></div>
					</div>
				</Link>
				<div
					className="w-[81px] h-[81px] absolute lg:top-[145px] top-[100px] left-[35%] rounded-[50%]"
					style={{
						background: `url(${item.logo_partner})`,
						backgroundRepeat: 'no-repeat',
						backgroundSize: ' cover',
					}}
				></div>
				<div className={styles.heart} onClick={() => setFavourites(!favourite)}>
					{favourite ? (
						<AiFillHeart color="red" />
					) : (
						<AiOutlineHeart color="red" />
					)}
				</div>
			</div>
			<p className="mt-7 mb-5 text-center text-[20px] leading-[24px] font-semibold font-['Gilroy']">
				{item.name_partner}
			</p>
			<p className="text-[14px] leading-[18px] text-center">
				{item.description_stocks}
			</p>
			<div className="flex items-center mt-3">
				<div className={styles.share}>
					<Image width={'21'} height={'15'} src={share} alt="share" />
				</div>
				<Btn
					style={{
						background: 'linear-gradient(0deg, #7EC9F5 0%, #3957ED 97.5%)',
						borderRadius: '8.51038px',
						padding: '12px 0',
						color: '#ffffff',
						width: '100%',
					}}
				>
					Подписаться
				</Btn>
			</div> */
}
