import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import Btn from '@/components/ui/Btn/Btn'

import user from '@/assets/images/userAvatar.png'
import card from '@/assets/svg/card.svg'
import favourites from '@/assets/svg/favourites.svg'
import message from '@/assets/svg/message.svg'
import notifications from '@/assets/svg/notifications.svg'
import usageHistory from '@/assets/svg/usageHistory.svg'

import styles from './UserProfile.module.scss'

const UserProfile: FC = () => {
	return (
		<div className={styles.userProfile}>
			<h2>мой профиль</h2>
			<div className="flex">
				<Image
					width={45}
					height={45}
					src={user}
					alt="City-312"
					draggable={false}
				/>
				<div>
					<p>name</p>
					<p>пользователь</p>
				</div>
			</div>
			<div className="mt-[15px] mb-6 flex gap-2">
				<Btn
					style={{
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
				<div className="cursor-pointer  bg-darkBlue-900">
					<Link href="/">
						<a>
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
				</div>
				<div>
					<Image
						width={18}
						height={18}
						src={favourites}
						alt="City-312"
						draggable={false}
					/>
					<span>Избранное</span>
				</div>
				<div>
					<Image
						width={18}
						height={18}
						src={notifications}
						alt="City-312"
						draggable={false}
					/>
					<span>Уведомления</span>
				</div>
				<div>
					<Image
						width={18}
						height={18}
						src={message}
						alt="City-312"
						draggable={false}
					/>
					<span>Сообщения</span>
				</div>
				<div>
					<Image
						width={18}
						height={18}
						src={usageHistory}
						alt="City-312"
						draggable={false}
					/>
					<span>История пользования</span>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
