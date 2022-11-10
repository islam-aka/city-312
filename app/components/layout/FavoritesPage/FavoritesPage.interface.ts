export interface IFeedbackItem {
	id: number
	image: string
	name: string
	second_name: string
	description: string
}

export interface IFeedback {
	feedbackItem: IFeedbackItem[]
}

export interface IFavoritesPage {
	id: number
	image: string
	logo: string
	name: string
	category: string
	price: number
	description: {
		condition: string
		paragraf: string[]
	}
	contacts: string
	rating: number
    address: string
	feedback: IFeedback
}
