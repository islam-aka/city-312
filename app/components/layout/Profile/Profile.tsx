import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Btn from '@/components/ui/Btn/Btn'

import userCircle from '@/assets/images/userCircle.png'
import card from '@/assets/svg/card.svg'
import favourites from '@/assets/svg/favourites.svg'
import plusImg from '@/assets/svg/plus.svg'
import message from '@/assets/svg/message.svg'
import notifications from '@/assets/svg/notifications.svg'
import usageHistory from '@/assets/svg/usageHistory.svg'

import styles from './Profile.module.scss'
import { IProfile } from './profile.interface'

const UserProfile: FC<IProfile> = (user) => {
	const router = useRouter()
	console.log(user)

	return (
		<div className={styles.userProfile}>
			<button className="font-semibold text-[18px] leading-[21px]">
				мой профиль
			</button>
			<div className="flex items-center mt-5">
				<div className="relative">
					<Image
						width={60}
						height={60}
						src={userCircle}
						alt="City-312"
						draggable={false}
					/>
					<div
						style={{
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover !important',

							position: 'absolute',
							background: `url(${
								user.img !== undefined ? user.img : user.logo
							}) `,
							top: '8px',
							left: '7px',
							borderRadius: '50%',
							width: '45px',
							height: '45px',
						}}
					></div>
				</div>
				<div className="ml-[25px]">
					<p className="font-semibold text-[16px] leading-[19px] max-w-[180px]">
						{!user.isPartner
							? `${user.name} ${user.second_name}`
							: user.brand_name}
					</p>
					<p className="text-[16px] leading-[19px]">
						{!user.isPartner ? 'пользователь' : 'партнер'}
					</p>
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
					{user.phone_number}
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
						<Image
							width={18}
							height={18}
							src={card}
							alt="City-312"
							draggable={false}
						/>
						<span>{!user.isPartner ? 'Моя карта' : 'Мои скидки'}</span>
					</a>
				</Link>

				<Link href="/favorites">
					<a
						className={
							router.pathname === '/favorites' ? styles.active : styles.none
						}
					>
						{!user.isPartner ? (
							<Image
								width={18}
								height={18}
								src={favourites}
								alt="City-312"
								draggable={false}
							/>
						) : (
							<Image
								width={25}
								height={25}
								src={plusImg}
								alt="City-312"
								draggable={false}
							/>
						)}

						<span>{!user.isPartner ? 'Избранное' : 'Создать акцию '}</span>
					</a>
				</Link>

				<Link href="/notifications">
					<a
						className={
							router.pathname === '/notifications' ? styles.active : styles.none
						}
					>
						<Image
							width={18}
							height={18}
							src={notifications}
							alt="City-312"
							draggable={false}
						/>
						<span>Уведомления</span>
						<span className={styles.info}>4</span>
					</a>
				</Link>
				<Link href="/message">
					<a
						className={
							router.pathname === '/message' ? styles.active : styles.none
						}
					>
						<Image
							width={18}
							height={18}
							src={message}
							alt="City-312"
							draggable={false}
						/>
						<span>Сообщения</span>
						<span className={styles.info}>3</span>
					</a>
				</Link>
				<Link href="/usageHistory">
					<a
						className={
							router.pathname === '/usageHistory' ? styles.active : styles.none
						}
					>
						<Image
							width={18}
							height={18}
							src={usageHistory}
							alt="City-312"
							draggable={false}
						/>
						<span>История пользования</span>
					</a>
				</Link>
			</div>
		</div>
	)
}

export default UserProfile
