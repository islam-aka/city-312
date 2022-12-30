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

export interface ITypeOfDiscount {
	data: ITypeOfDiscountItem[]
}
export interface ITypeOfDiscountItem {
	id: number
	title: string
}

export interface ITypeOfBusinessActivity {
	data: ITypeOfBusinessActivityItem[]
}
export interface ITypeOfBusinessActivityItem {
	id: number
	title: string
}

export interface IStocksState {
	name_company: string
	type_of_business_activity: string
	nameStocks: string
	price_before_discount: string
	price_after_discount: string
	shortDes: string
	the_cover_of_the_promotion: File
	desStocks: string
	terms_of_the_promotion: string
	number_of_percent: string
	number_of_cashback: string
	percentage_of_accumulation: string
	how_much_time_is_left: string
	discounts_left: number
	the_beginning_of_the_promotion: string
	end_of_the_promotion: string
	address: string
	contacts: string
	social_link: string
	sub_categorys_id: number
	categorys: number
	activity_types: number
}
