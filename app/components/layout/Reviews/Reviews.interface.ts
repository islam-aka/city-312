export interface IReviews  {
    id: number
    img: string
    name: string
    cardOwner: string
    description: string
}

export interface IReviewsItem {
    data: IReviews[]
}