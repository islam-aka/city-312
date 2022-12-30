import Input from '@/components/ui/Input/Input'
import React, { useState } from 'react'
import { BsCheck, BsCheckLg } from 'react-icons/bs'
import styles from './Stocks.module.scss'
import { typeOfBusinessActivityData, typeOfDiscount } from './stocks.data'
import { dayDropDownMenu } from '@/components/layout/DropDown/dropDown.data'
import { ITypeOfDiscountItem } from './Stocks.interface'
import { RiWhatsappFill } from 'react-icons/ri'
import { BsYoutube } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import DropDown from '../DropDown/DropDown'
import ReCAPTCHA from 'react-google-recaptcha'
import Btn from '@/components/ui/Btn/Btn'
import Header from '../Header/Header'

const CreateStocks = () => {
	const [day, setDay] = useState('Понедельник')
	const [stocks, setStocks] = useState({
		nameStocks: '',
		shortDes: '',
		type_of_discount: '',
		type_of_business_activity: '',
		price_before_discount: 0,
		price_after_discount: 0,
		number_of_percent: 0,
		number_of_cashback: 0,
		percentage_of_accumulation: 0,
		how_much_time_is_left: '',
		discounts_left: 0,
		the_beginning_of_the_promotion: '',
		end_of_the_promotion: '',
		address: '',
	})
	const [typeStocks, setTypeStocks] = useState(typeOfDiscount)
	const [contacts, setContacts] = useState({
		phoneNumberOne: '',
		phoneNumberTwo: '',
		phoneNumberThree: '',
		phoneNumberFour: '',
	})
	const [social, setSocial] = useState({
		whatsapp: '',
		youtube: '',
		telegram: '',
		instagram: '',
		facebook: '',
	})
	const [typeOfBusinessActivity, setTypeOfBusinessActivity] = useState(
		typeOfBusinessActivityData
	)
	const [selectedStocks, setSelectedStocks] = useState({
		title: 'Выберите вид скидки',
		TypeOfbusinessactivity: 'Вид деятельности',
		openTypeOfDiscount: false,
		openTypeOfBusinessActivity: false,
	})

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const value = event.target.value
		if (value.length <= 100) {
			setStocks({ ...stocks, [event.target.name]: value })
		}
	}
	const handleChangePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContacts({ ...contacts, [event.target.name]: event.target.value })
	}
	const handleChangeSocial = (event: React.ChangeEvent<HTMLInputElement>) => {
		setContacts({ ...contacts, [event.target.name]: event.target.value })
	}

	const handleChangeTypeStocks = (item: ITypeOfDiscountItem, str: string) => {
		switch (str) {
			case 'type_of_business_activity':
				setStocks({ ...stocks, type_of_business_activity: item.title })
				setSelectedStocks({
					...selectedStocks,
					openTypeOfBusinessActivity: !selectedStocks.openTypeOfBusinessActivity,
					openTypeOfDiscount: false,
					TypeOfbusinessactivity: item.title,
				})
				break
			case 'typeStocks':
				setStocks({ ...stocks, type_of_discount: item.title })
				setSelectedStocks({
					...selectedStocks,
					openTypeOfDiscount: false,
					title: item.title,
				})
				break
		}
	}
	function onChange(event: any) {}
	return (
		<>
			<Header />
			<div className={styles.createStocks}>
				<div className="max-w-[386px] w-full grid gap-5">
					<div>
						<p>Наименование компании</p>

						<div className={styles.stocksBlock}>
							<Input
								name="name_company"
								onChange={(e) => handleChange(e)}
								type="text"
								style={{ width: '100%' }}
							/>
							<div className="absolute right-2 top-[25%]">
								<BsCheck color="#F5C521" size={'22px'} />
							</div>
						</div>
					</div>
					<div className={styles.typeStocks}>
						<p>Вид предпринимательской деятельности</p>
						<div
							className={styles.stocksBlock}
							onClick={() =>
								setSelectedStocks({
									...selectedStocks,
									openTypeOfBusinessActivity: !selectedStocks.openTypeOfBusinessActivity,
									openTypeOfDiscount: false,
								})
							}
						>
							<p>{selectedStocks.TypeOfbusinessactivity}</p>
							<div className="absolute right-2 top-[25%]">
								<BsCheck color="#F5C521" size={'22px'} />
							</div>
						</div>
						<div
							className={
								selectedStocks.openTypeOfBusinessActivity
									? styles.typeStocksNone
									: styles.typeStocksOpen
							}
						>
							{typeOfBusinessActivity.data.map((item, id) => {
								return (
									<p
										key={id}
										onClick={() =>
											handleChangeTypeStocks(item, 'type_of_business_activity')
										}
										className="cursor-pointer"
									>
										{item.title}
									</p>
								)
							})}
						</div>
					</div>
					<div>
						<p>Название скидки </p>

						<div className={styles.stocksBlock}>
							<Input
								name="nameStocks"
								onChange={(e) => handleChange(e)}
								type="text"
								style={{ width: '100%' }}
							/>
							<div className="absolute right-2 top-[25%]">
								<BsCheck color="#F5C521" size={'22px'} />
							</div>
						</div>
					</div>
					<div className={styles.typeStocks}>
						<p>Вид скидки</p>
						<div
							className={styles.stocksBlock}
							onClick={() =>
								setSelectedStocks({
									...selectedStocks,
									openTypeOfDiscount: !selectedStocks.openTypeOfDiscount,
									openTypeOfBusinessActivity: false,
								})
							}
						>
							<p>{selectedStocks.title}</p>
							<div className="absolute right-2 top-[25%]">
								<BsCheck color="#F5C521" size={'22px'} />
							</div>
						</div>
						<div
							className={
								selectedStocks.openTypeOfDiscount
									? styles.typeStocksNone
									: styles.typeStocksOpen
							}
						>
							{typeStocks.data.map((item, id) => {
								return (
									<p
										key={id}
										onClick={() => handleChangeTypeStocks(item, 'typeStocks')}
										className="cursor-pointer"
									>
										{item.title}
									</p>
								)
							})}
						</div>
					</div>
					<div>
						<p>Цена до скидки </p>
						<div className={styles.priceStocks}>
							<Input
								name="price_before_discount"
								onChange={(e) => handleChange(e)}
								value={stocks.price_before_discount}
								type="number"
							/>
							<p>сом</p>
							<div className="absolute right-2 top-[25%]">
								<BsCheck color="#F5C521" size={'22px'} />
							</div>
						</div>
					</div>
					<div>
						<p>Цена после скидки</p>
						<div className={styles.priceStocks}>
							<Input
								onChange={(e) => handleChange(e)}
								name="price_after_discount"
								value={stocks.price_after_discount}
								type="number"
							/>
							<p>сом</p>
							<div className="absolute right-2 top-[25%]">
								<BsCheck color="#F5C521" size={'22px'} />
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between ">
						<div className="w-[136px] h-[130px] rounded-[27px] bg-gray-600 flex justify-center items-center text-primary">
							image
						</div>
						<div className="overflow-hidden w-[135px]">
							<input type="file" name="ava" className="w-[135px]" />
						</div>
					</div>
					<div>
						<p>Краткое описание акции на карточки</p>
						<div className={styles.stocksDes}>
							<textarea
								value={stocks.shortDes}
								onChange={(e) => handleChange(e)}
								style={{ width: '100%' }}
								name="shortDes"
							/>
							<div className="absolute right-2 top-[75%]">
								<p className="text-gray-800 text-[12px]">
									{stocks.shortDes.length}/100
								</p>
							</div>
						</div>
					</div>
					<div>
						<p>Условия акции</p>
						<div className={styles.stocksDes}>
							<textarea
								onChange={(e) => handleChange(e)}
								style={{ width: '100%' }}
								name="conditionsStock"
							/>
						</div>
					</div>

					<div>
						<p>Описание акции</p>
						<div className={styles.stocksDes}>
							<textarea
								onChange={(e) => handleChange(e)}
								style={{ width: '100%' }}
								name="stockDes"
							/>
						</div>
					</div>
				</div>

				<div className="max-w-[792px] w-full flex gap-5">
					<div className="max-w-[386px] w-full h-[100%] flex flex-col gap-5 ">
						<div>
							<p>Кол-во процента</p>
							<div className={styles.percentStocks}>
								<p>%</p>
								<Input
									onChange={(e) => handleChange(e)}
									name="number_of_percent"
									value={stocks.number_of_percent}
									type="number"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div>
							<p>Кол-во кэшбека</p>
							<div className={styles.percentStocks}>
								<p>%</p>
								<Input
									onChange={(e) => handleChange(e)}
									name="number_of_cashback"
									value={stocks.number_of_cashback}
									type="number"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div>
							<p>Процент накопления </p>
							<div className={styles.percentStocks}>
								<p>%</p>
								<Input
									onChange={(e) => handleChange(e)}
									name="percentage_of_accumulation"
									value={stocks.percentage_of_accumulation}
									type="number"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div>
							<p>До какого числа действует скидка</p>
							<div className={styles.percentStocks}>
								<Input
									onChange={(e) => handleChange(e)}
									name="how_much_time_is_left"
									value={stocks.how_much_time_is_left}
									type="date"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>

						<div>
							<p>Осталось скидок</p>
							<div className={styles.percentStocks}>
								<Input
									onChange={(e) => handleChange(e)}
									name="discounts_left"
									value={stocks.discounts_left}
									type="number"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div>
							<p>Начало акции</p>
							<div className={styles.percentStocks}>
								<Input
									onChange={(e) => handleChange(e)}
									name="the_beginning_of_the_promotion"
									value={stocks.the_beginning_of_the_promotion}
									type="date"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div>
							<p>Конец акции</p>
							<div className={styles.percentStocks}>
								<Input
									onChange={(e) => handleChange(e)}
									name="end_of_the_promotion"
									value={stocks.end_of_the_promotion}
									type="date"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div>
							<p>Адрес</p>
							<div className={styles.percentStocks}>
								<Input
									onChange={(e) => handleChange(e)}
									name="address"
									value={stocks.address}
									type="text"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[386px] w-full h-[100%] flex flex-col gap-5">
						<div className="grid gap-5">
							<p>Номера телефона</p>
							<div className={styles.contactStocks}>
								<Input
									onChange={(e) => handleChangePhone(e)}
									name="phoneNumberOne"
									placeholder="+996 (000) 000 000"
									value={contacts.phoneNumberOne}
									type="text"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
							<div className={styles.contactStocks}>
								<Input
									onChange={(e) => handleChangePhone(e)}
									name="phoneNumberTwo"
									placeholder="+996 (000) 000 000"
									value={contacts.phoneNumberTwo}
									type="text"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
							<div className={styles.contactStocks}>
								<Input
									onChange={(e) => handleChangePhone(e)}
									name="phoneNumberThree"
									placeholder="+996 (000) 000 000"
									value={contacts.phoneNumberThree}
									type="text"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
							<div className={styles.contactStocks}>
								<Input
									onChange={(e) => handleChangePhone(e)}
									name="phoneNumberFour"
									placeholder="+996 (000) 000 000"
									value={contacts.phoneNumberFour}
									type="text"
								/>

								<div className="absolute right-2 top-[25%]">
									<BsCheck color="#F5C521" size={'22px'} />
								</div>
							</div>
						</div>
						<div className="grid gap-5">
							<div className={styles.socialStocks}>
								<RiWhatsappFill color="6A6A6A" size={34} />
								<div>
									<Input
										onChange={(e) => handleChangeSocial(e)}
										name="whatsapp"
										value={social.whatsapp}
										type="text"
									/>
								</div>
							</div>
							<div className={styles.socialStocks}>
								<BsYoutube color="6A6A6A" size={34} />
								<div>
									<Input
										onChange={(e) => handleChangeSocial(e)}
										name="youtube"
										value={social.youtube}
										type="text"
									/>
								</div>
							</div>
							<div className={styles.socialStocks}>
								<FaTelegramPlane color="6A6A6A" size={34} />
								<div>
									<Input
										onChange={(e) => handleChangeSocial(e)}
										name="telegram"
										value={social.telegram}
										type="text"
									/>
								</div>
							</div>
							<div className={styles.socialStocks}>
								<AiFillInstagram color="6A6A6A" size={34} />
								<div>
									<Input
										onChange={(e) => handleChangeSocial(e)}
										name="instagram"
										value={social.instagram}
										type="text"
									/>
								</div>
							</div>
							<div className={styles.socialStocks}>
								<CgFacebook color="6A6A6A" size={34} />
								<div>
									<Input
										onChange={(e) => handleChangeSocial(e)}
										name="facebook"
										value={social.facebook}
										type="text"
									/>
								</div>
							</div>
						</div>
						<div className={styles.createStocksWork}>
							<p>Режим работы:</p>
							<div>
								<div className={styles.partnerRegistration__day}>
									<DropDown
										state={day}
										setState={setDay}
										arr={dayDropDownMenu}
									/>
								</div>
								<div className={styles.partnerRegistration__hour}>
									<div>
										<span>c</span>
										<Input type="text" placeholder="09:00" />
										<BsCheck color="#F5C521" />
									</div>
									<div>
										<span>до</span>
										<Input type="text" placeholder="09:00" />
										<BsCheck color="#F5C521" />
									</div>
								</div>
							</div>
							<div className={styles.userRegistration__check}>
								<div className={styles.userRegistration__reCaptcha}>
									<ReCAPTCHA
										sitekey="6LesLp0iAAAAAPuelDmzzB86woFbVyZsmfgoNoA-"
										onChange={onChange}
									/>
								</div>
								<div className={styles.userRegistration__btn}>
									<Btn style={{ padding: '15px 0' }}>Создать скидку</Btn>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CreateStocks
