import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	items: [
		{
			title: 'О проекте',
			link: '/project',
		},
		{
			title: 'Афиши/Акции',
			link: '/stocks',
		},
		{
			title: 'Скидки',
			link: '/discount',
		},
		{
			title: 'Партнерам',
			link: '/partnerCard',
		},
		{
			title: 'Контакты',
			link: '/contacts',
		},
	],
}
