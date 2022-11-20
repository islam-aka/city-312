import Stocks from '@/components/layout/Stocks/Stocks'
import { stocksCard } from '@/components/layout/Stocks/stocks.data'
import React from 'react'
import styles from './StocksPages.module.scss'

const StocksPages = () => {
	return (
		<div className={styles.stocksPages}>
			<div>
				<Stocks data={stocksCard} />
			</div>
		</div>
	)
}

export default StocksPages
