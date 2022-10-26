import React, { FC } from 'react'

import Footer from '@/components/layout/Footer/Footer'
import Btn from '@/components/ui/Btn/Btn'

import styles from './project.module.scss'

const project: FC = () => {
	return (
		<div className={styles.project}>
			<div className={styles.project__wrapper}>
				<div className={styles.project__container}>
					<div className={styles.project__block}>
						<h2>О проекте</h2>
						<p>
							Суть нашего проекта ЕДК- "CITY312" заключается во внедрении и
							распространении в г. Бишкек ( а в последствии и на территории
							Кыргызской Республики)
						</p>
						<p>
							ЕДК рассчитана для самых различных социальных слоев населения,
							которая даёт право владельцам карты на получение скидок, льгот или
							привилегий у разнопрофильных предприятий торговли и обслуживания
							населения.
						</p>
						<p>
							С ЕДК- "CITY312" вы уменьшите свои расходы пользуясь нашей
							карточкой. Главное больше не надо носить с собой карты, нужна лишь
							одна ЕДК "CITY312"
						</p>
					</div>
					<div className={styles.project__btn}>
						<Btn>Заказать карту</Btn>
						<Btn>Где приобрести </Btn>
					</div>
				</div>
				<div className={styles.project__img}></div>
				<div className={styles.bg__block}>
					<div className={styles.bg__image}></div>
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default project
