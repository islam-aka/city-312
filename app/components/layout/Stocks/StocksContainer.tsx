import { FC } from 'react'

import Stocks from './Stocks'
import { partnerCard } from './stocks.data'

const StocksContainer: FC = () => {
	return <Stocks data={partnerCard} />
}

export default StocksContainer
