import React, { FC } from 'react'
import { AiFillStar } from 'react-icons/ai'

import Btn from '@/components/ui/Btn/Btn'

import { IPartnerPage } from './partnerPages.interface'

const PartnerPages: FC<{ data: IPartnerPage }> = ({ data }) => {
	let contact = JSON.parse(data.contacts)
	console.log(contact)

	return (
		<div className="font-['Gilroy']">
			<div
				style={{
					background: `url(${data.image})`,
					width: '100%',
					height: '304px',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
				}}
			></div>
			<div className="flex justify-between max-w-[1200px] w-full mx-auto mt-[20px]">
				<div className="w-[157px] h-[157px]  relative mr-[33px]">
					<div
						className="w-[157px] h-[157px] rounded-[50%] absolute top-[-50px]"
						style={{
							background: `url(${data.logo})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'cover !important',
						}}
					></div>
				</div>
				<div className="w-[611px] ">
					<div className="flex items-end">
						<div className="mt-1">
							<p className="font-semibold text-[34px] leading-[43px]">
								{data.name}
							</p>
							<p className="mr-[51px] font-medium text-[34px] leading-[43px]">
								{data.category}
							</p>
						</div>
						<div className="flex gap-3 text-[24px] font-medium leading-[28px]">
							<p>{data.rating}</p>
							<div className="flex gap-2">
								<AiFillStar color="#F8A303" />
								<AiFillStar color="#F8A303" />
								<AiFillStar color="#F8A303" />
								<AiFillStar color="#F8A303" />
								<AiFillStar color="#565656" />
							</div>
						</div>
					</div>

					<p className="text-[18px] leading-[21px] mt-[20px]">
						{data.description}
					</p>
				</div>
				<div className="p-[20px] w-[305px] ">
					<Btn
						style={{
							background: '#0077FF',
							fontSize: '15px',
							lineHeight: '18px',
							padding: '15px 0',
							width: '100%',
							color: '#FFFFFF',
						}}
					>
						Отправить сообщение
					</Btn>
					<p className="text-[18px] leading-[21px] font-semibold mt-[10px] text-center ">
						Контакты
					</p>
					<div className="grid grid-cols-2 gap-x-4 gap-y-1 mt-3 text-[16px] leading-[19px] font-medium ">
						<span>{contact.number1}</span>
						<span>{contact.number2}</span>
						<span>{contact.number3}</span>
						<span>{contact.number4}</span>
					</div>
				</div>
			</div>
			<div>stocks</div>
			<div>address\map</div>
			<div>comments</div>
			<div>like</div>
		</div>
	)
}

export default PartnerPages
