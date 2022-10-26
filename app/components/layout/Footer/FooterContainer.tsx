import { FC } from 'react'

import styles from './Footer.module.scss'
import FooterItem from './FooterItem'
import { IMenuFooter } from './footerItem.interface'

const FooterContainer: FC<{ menu: IMenuFooter }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.menu}>
			{items.map((item) => (
				<FooterItem item={item} key={item.link} />
			))}
		</ul>
	)
}

export default FooterContainer
