import React, { FC } from 'react'
import DiscountsContainer from '@/components/layout/Discounts/DiscountsContainer'
import Catalog from '@/components/layout/Catalog/Catalog'
import Header from '@/components/layout/Header/Header'
import { activityTypeData } from '@/components/layout/Catalog/catalog.data'
import { categoryData } from '@/components/layout/Catalog/catalog.data'
import { subСategoryData } from '@/components/layout/Catalog/catalog.data'

const Discount: FC = () => {
	return (
		<>
			<Header />
			<div className="mt-[144px]">
				<Catalog
					activityTypes={activityTypeData}
					categorys={categoryData}
					subCategorys={subСategoryData}
				/>
				<DiscountsContainer />
			</div>
		</>
	)
}

export default Discount
