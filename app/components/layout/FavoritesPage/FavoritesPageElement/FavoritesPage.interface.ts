export interface IFeedbackItem {
	id: number
	imageFB: string
	name: string
	second_name: string
	description: string
}

export interface IFeedback {
	feedbackItem: IFeedbackItem[]
}

export interface IlocationItem {
	lat: number
	lng: number
}

export interface IFavoritesPage {
	id: number
	images: string
	logo: string
	name: string
	category: string
	price: number
	discountEnd: string
	descript:  string
	contacts: string
	rating: number
	location: IlocationItem
    address: string
	feedback: IFeedback
}
