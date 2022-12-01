import { IPartnerProfile } from '../PartnerProfile/partnerProfile.interface'

export interface IUserFollowing {
	following: IPartnerProfile[]
}

export interface IUserProfile {
	id: number
	email: string
	isPartner: boolean
	is_admin: boolean
	name: string
	second_name: string
	date_of_birth: string
	phone_number: string
	discount_card_number: string
	contract_offer: string
	following: IUserFollowing[]
}

export interface IUser {
	data: IUserProfile
}
