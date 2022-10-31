export interface IFavoritesItem {
    id: string
    image: string
    logo: string 
    title: string
    description: string
    date: string
    count: number
}

export interface IFavorites {
	items: IFavoritesItem[]
}