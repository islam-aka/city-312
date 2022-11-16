import React, { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'
import Btn from '@/components/ui/Btn/Btn'
import { IPartnerPage } from './partnerPages.interface'
import { stocksCard } from '../Stocks/stocks.data'
import Header from '../Header/Header'
import { BsFillCircleFill } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import styles from './PartnerPages.module.scss'
import StocksSliders from '../Stocks/StocksSliders'
import Map from '../Map/Map'
import { useJsApiLoader } from '@react-google-maps/api'
import Footer from '../Footer/Footer'

type Libraries = (
	| 'drawing'
	| 'geometry'
	| 'localContext'
	| 'places'
	| 'visualization'
)[]

const libraries: Libraries = ['places']

const PartnerPages: FC<{ partner: IPartnerPage }> = ({ partner }) => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBCKfxyxhPafyv0-c5x_kxO24aNijt0b6U',
		libraries,
	})
	let contact = JSON.parse(partner.contacts)

	return (
		<>
			<Header />
			<div className={styles.partnerPages}>
				<div
					style={{
						background: `url(${partner.image})`,
						width: '100%',
						height: '373px',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				></div>
				<div className="flex justify-between max-w-[1200px] w-full mx-auto mt-[20px]">
					<div className="w-[157px] h-[157px]  relative mr-[33px]">
						<div
							className="w-[157px] h-[157px] rounded-[50%] absolute top-[-50px]"
							style={{
								background: `url(${partner.logo})`,
								backgroundRepeat: 'no-repeat',
								backgroundSize: 'cover !important',
							}}
						></div>
					</div>
					<div className="w-[611px] ">
						<div className="flex items-end">
							<div className="mt-1">
								<p className="font-semibold text-[34px] leading-[43px]">
									{partner.name}
								</p>
								<p className="mr-[51px] font-medium text-[34px] leading-[43px]">
									{partner.category}
								</p>
							</div>
							<div className="flex gap-3 text-[24px] font-medium leading-[28px]">
								<p>{partner.rating}</p>
								<div className="flex gap-2">
									<AiFillStar color="#F8A303" />
									<AiFillStar color="#F8A303" />
									<AiFillStar color="#F8A303" />
									<AiFillStar color="#F8A303" />
									<AiFillStar color="#565656" />
								</div>
							</div>
						</div>

						<p className="text-[18px] leading-[21px] mt-[20px]">
							{partner.description}
						</p>
					</div>
					<div className="py-[20px] px-3 w-[305px] ">
						<Btn
							style={{
								background: '#0077FF',
								fontSize: '15px',
								lineHeight: '18px',
								padding: '15px 0',
								width: '100%',
								color: '#FFFFFF',
							}}
						>
							Отправить сообщение
						</Btn>
						<p className="text-[18px] leading-[21px] font-semibold mt-[10px] text-center ">
							Контакты
						</p>
						<div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 text-[16px] leading-[19px] font-medium ">
							<span>{contact.number1}</span>
							<span>{contact.number2}</span>
							<span>{contact.number3}</span>
							<span>{contact.number4}</span>
						</div>
					</div>
				</div>
				<div className="max-w-[1200px] w-full mx-auto mt-[70px]">
					<div className="flex items-center gap-[10px]">
						<h2 className="text-[32px] leading-[38px] w-auto">
							Действующие акции
						</h2>
						<BsFillCircleFill color="#42FF00" />
					</div>
					<StocksSliders data={stocksCard} />
				</div>
				<div className="max-w-[1200px] w-full mx-auto mt-12">
					<div>
						<h3 className="mb-4 font-semibold text-[24px]">Адрес</h3>
						<p className="max-w-[485px] w-full text-[18px] leading-[21px] mb-9">
							{partner.address}
						</p>
					</div>
					<div className="w-full h-[443px]">
						{isLoaded ? <Map center={partner.location} /> : <h2>loading</h2>}
					</div>
				</div>
				<div className="max-w-[1200px] w-full mx-auto mt-[70px]">
					<h3 className="font-semibold text-[24px] ">Отзывы об услуге </h3>
					<div className="pt-6 flex justify-between items-center">
						<div
							className="max-w-[813px] w-full h-[309px]"
							style={{
								boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
								borderRadius: '20px',
							}}
						></div>
						<div className="max-w-[232px] w-full h-32 grid gap-4">
							<Btn
								style={{
									width: '100%',
									padding: '15px 0',
									background: '#0077FF',
									color: 'white',
									fontWeight: '500',
									fontSize: '18px',
								}}
							>
								Задать вопрос
							</Btn>
							<Btn
								style={{
									width: '100%',
									padding: '15px 0',
									background: 'white',
									color: 'black',
									fontWeight: '500',
									fontSize: '18px',
									boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.25)',
								}}
							>
								Оставить отзыв
							</Btn>
						</div>
					</div>
				</div>
				<div className="max-w-[1200px] w-full mx-auto mt-20 mb-16">
					<h3 className="mt-1 text-[32px] font-semibold mb-7">
						Вам может понравиться
					</h3>
					<StocksSliders data={stocksCard} />
				</div>
			</div>
			<Footer />
		</>
	)
}

export default PartnerPages
