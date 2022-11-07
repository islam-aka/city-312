import { IPartnerPage } from "../../PartnerPages/partnerPages.interface"

export interface IFavoritesItem {
    id: string
    image: string
    logo: string 
    title: string
    name: string
    description: string
    date: string
    price: number
    count: number
    discount: string
    partner: IPartnerPage
}

export interface IFavorites {
	items: IFavoritesItem[]
}