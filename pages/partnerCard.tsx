import React from 'react'
import { GrSearch } from 'react-icons/gr'

import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import PartnerContainer from '@/components/layout/PartnerCard/PartnerContainer'
import Btn from '@/components/ui/Btn/Btn'
import Input from '@/components/ui/Input/Input'

import styles from './partnerCard.module.scss'

const partner = () => {
	return (
		<>
			<Header />
			<div className={styles.partner}>
				<div className={styles.search}>
					<Input type={'text'} placeholder={'Поиск парнера'} />
					<div>
						<GrSearch color="#374957" />
					</div>
				</div>
				<div>
					<PartnerContainer />
				</div>
				<div className="text-center text-[14px] leading-[17px] font-semibold font-['Gilroy']">
					<Btn style={{ width: '230px', padding: '16px 0', margin: '50px 0' }}>
						полный список
					</Btn>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default partner
