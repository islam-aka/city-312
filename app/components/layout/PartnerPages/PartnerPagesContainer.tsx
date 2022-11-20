import { FC } from 'react'

import PartnerPages from './PartnerPages'
import { partnerPage } from './partnerPages.data'

const PartnerContainer: FC = () => {
	return <PartnerPages partner={partnerPage} />
}

export default PartnerContainer
