import { IMenuFooter } from './footer.interface'

export const firstMenuFooter: IMenuFooter = {
	items: [
		{
			title: 'О Компании',
			link: '/project',
		},
		{
			title: 'Акции',
			link: '/stocks',
		},
		{
			title: 'Скидки',
			link: '/discounts',
		},
		{
			title: 'Партнеры',
			link: '/partner',
		},
		{
			title: 'Контакты',
			link: '/contacts',
		},
	],
}
export const secondMenuFooter: IMenuFooter = {
	items: [
		{
			title: 'Сотрудничество',
			link: '/project',
		},
		{
			title: 'Тех.поддержка',
			link: '/stocks',
		},
		{
			title: 'Вопрос и ответ',
			link: '/discounts',
		},
		{
			title: 'Условия пользования',
			link: '/partner',
		},
	],
}
