export interface IAdvertisementItem {
	id: number
	image: string
	id_stock: number
}

export interface IAdvertisement {
	items: IAdvertisementItem[]
}
