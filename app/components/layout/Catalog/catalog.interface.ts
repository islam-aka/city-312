export interface ISubСategoryItem {
	id: number
	name: string
	category_type: number
}
export interface IСategoryItem {
	id: number
	activity_type: number
	name: string
}
export interface IActivityTypeItem {
	id: number
	name: string
}

export interface ISubСategory {
	subCategory: ISubСategoryItem[]
}
export interface IСategory {
	category: IСategoryItem[]
}
export interface IActivityType {
	activityType: IActivityTypeItem[]
}

// export type TMenu = IActivityType | ISubСategory | IСategory

export interface TMenu {
	activityTypes: IActivityType
	categorys: IСategory
	subCategorys: ISubСategory
}
