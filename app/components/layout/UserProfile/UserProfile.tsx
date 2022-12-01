import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Btn from '@/components/ui/Btn/Btn'
import { userProfile } from '@/components/layout/UserCard/userCard.data'

import user from '@/assets/images/userAvatar.png'
import card from '@/assets/svg/card.svg'
import favourites from '@/assets/svg/favourites.svg'
import message from '@/assets/svg/message.svg'
import notifications from '@/assets/svg/notifications.svg'
import usageHistory from '@/assets/svg/usageHistory.svg'
import advertising from '@/assets/images/Advertising.png'

import styles from './userProfile.module.scss'

const UserProfile: FC = () => {
	const data = userProfile
	console.log(data)

	const router = useRouter()

	return (
		<>
			<div className={styles.userProfile}>
				<h2 className="font-semibold text-[18px] leading-[21px]">
					мой профиль
				</h2>
				<div className="flex mt-5">
					<Image
						width={45}
						height={45}
						src={user}
						alt="City-312"
						draggable={false}
					/>
					<div className="ml-[25px]">
						<p className="font-semibold text-[16px] leading-[19px]">
							{`${data.second_name} ${data.name[0]}`}.
						</p>
						<p className="text-[16px] leading-[19px]">пользователь</p>
					</div>
				</div>
				<div className="mt-[15px] mb-6 flex gap-2">
					<Btn
						style={{
							width: '124px',
							padding: '7px 5px',
							background: 'linear-gradient(0deg, #7EC9F5 0%, #3957ED 97.5%)',
							borderRadius: '4.46108px',
							color: 'white',
						}}
					>
						{data.phone_number}
					</Btn>
					<Btn
						style={{
							width: '124px',
							padding: '7px 5px',
							background: 'linear-gradient(0deg, #7EC9F5 0%, #3957ED 97.5%)',
							borderRadius: '4.46108px',
							color: 'white',
						}}
					>
						Редактировать
					</Btn>
				</div>
				<div className={styles.userProfile__btn}>
					<Link href="/userCard">
						<a
							className={
								router.pathname === '/userCard' ? styles.active : styles.none
							}
						>
							<div className="flex gap-[25px]">
								<Image
									width={18}
									height={18}
									src={card}
									alt="City-312"
									draggable={false}
								/>
								<span>Моя карта</span>
							</div>
						</a>
					</Link>

					<Link href="/productPage">
						<a
							className={
								router.pathname === '/productPage' ? styles.active : styles.none
							}
						>
							<div className="flex gap-[25px]">
								<Image
									width={18}
									height={18}
									src={favourites}
									alt="City-312"
									draggable={false}
								/>
								<span>Избранное</span>
							</div>
						</a>
					</Link>

					<Link href="/notifications">
						<a
							className={
								router.pathname === '/notifications'
									? styles.active
									: styles.none
							}
						>
							<div className="flex items-center gap-[25px] relative">
								<Image
									width={18}
									height={18}
									src={notifications}
									alt="City-312"
									draggable={false}
								/>
								<span>Уведомления</span>
								<div className="w-[6.25px] h-[6.25px] rounded-[50%] bg-[#FF5E61] absolute top-[2px] left-3"></div>
							</div>

							<span className={styles.info}>4</span>
						</a>
					</Link>
					<Link href="/message">
						<a
							className={
								router.pathname === '/message' ? styles.active : styles.none
							}
						>
							<div className="flex gap-[25px]">
								<Image
									width={18}
									height={18}
									src={message}
									alt="City-312"
									draggable={false}
								/>
								<span>Сообщения</span>
							</div>
							<span className={styles.info}>3</span>
						</a>
					</Link>
					<Link href="/usageHistory">
						<a
							className={
								router.pathname === '/usageHistory'
									? styles.active
									: styles.none
							}
						>
							<div className="flex gap-[25px]">
								<Image
									width={18}
									height={18}
									src={usageHistory}
									alt="City-312"
									draggable={false}
								/>
								<span>История пользования</span>
							</div>
						</a>
					</Link>
				</div>
			</div>
			<div className="mt-5 hidden lg:block">
				<Image
					width={299}
					height={299}
					src={advertising}
					alt="Advertising"
				></Image>
			</div>
		</>
	)
}

export default UserProfile
