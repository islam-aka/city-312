import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import Btn from '@/components/ui/Btn/Btn'

import ArmImg from '@/assets/images/arm.png'
import CardImg from '@/assets/images/card.png'
import DesignImg from '@/assets/images/design.png'
import PriceImg from '@/assets/images/price.png'
import UpdateImg from '@/assets/images/update.png'

import styles from './HowItWorks.module.scss'

const HowItWorks: FC = () => {
	return (
		<div className={styles.howItWork}>
			<div className={styles.howItWorkWrapper}>
				<div className={styles.howItWorkTopSection}>
					<div className={styles.howItWorkTopSectionItem}>
						<Image src={CardImg} width={45} height={30} />
						<div className={styles.howItWorkTopSectionItemDescription}>
							<h4>Одна карта</h4>
							<span>Для всех скидок</span>
						</div>
					</div>
					{/*  */}
					<div className={styles.howItWorkTopSectionItem}>
						<Image src={PriceImg} width={45} height={30} />
						<div className={styles.howItWorkTopSectionItemDescription}>
							<h4>Доступная</h4>
							<span>Стоимость карты</span>
						</div>
					</div>
					{/*  */}
					<div className={styles.howItWorkTopSectionItem}>
						<Image src={DesignImg} width={45} height={30} />
						<div className={styles.howItWorkTopSectionItemDescription}>
							<h4>Эстетичный</h4>
							<span>Дизайн</span>
						</div>
					</div>
					{/*  */}
					<div className={styles.howItWorkTopSectionItem}>
						<Image src={UpdateImg} width={35} height={35} />
						<div className={styles.howItWorkTopSectionItemDescription}>
							<h4>Ежедневные</h4>
							<span>Обновления предложений</span>
						</div>
					</div>
				</div>
				<div className={styles.howItWorkBottomSection}>
					<div className={styles.howItWorkBottomSectionDescription}>
						<h4>Как это работает ?</h4>
						<span>
							Продавцы (партнеры системы), создают выгодную дисконтную политику
							для клиентов клиенты, в свою очередь, получают возможность тратить
							меньше при покупке товаров или приобретать больше при тех же
							затратах, повышая покупательский спрос на услуги и товары
							продавца...
						</span>
						<Btn>
							<Link href="/">
								<a>оформить карту</a>
							</Link>
						</Btn>
					</div>
					<div className={styles.howItWorkBottomSectionImg}>
						<Image src={ArmImg} width={255} height={280} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default HowItWorks
