import React from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Header from '@/components/layout/Header/Header'
import UserProfile from '@/components/layout/UserProfile/UserProfile'
import Btn from '@/components/ui/Btn/Btn'

import styles from './userCard.module.scss'

const UserCard = () => {
	return (
		<>
			<Header />
			<div className={styles.userCard}>
				<div className="flex flex-col">
					<div>
						<UserProfile />
					</div>
					<div></div>
				</div>
				<div className={styles.userCard__info}>
					<div className={styles.userCard__bg}></div>
					<div>
						<div className="flex lg:gap-[30px] gap-[15px] mb-6  mt-8 ">
							<div>
								<p className="text-[#545454] text-[14px] leading-[130%]">
									Мои баллы
								</p>
								<p className={styles.bg}>100500 б.</p>
							</div>
							<div>
								<p className="text-[#545454] text-[14px] leading-[130%]">
									Сэкономлено
								</p>
								<p className={styles.bg}>15000 сом</p>
							</div>
						</div>
						<div className="flex lg:gap-[30px] gap-[15px]">
							<div className="lg:w-[178px] w-[135px]">
								<p className="text-[#545454] text-[14px] leading-[130%] mb-[5px]">
									№ карты
								</p>
								<p className="lg:py-[12px] lg:px-[14px] py-[10px] px-[5px] rounded-[4px] border-black-900 border border-solid font-semibold lg:text-[16px] text-[14px] lg:leading-[19px] leading-4 ">
									0000 0312 000 001
								</p>
							</div>
							<div className="">
								<p className="text-[#545454] text-[14px] md:mb-[21px] mb-[8px] leading-[130%] lg:w-[178px] w-[154px]">
									Обладатель
								</p>
								<p className="md:w-[200px] w-[135px]  lg:text-[16px] lg:leading-[19px] text-[14px] leading-[16px] font-semibold">
									Жамшитов Жаныш Мухаметрасулович
								</p>
							</div>
						</div>
						<div className="flex lg:gap-[30px] gap-[15px] mt-6 ">
							<div className="lg:w-[178px] ">
								<p className=" text-[#545454] text-[14px] leading-[130%] mb-1">
									Куплено
								</p>
								<p className="font-semibold lg:text-[16px] text-[14px] lg:leading-[19px] leading-[16px] lg:w-[178px] w-[135px]">
									01.05.2022
								</p>
							</div>
							<div>
								<p className="text-[#545454] text-[14px] leading-[130%] mb-1">
									Действителен до
								</p>
								<p className="font-semibold lg:text-[16px] text-[14px] lg:leading-[19px] leading-[16px]">
									01.05.2023
								</p>
							</div>
						</div>
						<div className="md:block inline-block mt-5   ">
							<Btn>Продлить</Btn>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	)
}

export default UserCard
