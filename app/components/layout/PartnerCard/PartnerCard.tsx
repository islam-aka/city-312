import { FC } from 'react'

import styles from './PartnerCard.module.scss'
import PartnerItem from './PartnerCardItem'
import { IPartner } from './partnerCard.interface'

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
