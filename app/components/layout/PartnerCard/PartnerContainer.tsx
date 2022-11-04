import { FC } from 'react'

import Partner from './PartnerCard'
import { partnerCard } from './partnerCard.data'

const PartnerContainer: FC = () => {
	return <Partner data={partnerCard} />
}

export default PartnerContainer
