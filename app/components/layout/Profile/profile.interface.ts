export interface IProfile {
	id: number
	email: string
	isPartner: boolean
	is_admin: boolean
	brand_name?: string
	organization_form?: string
	phone_number?: string
	description?: string
	inn?: string
	isVip?: boolean
	transaction_quantity?: null | number
	contract_offer: string
	logo?: string
	banner?: string
	activity_type?: number
	img?: string
	name?: string
	second_name?: string
	date_of_birth?: string
	discount_card_number?: string
	following?: IPartnerProfile[]
}

export interface IPartnerProfile {
	id: number
	email: string
	isPartner: boolean
	is_admin: boolean
	brand_name: string
	organization_form: string
	phone_number: string
	description: string
	inn: string
	isVip: boolean
	transaction_quantity: null | number
	logo: string
	banner: string
	activity_type: number
}
