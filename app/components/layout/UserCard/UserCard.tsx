import Btn from '@/components/ui/Btn/Btn'
import React, { FC } from 'react'
import { IUserProfile } from '../UserCard/userCard.interface'
import styles from './UserCard.module.scss'

const UserCards: FC<IUserProfile> = (user) => {
	console.log(user)

	return (
		<div className={styles.userCard}>
			<div className={styles.userCard__info}>
				<div className={styles.userCard__bg}></div>
				<div className="mt-1 text-center sm:text-start">
					<div className="flex sm:justify-start justify-center lg:gap-[30px] gap-[15px] mb-6  mt-8 ">
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
						<div>
							<p className="text-[#545454] text-[14px] leading-[130%]">
								Генирация URl
							</p>
							<p className={styles.bg}>{user.generationURL}</p>
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
							<p className=" lg:text-[16px] lg:leading-[19px] text-[14px] leading-[16px] font-semibold">
								Жамшитов Жаныш
							</p>
						</div>
					</div>
					<div className="flex md:flex-row flex-col lg:gap-[30px] gap-[15px] mt-6 ">
						<div className="flex lg:gap-[30px] gap-[15px]">
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
						<div className="md:block inline-block mt-5 text-center lg:text-start">
							<Btn>Продлить</Btn>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserCards
