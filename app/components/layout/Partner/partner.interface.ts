export interface IMenuItem {
	id: number
	image: string
	logo: string
	name: string
	description: string
}

export interface IMenu {
	items: IMenuItem[]
}
