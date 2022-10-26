import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import envelope from '@/assets/svg/footer envelope.svg'
import facebook from '@/assets/svg/icon facebook .svg'
import instagram from '@/assets/svg/icon instagram.svg'
import whatsapp from '@/assets/svg/icon whatsapp.svg'

import Logo from '../Header/Logo'

import styles from './Footer.module.scss'
import FooterContainer from './FooterContainer'
import { firstMenuFooter, secondMenuFooter } from './footer.data'

const Footer: FC = () => {
	return (
		<div className={styles.footer__wrapper}>
			<div className={styles.footer}>
				<div className={styles.footer__logo}>
					<Logo text="дисконтная карта для скидок" />
				</div>
				<div className={styles.footer__info}>
					<FooterContainer menu={firstMenuFooter} />
					<div className={styles.footer__block}>
						<div className={styles.footer__contacts}>
							<p>контакты</p>
							<span>+ 996 (505) 031222</span>
							<span>+ 996 (505) 031222</span>
						</div>
						<div className={styles.footer__adress}>
							<p>адрес</p>
							<span>ул.Киевская 77</span>
						</div>
					</div>
					<FooterContainer menu={secondMenuFooter} />
				</div>
				<div className={styles.footer__auth}>
					<div>
						<Link href={'/auth'}>
							<p>вход</p>
						</Link>
						<Link href={'/auth'}>
							<p>регистрация</p>
						</Link>
					</div>
					<div>
						<p>Pay partner</p>

						<div>
							<div>
								<Image src={envelope} alt="City-312" draggable={false} />
							</div>

							<div>
								<Image src={envelope} alt="City-312" draggable={false} />
							</div>
						</div>
					</div>
				</div>
				<div className={styles.footer__social}>
					<Link href={'https://www.instagram.com/'}>
						<a target={'_blank'}>
							<Image
								src={instagram}
								width={50.75}
								height={50.75}
								alt="City-312"
								draggable={false}
							/>
						</a>
					</Link>
					<Link href={'https://facebook.com/'}>
						<a target={'_blank'}>
							<Image
								src={facebook}
								width={50.75}
								height={50.75}
								alt="City-312"
								draggable={false}
							/>
						</a>
					</Link>
					<Link href={'https://www.whatsapp.com/'}>
						<a target={'_blank'}>
							<Image
								src={whatsapp}
								width={50.75}
								height={50.75}
								alt="City-312"
								draggable={false}
							/>
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Footer
