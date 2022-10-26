import { FC } from 'react'

import styles from './Menu.module.scss'
import MenuItem from './MenuItem'
import { IMenu } from './menu.interface'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items } }) => {
	return (
		<ul className={styles.menu}>
			{items.map((item) => (
				<MenuItem item={item} key={item.link} />
			))}
		</ul>
	)
}

export default Menu
