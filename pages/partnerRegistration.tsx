import React, { FC, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BsCheck, BsCheckLg } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'
import { FaTelegramPlane } from 'react-icons/fa'
import { ImFacebook } from 'react-icons/im'

import DropDown from '@/components/layout/DropDown/DropDown'
import { dayDropDownMenu } from '@/components/layout/DropDown/dropDown.data'
import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Btn from '@/components/ui/Btn/Btn'
import Input from '@/components/ui/Input/Input'
import Textarea from '@/components/ui/Textarea/Textarea'

import styles from './partnerRegistration.module.scss'

const PartnerRegistration: FC = () => {
	const [day, setDay] = useState('Понедельник')

	function onChange(event: any) {}
	return (
		<div className={styles.partnerRegistration}>
			<Header />
			<h2 className="text-center mb-10 text-[28px] leading-[27px]">
				РЕГИСТРАЦИЯ ПАРТНЕРА
			</h2>
			<div className={styles.partnerRegistration__container}>
				<div className={styles.partnerRegistration__info}>
					<div>
						<p>Наименование (брендовое название )</p>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] lg:py-[10px] py-[5px]">
							<Input type="text" placeholder="Наименование" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Организационная правовая форма </p>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] lg:py-[10px] py-[5px]">
							<Input type="text" placeholder="Правовая форма" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Тип деятельности</p>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] lg:py-[10px] py-[5px]">
							<Input type="text" placeholder="Тип деятельности" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div className={styles.partnerRegistration__textarea}>
						<p>Наименование (брендовое название )</p>
						<Textarea placeholder="Наименование (брендовое название )" />
					</div>
				</div>
				<div className={styles.partnerRegistration__block}>
					<div className={styles.partnerRegistration__phone}>
						<p>Номера телефона</p>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="+996 (000) 000 000" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="+996 (000) 000 000" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="+996 (000) 000 000" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
						<div className="flex justify-between bg-white rounded-[10px]  font-bold items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="+996 (000) 000 000" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div className={styles.partnerRegistration__social}>
						<div>
							<FaWhatsapp color="#ffffff" size={'18px'} />
							<Input type="text" placeholder="Ссылка на whatsApp" />
						</div>
						<div>
							<AiFillYoutube color="#ffffff" size={'18px'} />
							<Input type="text" placeholder="Ссылка на youtube" />
						</div>
						<div>
							<FaTelegramPlane color="#ffffff" size={'18px'} />
							<Input type="text" placeholder="Ссылка на telegram" />
						</div>
						<div>
							<AiFillInstagram color="#ffffff" size={'18px'} />
							<Input type="text" placeholder="Ссылка на instagram" />
						</div>
						<div>
							<ImFacebook color="#ffffff" size={'18px'} />
							<Input type="text" placeholder="Ссылка на facebook" />
						</div>
					</div>
				</div>
				<div className={styles.partnerRegistration__work}>
					<p>Режим работы:</p>
					<div>
						<div className={styles.partnerRegistration__day}>
							<DropDown state={day} setState={setDay} arr={dayDropDownMenu} />
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
						<div className={styles.userRegistration__offer}>
							<div className="w-[21px] h-[21px] bg-white rounded-[3px] py-1 px-[2px]">
								<BsCheckLg color="#18A164" />
							</div>
							<p> Довогор аферты</p>
						</div>
						<div className={styles.userRegistration__reCaptcha}>
							<ReCAPTCHA
								sitekey="6LesLp0iAAAAAPuelDmzzB86woFbVyZsmfgoNoA-"
								onChange={onChange}
							/>
						</div>
						<div className={styles.userRegistration__btn}>
							<Btn>РЕГИСТРАЦИЯ</Btn>
							<p>у меня есть аккаунт</p>
						</div>
					</div>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	)
}

export default PartnerRegistration
