import { FC } from 'react'

import styles from './Stocks.module.scss'
import { IStocks } from './Stocks.interface'
import StocksItem from './StocksItem'

const Stocks: FC<{ data: IStocks }> = ({ data: { items } }) => {
	return (
		<div className={styles.stocks__container}>
			{items.map((item) => (
				<StocksItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default Stocks
