import React from 'react'
import styles from './Auth.module.scss'
import authImg from '@/assets/images/authImg.png'
import logoGoogle from '@/assets/images/Google Logos.png'
import Image from 'next/image'
import Input from '@/components/ui/Input/Input'
import { BsCheck } from 'react-icons/bs'
import Btn from '@/components/ui/Btn/Btn'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

const Auth = () => {
	return (
		<>
			<Header />
			<div className={styles.auth}>
				<div className={styles.authImg}>
					<Image src={authImg} />
				</div>
				<div className="w-full lg:w-[50%] flex justify-center items-center flex-col">
					<h3 className="text-white">ВОЙТИ</h3>
					<div className="max-w-[424px] w-full flex flex-col items-center">
						<div className="max-w-[365px] w-[calc(100%_-_40px)]">
							<p className="text-gray-600">Почта</p>
							<div className="flex justify-between bg-white rounded-[10px] items-center px-[12px] py-[10px]">
								<Input
									type="text"
									placeholder="Эл почта"
									style={{ width: '100%' }}
								/>
								<BsCheck color="#F5C521" size={'18px'} />
							</div>
						</div>
						<div className="max-w-[365px] w-[calc(100%_-_40px)] mt-5">
							<p className="text-gray-600">Пароль</p>
							<div className="flex justify-between bg-white rounded-[10px] items-center px-[12px] py-[10px]">
								<Input
									type="password"
									placeholder="Пароль"
									style={{ width: '100%' }}
								/>
								<BsCheck color="#F5C521" size={'18px'} />
							</div>
						</div>
						<div className="flex justify-center mt-[30px]">
							<Btn style={{ padding: '15px 78.5px' }}>Aвторизоваться</Btn>
						</div>
						<div className="flex items-center gap-[15px] mt-[42px] mb-[20px]">
							<div
								className="lg:w-[130px] w-[70px]"
								style={{
									height: '0',
									border: '1px solid #ffffff',
								}}
							></div>
							<p className="text-white">войти с помощью</p>
							<div
								className="lg:w-[130px] w-[70px]"
								style={{
									height: '0',
									border: '1px solid #ffffff',
								}}
							></div>
						</div>
						<div>
							<Image src={logoGoogle} />
						</div>
						<p className="text-white font-medium cursor-pointer">
							забыли логин или пароль?
						</p>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default Auth
