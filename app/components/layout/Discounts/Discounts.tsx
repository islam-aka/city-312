import React, { FC } from 'react'
import { IStocks } from '../Stocks/Stocks.interface'
import DiscountsItem from './DiscountsItem'
import styles from './Discounts.module.scss'

const Discounts: FC<{ data: IStocks }> = ({ data: { data } }) => {
	return (
		<div className={styles.discounts__container}>
			{data.map((item) => (
				<DiscountsItem item={item} key={item.id} />
			))}
		</div>
	)
}

export default Discounts
