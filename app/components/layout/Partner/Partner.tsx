import { FC } from 'react'

import styles from './Partner.module.scss'
import PartnerItem from './PartnerItem'
import { IPartner } from './partner.interface'

const Partner: FC<{ menu: IPartner }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.menu}>
			{items.map((item) => (
				<PartnerItem item={item} key={item.id} />
			))}
		</ul>
	)
}

export default Partner
