import { FC } from 'react'

import Banner from '@/components/layout/Banner/Banner'
import HowItWorks from '@/components/layout/HowItWorks/HowItWorks'
import Layout from '@/components/layout/Layout'

import { IHome } from './home.interface'
import WhoBenefits from '@/components/layout/WhoBenefits/WhoBenefits'

const Home: FC<IHome> = () => {
	return (
		<Layout>
			<HowItWorks />
			<WhoBenefits />
		</Layout>
	)
}

export default Home
