import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

import Btn from '@/components/ui/Btn/Btn'

import user from '@/assets/images/userAvatar.png'
import card from '@/assets/svg/card.svg'
import favourites from '@/assets/svg/favourites.svg'
import message from '@/assets/svg/message.svg'
import notifications from '@/assets/svg/notifications.svg'
import usageHistory from '@/assets/svg/usageHistory.svg'

import styles from './UsersProfile.module.scss'

const UserProfile: FC = () => {
	const router = useRouter()

	return (
		<div className={styles.userProfile}>
			<h2 className="font-semibold text-[18px] leading-[21px]">мой профиль</h2>
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
						Жамшитов Ж.
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
					+996 555 55 55 55
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
					<a className={styles.active}>
						<Image
							width={18}
							height={18}
							src={card}
							alt="City-312"
							draggable={false}
						/>
						<span>Моя карта</span>
					</a>
				</Link>

				<Link href="/favourites">
					<a
						className={
							router.pathname === '/favourites' ? styles.active : styles.none
						}
					>
						<Image
							width={18}
							height={18}
							src={favourites}
							alt="City-312"
							draggable={false}
						/>
						<span>Избранное</span>
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
