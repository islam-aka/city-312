import { IPartnerPage } from './partnerPages.interface'

export const partnerPage: IPartnerPage = {
	id: 1,
	image: 'https://i.ibb.co/18wLmJY/Rectangle-2559.png',
	logo: 'https://i.ibb.co/br5S3nN/florissimo-Logo.png',
	name: 'Florissimo',
	category: 'Цветочный магазин',
	description:
		'Букет цветов — традиционный подарок, которому будет рад каждый человек. Этот классический ароматный сюрприз по достоинству оценят люди разных профессий, полов и возрастов. Эффектные композиции из цветов или традиционные букеты также часто дарят мужчины дамам, чтобы оказать знак внимания.',
	contacts:
		'{"number4":"+996 555 555 554","number1":"+996 555 555 551","number2":"+996 555 555 552","number3":"+996 555 555 553"}',
	rating: 4.65,
	feedback: {
		feedbackItem: [
			{
				id: 1,
				image: 'https://i.ibb.co/nCGjvfk/Ellipse-3021.png',
				name: 'Ирина',
				second_name: 'Мирная',
				description:
					'крутой ролик  мне понравилось надеюсь следующий выйдет скоро',
			},
		],
	},
}
