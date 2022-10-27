import React, { FC } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { BsCheck } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'

import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Btn from '@/components/ui/Btn/Btn'
import Input from '@/components/ui/Input/Input'

import styles from './userRegistration.module.scss'

const registration: FC = () => {
	function onChange() {
		console.log('Captcha value:')
	}
	return (
		<div className={styles.userRegistration}>
			<Header />
			<div className={styles.userRegistration__container}>
				<h2>РЕГИСТРАЦИЯ ПОЛЬЗОВАТЕЛЯ</h2>
				<form className={styles.userRegistration__form}>
					<div>
						<p>Почта</p>
						<div className="flex bg-white rounded-[10px]  font-bold items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="Эл почта" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div className="flex gap-5">
						<div>
							<p>Имя</p>
							<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
								<Input type="text" placeholder="Имя" />
								<BsCheck color="#F5C521" size={'18px'} />
							</div>
						</div>
						<div>
							<p>Фамилия</p>
							<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
								<Input type="text" placeholder="Фамилия" />
								<BsCheck color="#F5C521" size={'18px'} />
							</div>
						</div>
					</div>
					<div>
						<p>Номер телефона</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="Номер телефона" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Дата рождения</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="Дата рождения" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Номер дисконтной карты</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="Номер дисконтной карты" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Пароль</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input type="text" placeholder="Пароль" />
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
				</form>
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
			<Footer />
		</div>
	)
}

export default registration
