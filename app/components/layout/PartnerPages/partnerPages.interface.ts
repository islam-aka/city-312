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

export interface IPartnerPage {
	id: number
	image: string
	logo: string
	name: string
	category: string
	description: string
	contacts: string
	rating: number
	feedback: IFeedback
}
