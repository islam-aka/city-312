import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import Header from '@/components/layout/Header/Header'
import YandexMap from '@/components/layout/YandexMaps/YandexMap'
import Btn from '@/components/ui/Btn/Btn'
import Input from '@/components/ui/Input/Input'

import facebook from '@/assets/svg/icon facebook .svg'
import instagram from '@/assets/svg/icon instagram.svg'
import whatsapp from '@/assets/svg/icon whatsapp.svg'

import styles from './contacts.module.scss'

const contacts = () => {
	return (
		<>
			<Header />
			<div className={styles.contacts}>
				<div>
					<h2 className="font-semibold mb-3 text-[32px] leading-[38px] text-center">
						Остались вопросы
					</h2>
					<h3 className="font-medium text-[18px] leading-[21px] text-center">
						Оставтье заявку, мы свяжемся с вами в ближайщее время
					</h3>
				</div>
				<div className="flex justify-between lg:flex-row flex-col lg:items-start items-center mt-9">
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
				<div className="w-full lg:h-[443] h-[200px] mx-auto mt-9">
					<YandexMap />
				</div>
			</div>
		</>
	)
}

export default contacts
