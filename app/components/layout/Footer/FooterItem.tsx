import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './FooterItem.module.scss'
import { IMenuItemFooter } from './footerItem.interface'

const FooterItem: FC<{ item: IMenuItemFooter }> = ({ item }) => {
	const { asPath } = useRouter()
	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<a className="block md:flex">{item.title}</a>
			</Link>
		</li>
	)
}

export default FooterItem
