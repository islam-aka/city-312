import { FC } from 'react'

import styles from './PartnerCard.module.scss'
import { IPartner } from './Stocks.interface'
import StocksItem from './StocksItem'

const Stocks: FC<{ data: IPartner }> = ({ data: { items } }) => {
	return (
		<div className={styles.partner__container}>
			{items.map((item) => (
				<StocksItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default Stocks
