export interface IDropDownDayItem {
	day: string
}

export interface IDropDownDayMenu {
	items: IDropDownDayItem[]
}

export interface IDropDown {
	state: string
	setState: Function
	arr: IDropDownDayMenu
}
