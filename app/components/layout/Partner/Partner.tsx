import { FC } from 'react'

import styles from './Partner.module.scss'
import PartnerItem from './PartnerItem'
import { IPartner } from './partner.interface'

const Partner: FC<{ data: IPartner }> = ({ data: { items } }) => {
	return (
		<div className={styles.partner__container}>
			{items.map((item) => (
				<PartnerItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default Partner
