import CreateStocks from '@/components/layout/Stocks/createStocks'
import React from 'react'
import styles from './createStocks.module.scss'

const CreateStocksPages = () => {
	return (
		<div className={styles.createStocks}>
			<CreateStocks />
		</div>
	)
}

export default CreateStocksPages
