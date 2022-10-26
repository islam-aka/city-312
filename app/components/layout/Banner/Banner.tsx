import { url } from 'inspector'
import { FC } from 'react'

import styles from './Banner.module.scss'

const Banner: FC = () => {
	return (
		<div className={styles.bannerWrapper}>
			{/* Overlay */}
			<div className={styles.overlay}>
				<div></div>
			</div>
		</div>
	)
}

export default Banner
