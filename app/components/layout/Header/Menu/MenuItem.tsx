import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './MenuItem.module.scss'
import { IMenuItem } from './menu.interface'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li className={styles.navItemLi}>
			<Link href={item.link}>
				<a className={styles.navItem}>{item.title}</a>
			</Link>
		</li>
	)
}

export default MenuItem
