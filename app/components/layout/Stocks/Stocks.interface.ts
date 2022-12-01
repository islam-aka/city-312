export interface IStocksItem {
	id: number
	logo_partner: string
	name_partner: string
	partner_category: string
	image_stocks: string
	name_stocks: string
	discount: number
	sold: number
	description_stocks: string
	price_stocks: number
	date_publication: string
}

export interface IStocks {
	data: IStocksItem[]
}
