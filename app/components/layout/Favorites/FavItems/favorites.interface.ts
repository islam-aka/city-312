import { IPartnerPage } from '../../PartnerPages/partnerPages.interface'

export interface IFavoritesItem {
	id: string
	partner: IPartnerPage
	image: string
	logo: string
	title: string
	name: string
	description: string
	date: string
	price: number
	count: number
	discount: string
}

export interface IFavorites {
	items: IFavoritesItem[]
}
