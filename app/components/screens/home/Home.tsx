import { FC } from 'react'

import Banner from '@/components/layout/Banner/Banner'
import HowItWorks from '@/components/layout/HowItWorks/HowItWorks'
import Layout from '@/components/layout/Layout'

import { IHome } from './home.interface'
import WhoBenefits from '@/components/layout/WhoBenefits/WhoBenefits'
import TypesOfDiscount from '@/components/layout/TypesOfDiscount/TypesOfDiscount'
import Location from '@/components/layout/Location/Location'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<HowItWorks />
			<WhoBenefits />
			<TypesOfDiscount />
			<Location />
		</Layout>
	)
}

export default Home
