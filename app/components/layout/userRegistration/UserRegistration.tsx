import React, { FC, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { BsCheck } from 'react-icons/bs'
import { BsCheckLg } from 'react-icons/bs'

import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import Btn from '@/components/ui/Btn/Btn'
import Input from '@/components/ui/Input/Input'

import styles from './userRegistration.module.scss'
import { IUserRegis } from './userRegistration.interface'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'
import axios from 'axios'

const UserRegistration = () => {
	const [user, setUser] = useState<IUserRegis>({
		email: '',
		name: '',
		second_name: '',
		date_of_birth: '',
		phone_number: '',
		password: '',
		password2: '',
		image: null,
	})
	const [check, setCheck] = useState({
		password: false,
		password2: false,
		recaptcha: false,
	})
	const onChange = (input: any) => {
		setCheck({ ...check, recaptcha: true })
	}
	const handlerchange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [event.target.name]: event.target.value })
		console.log(user)
	}
	const regis = async () => {
		if (check.recaptcha) {
			try {
				const formData = new FormData()
				formData.append('email', user.email)
				formData.append('name', user.name)
				formData.append('second_name', user.second_name)
				formData.append('date_of_birth', user.date_of_birth)
				formData.append('phone_number', user.phone_number)
				formData.append('password', user.password)
				formData.append('password2', user.password2)
				if (user.image) {
					formData.append('image', user.image, user.image.name)
				}

				const response = await axios.post(
					'http://127.0.0.1:8000/api/user/register/',
					formData
				)
				console.log(response.data)
			} catch (error) {
				console.error(error)
				throw error
			}
		}
	}
	function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
		setUser({
			...user,
			image: event.target.files && event.target.files[0],
		})
		console.log(user)
	}
	return (
		<div className={styles.userRegistration}>
			<Header />
			<div className={styles.userRegistration__container}>
				<h2>РЕГИСТРАЦИЯ ПОЛЬЗОВАТЕЛЯ</h2>
				<form className={styles.userRegistration__form}>
					<div className={styles.userRegistration__ava}>
						<div
							className={
								user.image
									? 'w-[136px] h-[130px] rounded-[27px]  flex justify-center items-center text-primary'
									: 'w-[136px] h-[130px] rounded-[27px] bg-gray-600 flex justify-center items-center text-primary'
							}
						>
							{user.image ? (
								<img
									width={'90px'}
									style={{ borderRadius: '10px' }}
									src={URL.createObjectURL(user.image)}
								/>
							) : (
								'img'
							)}
						</div>
						<input type="file" name="image" onChange={handleImageChange} />
					</div>
					<div>
						<p>Почта</p>
						<div className="flex bg-white rounded-[10px]  font-bold items-center px-[12px] py-[10px]">
							<Input
								type="email"
								name="email"
								onChange={(e) => handlerchange(e)}
								placeholder="Эл почта"
							/>
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div className="flex gap-5">
						<div>
							<p>Имя</p>
							<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
								<Input
									type="text"
									name="name"
									onChange={(e) => handlerchange(e)}
									placeholder="Имя"
								/>
								<BsCheck color="#F5C521" size={'18px'} />
							</div>
						</div>
						<div>
							<p>Фамилия</p>
							<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
								<Input
									type="text"
									name="second_name"
									onChange={(e) => handlerchange(e)}
									placeholder="Фамилия"
								/>
								<BsCheck color="#F5C521" size={'18px'} />
							</div>
						</div>
					</div>
					<div>
						<p>Номер телефона</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input
								type="text"
								name="phone_number"
								onChange={(e) => handlerchange(e)}
								placeholder="Номер телефона"
							/>
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Дата рождения</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input
								type="date"
								name="date_of_birth"
								onChange={(e) => handlerchange(e)}
								placeholder="Дата рождения"
							/>
							<BsCheck color="#F5C521" size={'18px'} />
						</div>
					</div>
					<div>
						<p>Пароль</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px]">
							<Input
								type={check.password ? 'text' : 'password'}
								name="password"
								onChange={(e) => handlerchange(e)}
								placeholder="Пароль"
							/>
							<div
								className="cursor-pointer"
								onClick={() =>
									setCheck({ ...check, password: !check.password })
								}
							>
								{check.password ? (
									<AiFillEye color="grey" />
								) : (
									<AiFillEyeInvisible color="grey" />
								)}
							</div>
						</div>
					</div>
					<div>
						<p>Повторите пароль</p>
						<div className="flex bg-white rounded-[10px] items-center px-[12px] py-[10px] relative">
							<Input
								type={check.password2 ? 'text' : 'password'}
								name="password2"
								onChange={(e) => handlerchange(e)}
								placeholder="Пароль"
							/>
							<div
								className="cursor-pointer"
								onClick={() =>
									setCheck({ ...check, password2: !check.password2 })
								}
							>
								{check.password2 ? (
									<AiFillEye color="grey" />
								) : (
									<AiFillEyeInvisible color="grey" />
								)}
							</div>
						</div>
						<div
							className={
								user.password !== user.password2 ? 'text-[red]' : 'hidden'
							}
						>
							<span>Пароли не совпадают </span>
						</div>
					</div>
				</form>

				<div className={styles.userRegistration__reCaptcha}>
					<ReCAPTCHA
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						// sitekey="6LesLp0iAAAAAPuelDmzzB86woFbVyZsmfgoNoA-"
						onChange={onChange}
					/>
				</div>
				<div className={styles.userRegistration__btn}>
					<Btn
						style={
							(check.recaptcha &&
								user.email !== '' &&
								user.name !== '' &&
								user.second_name !== '' &&
								user.date_of_birth !== '' &&
								user.phone_number !== '' &&
								user.second_name !== '' &&
								user.password !== '' &&
								user.password2 !== '' &&
								user.image !== null) ??
							user.password === user.password2
								? { opacity: '1' }
								: { opacity: '0.3', cursor: 'default' }
						}
						onClick={regis}
					>
						РЕГИСТРАЦИЯ
					</Btn>
					<p>у меня есть аккаунт</p>
				</div>
			</div>
			<div className={styles.footer}>
				<Footer />
			</div>
		</div>
	)
}

export default UserRegistration
