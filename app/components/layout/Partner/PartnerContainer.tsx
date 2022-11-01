import { FC } from 'react'

import Partner from './Partner'
import { partnerCard } from './partner.data'

const PartnerContainer: FC = () => {
	return <Partner data={partnerCard} />
}

export default PartnerContainer
