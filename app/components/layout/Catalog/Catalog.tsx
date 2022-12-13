import React, { FC, useEffect, useState } from 'react'
import { TMenu } from './catalog.interface'
import styles from './Catalog.module.scss'
import Input from '@/components/ui/Input/Input'
import Btn from '@/components/ui/Btn/Btn'

const Catalog: FC<TMenu> = ({ activityTypes, categorys, subCategorys }) => {
	const [menu, setMenu] = useState(false)
	const [handlerchange, setHandlerchange] = useState({
		activityTypes: 'Меню',
		categorys: 'undefined',
		subCategorys: 'undefined',

		activityTypesId: 0,
		categorysId: 0,
	})

	return (
		<div className={styles.catalogWrapper}>
			<div className="max-w-[1130px] mx-auto flex gap-[18px] mb-16">
				<div className={styles.burger} onClick={() => setMenu(!menu)}>
					<div className={styles.burgerMenu}>
						<div className={!menu ? styles.line : styles.lineTop}></div>
						<div className={!menu ? styles.line : styles.lineNone}></div>
						<div className={!menu ? styles.line : styles.lineBottom}></div>
					</div>
					<p>Каталог</p>
				</div>
				<div className="flex">
					<div
						className="flex items-center py-[12px] px-[15px] w-[612px]"
						style={{
							background: '#FFFFFF',
							boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
							borderRadius: '10px 0px 0px 10px',
						}}
					>
						<Input
							placeholder="Искать скидки"
							style={{ outline: 'none', width: '100%' }}
						/>
					</div>
					<Btn
						style={{
							borderRadius: '0px 10px 10px 0px',
							padding: '13px 33px',
						}}
					>
						Найти
					</Btn>
				</div>
			</div>
			<div className={!menu ? styles.catalogNone : styles.catalog}>
				<div className="bg-white w-full ] mx-auto py-[40px]">
					<h3 className="text-center font-semibold text-[24px] leading-[29px] mb-10">
						{handlerchange.activityTypes}
						{handlerchange.categorys !== 'undefined' &&
							`/${handlerchange.categorys}`}
						{handlerchange.subCategorys !== 'undefined' &&
							`/${handlerchange.subCategorys}`}
					</h3>
					<div className="grid grid-cols-3 gap-[100px] max-w-[1130px] mx-auto">
						<div className="flex flex-col gap-[10px]">
							{activityTypes.activityType.map((items, id) => {
								return (
									<p
										onClick={() =>
											setHandlerchange({
												...handlerchange,
												subCategorys: 'undefined',
												categorys: 'undefined',
												activityTypes: items.name,
												activityTypesId: items.id,
												categorysId: 0,
											})
										}
										style={
											handlerchange.activityTypes === items.name
												? {
														background:
															'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
														borderRadius: '10px',
														padding: '10px',
												  }
												: {
														background: 'none',
												  }
										}
										className={
											'text-[18px] font-medium leading-[21px] text-black-900 cursor-pointer'
										}
										key={id}
									>
										{items.name}
									</p>
								)
							})}
						</div>
						<div className="flex flex-col gap-[10px]">
							{categorys.category.map((items, id) => {
								return (
									items.activity_type === handlerchange.activityTypesId && (
										<p
											onClick={() =>
												setHandlerchange({
													...handlerchange,
													categorys: items.name,
													subCategorys: 'undefined',
													categorysId: items.id,
												})
											}
											style={
												handlerchange.categorys === items.name
													? {
															background:
																'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
															borderRadius: '10px',
															padding: '10px',
													  }
													: {
															background: 'none',
													  }
											}
											className={
												'text-[18px] font-medium leading-[21px] text-black-900 cursor-pointer'
											}
											key={id}
										>
											{items.name}
										</p>
									)
								)
							})}
						</div>
						<div className="flex flex-col gap-[10px]">
							{subCategorys.subCategory.map((items, id) => {
								return (
									items.category_type === handlerchange.categorysId && (
										<p
											onClick={() =>
												setHandlerchange({
													...handlerchange,
													subCategorys: items.name,
												})
											}
											style={
												handlerchange.categorys === items.name
													? {
															background:
																'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
															borderRadius: '10px',
															padding: '10px',
													  }
													: {
															background: 'none',
													  }
											}
											className={
												'text-[18px] font-medium leading-[21px] text-black-900 cursor-pointer'
											}
											key={id}
										>
											{items.name}
										</p>
									)
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
