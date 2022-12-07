import React, { FC } from 'react'
import { IAdvertisementItem } from './advertisement.interface'

const AdvertisementItem: FC<{ item: IAdvertisementItem }> = ({ item }) => {
	return (
		<div
			className="w-full h-[300px]"
			style={{
				background: `url(${item.image})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		></div>
	)
}

export default AdvertisementItem
