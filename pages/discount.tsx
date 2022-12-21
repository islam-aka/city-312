import React, { FC } from 'react'
import DiscountsContainer from '@/components/layout/Discounts/DiscountsContainer'
import Catalog from '@/components/layout/Catalog/Catalog'
import Header from '@/components/layout/Header/Header'
import { activityTypeData } from '@/components/layout/Catalog/catalog.data'
import { categoryData } from '@/components/layout/Catalog/catalog.data'
import { subСategoryData } from '@/components/layout/Catalog/catalog.data'
import Btn from '@/components/ui/Btn/Btn'
import Footer from '@/components/layout/Footer/Footer'

const Discount: FC = () => {
	return (
		<>
			<Header />
			<div>
				<div>
					<Catalog
						activityTypes={activityTypeData}
						categorys={categoryData}
						subCategorys={subСategoryData}
					/>
				</div>
				<div>
					<DiscountsContainer />
				</div>
				<div className="flex justify-center my-[60px]">
					<Btn
						style={{
							fontFamily: 'Gilroy',
							fontWeight: '600',
							fontSize: '12px',
							lineHeight: '14px',
							textTransform: 'uppercase',
							padding: '10px 30px',
						}}
					>
						полный список
					</Btn>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Discount
