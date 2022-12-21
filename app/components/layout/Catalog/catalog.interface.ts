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

export interface TMenu {
	activityTypes: IActivityType
	categorys: IСategory
	subCategorys: ISubСategory
}

export interface IState {
	activityTypes: string
	categorys: undefined | string
	subCategorys: undefined | string
	activityTypesId: number
	categorysId: number
	subCategory: number
}
export type IСategorys = {
	handlerchange: IState
	id: number
	activity_type: number
	name: string
	setHandlerchange: (newValue: IState) => void | IСategoryItem
}

export type ISubСategorys = {
	handlerchange: IState
	id: number
	name: string
	category_type: number
	setHandlerchange: (newValue: IState) => void | IСategoryItem
}
