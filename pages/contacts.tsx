import { useJsApiLoader } from '@react-google-maps/api'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Map from '@/components/layout/Map/Map'
import Btn from '@/components/ui/Btn/Btn'
import Input from '@/components/ui/Input/Input'

import facebook from '@/assets/svg/icon facebook .svg'
import instagram from '@/assets/svg/icon instagram.svg'
import whatsapp from '@/assets/svg/icon whatsapp.svg'

import styles from './contacts.module.scss'

const defaultCenter = {
	lat: 42.87,
	lng: 74.59,
}

type Libraries = (
	| 'drawing'
	| 'geometry'
	| 'localContext'
	| 'places'
	| 'visualization'
)[]

const libraries: Libraries = ['places']

const contacts = () => {
	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: 'AIzaSyBCKfxyxhPafyv0-c5x_kxO24aNijt0b6U',
		libraries,
	})
	return (
		<>
			<Header />
			<div className={styles.contacts}>
				<div>
					<h2 className="font-semibold mb-3 text-[32px] leading-[38px] text-center">
						Остались вопросы
					</h2>
					<h3 className="font-medium text-[18px] leading-[21px] text-center">
						Оставьте заявку, мы свяжемся с вами в ближайщее время
					</h3>
				</div>
				<div className="flex justify-around lg:flex-row flex-col lg:items-start items-center mt-9">
					<div className={styles.form}>
						<div>
							<p>Ф.И.О.</p>
							<Input type={'text'} />
						</div>
						<div>
							<p>Телефон</p>
							<Input type={'text'} />
						</div>
						<div>
							<p>Почта</p>
							<Input type={'email'} />
						</div>
						<div className="lg:mt-0 mt-2 lg:mb-0 mb-8 lg:text-start text-center">
							<Btn>Отправить заявку </Btn>
						</div>
					</div>
					<div className="w-[205px] font-medium text-[18px] leading-[21px]">
						<h3>Наши социальные сети</h3>
						<div className="mt-7 flex gap-2">
							<Link href={'https://www.instagram.com/'}>
								<a target={'_blank'}>
									<Image
										src={instagram}
										width={50.75}
										height={50.75}
										alt="City-312"
										draggable={false}
									/>
								</a>
							</Link>
							<Link href={'https://facebook.com/'}>
								<a target={'_blank'}>
									<Image
										src={facebook}
										width={50.75}
										height={50.75}
										alt="City-312"
										draggable={false}
									/>
								</a>
							</Link>
							<Link href={'https://www.whatsapp.com/'}>
								<a target={'_blank'}>
									<Image
										src={whatsapp}
										width={50.75}
										height={50.75}
										alt="City-312"
										draggable={false}
									/>
								</a>
							</Link>
						</div>
						<div className="mt-4">
							<h3>Почта</h3>
							<p className="font-semibold ">office@city312.kg</p>
						</div>
						<div className="mt-4">
							<h3 className="mb-2">Телефон</h3>
							<p className="font-semibold ">+ 996 (502) 031222</p>
							<p className="font-semibold ">+ 996 (505) 031222</p>
						</div>
					</div>
				</div>
				<div className="mx-auto mt-10 mb-16">
					<div className="w-full lg:h-[350px] h-[200px]">
						{isLoaded ? <Map center={defaultCenter} /> : <h2>loading</h2>}
					</div>
					<div className="mt-5 py-3 flex justify-center font-['Gilroy'] flex-wrap md:gap-28 gap-10 ">
						<div>
							<h3 className="font-bold text-[28px] md:mb-5 mb-3">Наш адрес</h3>
							<p className="text-[18px] text-[#282828]">Бишкек</p>
						</div>
						<div>
							<h3 className="md:mb-5 mb-3 font-semibold text-[18px]">Офис</h3>
							<p className="text-[18px]">ул. Бишкек</p>
							<p className="text-[18px]">+996 558 999 000</p>
						</div>
						<div>
							<h3 className="md:mb-5 mb-3 font-semibold text-[18px]">Офис</h3>
							<p className="text-[18px]">ул. Бишкек</p>
							<p className="text-[18px]">+996 558 999 000</p>
						</div>
						<div>
							<h3 className="md:mb-5 mb-3 font-semibold text-[18px]">Офис</h3>
							<p className="text-[18px]">ул. Бишкек</p>
							<p className="text-[18px]">+996 558 999 000</p>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default contacts
