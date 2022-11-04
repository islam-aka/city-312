import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { AiFillHeart } from 'react-icons/ai'

import Btn from '@/components/ui/Btn/Btn'

import share from '@/assets/svg/share.svg'

import styles from './PartnerItem.module.scss'
import { IPartnerItem } from './Stocks.interface'

const PartnerItem: FC<{ item: IPartnerItem }> = ({ item }) => {
	const [favourite, setFavourites] = React.useState(false)

	return (
		<div className={styles.partnerItem}>
			<div className="mt-1 relative">
				<Link href={`/partner/${item.id}`}>
					<div className="rounded-[12px] cursor-pointer">
						<div
							style={{
								background: `url(${item.image})`,
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
						background: `url(${item.logo})`,
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
				{item.name}
			</p>
			<p className="text-[14px] leading-[18px] text-center">
				{item.description}
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
			</div>
		</div>
	)
}

export default PartnerItem
