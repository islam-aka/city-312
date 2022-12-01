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
import facebook from '@/assets/svg/icon facebook .svg'
import instagram from '@/assets/svg/icon instagram.svg'
import whatsapp from '@/assets/svg/icon whatsapp.svg'
import Link from 'next/link'
import Image from 'next/image'

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
	let social = JSON.parse(partner.social_network)

	return (
		<>
			<Header />
			<div className={styles.partnerPages}>
				<div className={styles.partnerPages__profileHeader}>
					<div
						style={{
							background: `url(${partner.image})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover',
						}}
					></div>
				</div>
				<div className={styles.partnerPages__content}>
					<div className="flex justify-between flex-col text-center items-center lg:text-start lg:items-start lg:flex-row max-w-[1200px] w-full mx-auto mt-[50px] md:mt-[20px]">
						<div className="w-[80px] h-[80px] sm:w-[157px] sm:h-[157px] absolute md:relative">
							<div
								className={styles.partnerPages__content_logo}
								style={{
									background: `url(${partner.logo})`,
									backgroundRepeat: 'no-repeat',
									backgroundSize: 'cover !important',
								}}
							></div>
						</div>
						<div className="max-w-[611px] w-full ">
							<div className="flex  justify-center lg:justify-between  items-center lg:items-end text-[24px] leading-[43px]">
								<div className="mt-1 ">
									<p className="font-semibold ">{partner.name}</p>
									<p className="lg:mr-[51px] font-medium">{partner.category}</p>
								</div>
								<div className="hidden lg:flex text-[24px] font-medium leading-[28px]">
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

							<p className="text-[16px] leading-[21px] mt-[20px]">
								{partner.description}
							</p>
						</div>
						<div className={styles.partnerPages__content_contacts}>
							<Btn
								style={{
									background: '#0077FF',
									padding: '15px 0',
									width: '100%',
									color: '#FFFFFF',
								}}
							>
								Отправить сообщение
							</Btn>
							<div className="flex flex-row md:flex-col justify-center gap-5 md:gap-0  mt-[10px]">
								<div>
									<p className="font-semibold text-center ">Контакты</p>
									<div className="grid md:grid-cols-2 gap-x-2 gap-y-1 mt-3 text-[16px] leading-[19px] font-medium ">
										<span>{contact.number1}</span>
										<span>{contact.number2}</span>
										<span>{contact.number3}</span>
										<span>{contact.number4}</span>
									</div>
								</div>
								<div className="flex flex-col md:flex-row items-end justify-center gap-2 mt-3">
									<Link href={'https://www.instagram.com/'}>
										<Image
											src={instagram}
											width={34}
											height={34}
											alt="City-312"
											draggable={false}
										/>
									</Link>
									<Link href={'https://facebook.com/'}>
										<Image
											src={facebook}
											width={34}
											height={34}
											alt="City-312"
											draggable={false}
										/>
									</Link>
									<Link href={'https://www.whatsapp.com/'}>
										<Image
											src={whatsapp}
											width={34}
											height={34}
											alt="City-312"
											draggable={false}
										/>
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="max-w-[1200px] mx-auto mt-[70px]">
						<div className="flex items-center  gap-[10px] justify-center lg:justify-start">
							<h2 className="text-[24px] lg:text-[32px] leading-[38px] w-auto">
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
						<div className="pt-6 flex justify-between md:flex-row flex-col items-center">
							<div
								className="max-w-[813px] w-full h-[309px]"
								style={{
									boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.25)',
									borderRadius: '20px',
								}}
							></div>
							<div className={styles.partnerPages__content_feedback_btn}>
								<Btn>Задать вопрос</Btn>
								<Btn>Оставить отзыв</Btn>
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
			</div>
			<Footer />
		</>
	)
}

export default PartnerPages
