import { FC } from 'react'

import Discounts from './Discounts'
import { stocksCard } from '../Stocks/stocks.data'

const DiscountsContainer: FC = () => {
	return <Discounts data={stocksCard} />
}

export default DiscountsContainer
