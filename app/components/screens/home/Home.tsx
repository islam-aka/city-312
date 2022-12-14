import { FC } from 'react'
import HowItWorks from '@/components/layout/HowItWorks/HowItWorks'
import Layout from '@/components/layout/Layout'

import { IHome } from './home.interface'
import WhoBenefits from '@/components/layout/WhoBenefits/WhoBenefits'
import TypesOfDiscount from '@/components/layout/TypesOfDiscount/TypesOfDiscount'
import Reviews from '@/components/layout/Reviews/Reviews'
import PartnerCardSlider from '@/components/layout/PartnerCard/PartnerCardSlider/PartnerCardSlider'
import Location from '@/components/layout/Location/Location'
import Feedback from '@/components/layout/Feedback/Feedback'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<HowItWorks />
			<WhoBenefits />
			<TypesOfDiscount />
			<Reviews />
			<PartnerCardSlider />, <Location />, <Feedback />
		</Layout>
	)
}

export default Home
