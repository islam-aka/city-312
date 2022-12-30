import React, { FC, useState } from 'react'
import { TMenu, IState } from './catalog.interface'
import styles from './Catalog.module.scss'
import lessImg from '@/assets/svg/less.svg'
import Input from '@/components/ui/Input/Input'
import Btn from '@/components/ui/Btn/Btn'
import { useWindowWidth } from '@/hooks/Hooks'
import Categorys from './Categorys'
import Image from 'next/image'
import SubCategorys from './SudCategorys'

const Catalog: FC<TMenu> = ({ activityTypes, categorys, subCategorys }) => {
	const width = useWindowWidth()

	const [menu, setMenu] = useState(false)
	const [handlerchange, setHandlerchange] = useState<IState>({
		activityTypes: 'Меню',
		categorys: 'undefined',
		subCategorys: 'undefined',
		activityTypesId: 0,
		categorysId: 0,
		subCategory: 0,
	})
	console.log(handlerchange.subCategory)

	return (
		<div className={menu ? styles.catalogWrapper : styles.catalogWrapperFixed}>
			<div className={styles.catalogContainer}>
				<div
					className="mx-auto grid sm:flex gap-[18px] mb-16 justify-center"
					style={{ maxWidth: '1200px', width: 'calc(100% - 100px)' }}
				>
					<div className={styles.burger} onClick={() => setMenu(!menu)}>
						<div className={styles.burgerMenu}>
							<div className={!menu ? styles.line : styles.lineTop}></div>
							<div className={!menu ? styles.line : styles.lineNone}></div>
							<div className={!menu ? styles.line : styles.lineBottom}></div>
						</div>
						<p>Каталог</p>
					</div>
					<div className="flex max-w-[712px] w-full">
						<div
							className="flex items-center py-[12px] px-[15px] w-full"
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
								padding: '13px 25px',
							}}
						>
							Найти
						</Btn>
					</div>
				</div>
				<div className={!menu ? styles.catalogNone : styles.catalog}>
					<div className="bg-white w-full ] mx-auto py-[40px]">
						<h3 className="text-center font-semibold w-[calc(100%_-_30px)] text-[24px] leading-[29px] mb-10 ">
							{handlerchange.activityTypes}
							{handlerchange.categorys !== 'undefined' &&
								`/${handlerchange.categorys}`}
							{handlerchange.subCategorys !== 'undefined' &&
								`/${handlerchange.subCategorys}`}
						</h3>
						<div
							className="grid lg:grid-cols-3 lg:gap-[40px] max-w-[1130px] mx-auto"
							style={{ maxWidth: '1200px', width: 'calc(100% - 50px)' }}
						>
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
							<div className="hidden lg:flex flex-col gap-[10px]">
								{categorys.category.map((items, id) => {
									return (
										handlerchange.activityTypesId === items.activity_type && (
											<p
												onClick={() =>
													setHandlerchange({
														...handlerchange,
														subCategorys: 'undefined',
														categorys: items.name,
														categorysId: items.id,
													})
												}
												style={
													handlerchange.categorysId === items.id
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
							<div className="hidden lg:flex  flex-col gap-[10px]">
								{subCategorys.subCategory.map((items, id) => {
									return (
										items.category_type === handlerchange.categorysId && (
											<p
												onClick={() =>
													setHandlerchange({
														...handlerchange,
														subCategory: items.id,
													})
												}
												style={
													handlerchange.subCategory === items.id
														? {
																background:
																	'linear-gradient(180deg, #FFE25A 0%, #FFA852 100%)',
																borderRadius: '10px',
																padding: '10px',
																color: 'black',
														  }
														: {
																background: 'none',
														  }
												}
												className={
													'text-[18px] text-blue-400 font-medium leading-[21px] cursor-pointer'
												}
												key={id}
											>
												{items.name}
											</p>
										)
									)
								})}
							</div>
							<div
								className={
									handlerchange.activityTypesId >= 1
										? styles.catalogActivityType
										: styles.catalogActivityTypeNone
								}
							>
								<div className="my-[28px] lg:hidden">
									<div
										onClick={() =>
											setHandlerchange({
												...handlerchange,
												activityTypesId: 0,
												categorysId: 0,
											})
										}
										className="ml-[20px] flex pl-[13px] items-center w-[40px] h-[40px] rounded-[50%] text-[25px] cursor-pointer"
										style={{ border: '1px solid black' }}
									>
										<Image src={lessImg} />
									</div>
								</div>
								{categorys.category.map((items, i) => {
									return (
										items.activity_type === handlerchange.activityTypesId && (
											<Categorys
												key={i}
												{...items}
												handlerchange={handlerchange}
												setHandlerchange={setHandlerchange}
											/>
										)
									)
								})}
							</div>
							<div
								className={
									handlerchange.categorysId >= 1
										? styles.subCategory
										: styles.subCategoryNone
								}
							>
								<div className="my-[28px] lg:hidden">
									<div
										onClick={() =>
											setHandlerchange({
												...handlerchange,
												categorysId: 0,
											})
										}
										className="ml-[20px] flex pl-[13px] items-center w-[40px] h-[40px] rounded-[50%] text-[25px] cursor-pointer"
										style={{ border: '1px solid black' }}
									>
										<Image src={lessImg} />
									</div>
								</div>
								{subCategorys.subCategory.map((items, i) => {
									return (
										items.category_type === handlerchange.categorysId && (
											<SubCategorys
												key={i}
												{...items}
												handlerchange={handlerchange}
												setHandlerchange={setHandlerchange}
											/>
										)
									)
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog
