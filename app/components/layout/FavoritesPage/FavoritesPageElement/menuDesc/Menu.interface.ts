export interface IMenuItem {
    title: string
    description: string
}

export interface IMenu {
    items: IMenuItem[]
}

export const menuData: IMenu = {
    items: [
        {
            title: 'Условия',
            description: ''
        }
    ]
}