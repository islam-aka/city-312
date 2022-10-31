export interface IPartnerItem {
	id: number
	image: string
	logo: string
	name: string
	description: string
}

export interface IPartner {
	items: IPartnerItem[]
}
