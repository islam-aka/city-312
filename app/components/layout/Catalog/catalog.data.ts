import { IActivityType } from './catalog.interface'
import { IСategory } from './catalog.interface'
import { ISubСategory } from './catalog.interface'

export const activityTypeData: IActivityType = {
	activityType: [
		{
			id: 1,
			name: 'Вещи электроника и прочее',
		},
		{
			id: 2,
			name: 'Услуги исполнителей',
		},
		{
			id: 3,
			name: 'Недвижимость',
		},
		{
			id: 4,
			name: 'Животные',
		},
		{
			id: 5,
			name: 'Легковые автомобили',
		},
		{
			id: 6,
			name: 'Спецтехника и мотоциклы',
		},
		{
			id: 7,
			name: 'Запчасти и автотовары',
		},
		{
			id: 8,
			name: 'Вакансии',
		},
		{
			id: 9,
			name: 'Для бизнеса',
		},
	],
}

export const categoryData: IСategory = {
	category: [
		{
			id: 1,
			activity_type: 1,
			name: 'Женский гардероб',
		},
		{
			id: 2,
			activity_type: 1,
			name: 'Мужской гардероб',
		},
		{
			id: 3,
			activity_type: 1,
			name: 'Детский гардероб',
		},
		{
			id: 4,
			activity_type: 4,
			name: 'Кошкиа',
		},
		{
			id: 5,
			activity_type: 4,
			name: 'Собаки',
		},
	],
}

export const subСategoryData: ISubСategory = {
	subCategory: [
		{ id: 1, category_type: 1, name: 'Аксессуары' },
		{ id: 2, category_type: 1, name: 'Верхняя одежда' },
		{ id: 3, category_type: 1, name: 'Головные уборы' },
		{ id: 4, category_type: 1, name: 'Домашняя одежда' },
	],
}
