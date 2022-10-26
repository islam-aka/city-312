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
			link: '/discounts',
		},
		{
			title: 'Партнерам',
			link: '/partner',
		},
		{
			title: 'Контакты',
			link: '/contacts',
		},
	],
}
