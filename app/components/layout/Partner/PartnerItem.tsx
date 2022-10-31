import React, { FC } from 'react'

import { IPartnerItem } from './partner.interface'

const PartnerItem: FC<{ item: IPartnerItem }> = ({ item }) => {
	console.log(item)

	return <div>{item.name}</div>
}

export default PartnerItem
