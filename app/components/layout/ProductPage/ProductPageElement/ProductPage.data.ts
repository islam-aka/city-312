import { IProductPage } from "./ProductPage.interface";

export const favoritesPage: IProductPage = {
    id: 1,
	images: 'https://i.ibb.co/1ztsJR1/Rectangle-2565.png',
	logo: '',
	name: 'Florissimo',
	category: 'Цветочный магазин',
	price: 950,
	discountEnd: '',
	descript:  '— доставка осуществляется с 08:00 до 21:00 ежедневно.— время приготовления и доставки составляет от 1,5 до 3 часов — возможен самовывоз по адресу: г. Москва, пр-т Мира, д. 116. — перед заказом необходимо сообщить номер купона менеджеру пекарни по телефону +7 (916) 420-30-57.',
	contacts: '',
	rating: 5,
	location: {
		lat: 42.8749873,
		lng: 74.60200979999999,
	},
    address: 'Московская ., г. Бишкек , мкр-н Салтыковка',
	feedback: {
        feedbackItem : [
            {
				id: 1,
				imageFB: 'https://i.ibb.co/nCGjvfk/Ellipse-3021.png',
				name: 'Ирина',
				second_name: 'Мирная',
				description: 'Как всегда на высоте ит',
			},
			{
				id: 2,
				imageFB: 'https://i.ibb.co/nCGjvfk/Ellipse-3021.png',
				name: 'Ирина',
				second_name: 'Мирная',
				description: 'Как всегда на высоте ит',
			},
        ],
    },
}