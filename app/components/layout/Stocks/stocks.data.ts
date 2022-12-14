import {
	IStocks,
	ITypeOfBusinessActivity,
	ITypeOfDiscount,
} from './Stocks.interface'

export const typeOfDiscount: ITypeOfDiscount = {
	data: [
		{ id: 1, title: 'Процент ' },
		{ id: 2, title: 'Кэшбек ' },
		{ id: 3, title: 'Накопительный' },
		{ id: 4, title: 'Бонус(подарок посещение) ' },
		{ id: 5, title: 'Реферальная программа ' },
		{ id: 6, title: 'Ограниченная по времени  ' },
		{ id: 7, title: 'Ограниченная по количество скидок  ' },
	],
}

export const typeOfBusinessActivityData: ITypeOfBusinessActivity = {
	data: [
		{ id: 1, title: 'ОсОО' },
		{ id: 2, title: 'ЗАО' },
		{ id: 3, title: 'ИП' },
		{ id: 4, title: 'ЧП' },
		{ id: 5, title: 'ОАО' },
		{ id: 6, title: 'ООО' },
	],
}

export const stocksCard: IStocks = {
	data: [
		{
			id: 1,
			logo_partner:
				'https://papik.pro/uploads/posts/2021-11/1636195724_22-papik-pro-p-logotip-sushi-foto-23.jpg',
			name_partner: 'Аиша Констракшн',
			partner_category: 'Строительные материалы',
			name_stocks: 'Дарите эксклюзивные цветы  для своих любимых или',
			discount: 10,
			image_stocks: 'https://i.ibb.co/47LRCfp/Rectangle-2565.png',
			description_stocks:
				'Дарите эксклюзивные цветы  для своих любимых или для мероприятия, в нашем магазине цветов Вас ждут сочные... еще',
			date_publication: '02.10.2022',
			price_stocks: 599,
			sold: 671,
		},
		{
			id: 2,
			logo_partner: 'https://i.ibb.co/5rRjTfh/florissimo-Logo.png',
			partner_category: 'asd',
			name_partner: 'Florissimo',
			name_stocks: 'Строительные материалы',
			discount: 10,
			image_stocks: 'https://i.ibb.co/hVL3pBC/florissimo.png',

			description_stocks:
				'Утром у вас есть время до обеда, чтобы осмотреть старый город Ош. Посещение холма Соломона, пещерного музея, паломники Сулеймана проходили через этот',
			date_publication: '02.10.2022',
			price_stocks: 599,
			sold: 671,
		},
		{
			id: 3,
			logo_partner: 'https://i.ibb.co/5rRjTfh/florissimo-Logo.png',
			partner_category: 'asd',
			name_partner: 'Florissimo',
			name_stocks: 'Строительные материалы',
			discount: 10,
			image_stocks: 'https://i.ibb.co/hVL3pBC/florissimo.png',

			description_stocks:
				'Утром у вас есть время до обеда, чтобы осмотреть старый город Ош. Посещение холма Соломона, пещерного музея, паломники Сулеймана проходили через этот',
			date_publication: '02.10.2022',
			price_stocks: 599,
			sold: 671,
		},
		{
			id: 4,
			logo_partner: 'https://i.ibb.co/5rRjTfh/florissimo-Logo.png',
			partner_category: 'asd',
			name_partner: 'Florissimo',
			name_stocks: 'Строительные материалы',
			discount: 10,
			image_stocks: 'https://i.ibb.co/hVL3pBC/florissimo.png',

			description_stocks:
				'Утром у вас есть время до обеда, чтобы осмотреть старый город Ош. Посещение холма Соломона, пещерного музея, паломники Сулеймана проходили через этот',
			date_publication: '02.10.2022',
			price_stocks: 599,
			sold: 671,
		},
		{
			id: 5,
			logo_partner:
				'https://papik.pro/uploads/posts/2021-11/1636195724_22-papik-pro-p-logotip-sushi-foto-23.jpg',
			name_partner: 'Аиша Констракшн',
			partner_category: 'Строительные материалы',
			name_stocks: 'Всё меню кухни в сети ресторанов «Шикари»',
			discount: 10,
			image_stocks: 'https://i.ibb.co/47LRCfp/Rectangle-2565.png',
			description_stocks:
				'Дарите эксклюзивные цветы  для своих любимых или для мероприятия, в нашем магазине цветов Вас ждут сочные... еще',
			date_publication: '02.10.2022',
			price_stocks: 599,
			sold: 671,
		},
		{
			id: 6,
			logo_partner:
				'https://papik.pro/uploads/posts/2021-11/1636195724_22-papik-pro-p-logotip-sushi-foto-23.jpg',
			name_partner: 'Аиша Констракшн',
			partner_category: 'Строительные материалы',
			name_stocks: 'Всё меню кухни в сети ресторанов «Шикари»',
			discount: 10,
			image_stocks: 'https://i.ibb.co/47LRCfp/Rectangle-2565.png',
			description_stocks:
				'Дарите эксклюзивные цветы  для своих любимых или для мероприятия, в нашем магазине цветов Вас ждут сочные... еще',
			date_publication: '02.10.2022',
			price_stocks: 599,
			sold: 671,
		},
	],
}
