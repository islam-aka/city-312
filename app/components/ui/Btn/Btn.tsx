import { FC } from 'react'

import { IBtnProps } from './Btn.interface'
import styles from './Btn.module.scss'

const Btn: FC<IBtnProps> = ({ children, ...props }: IBtnProps) => {
	return (
		<button {...props} className={styles.btn}>
			{children}
		</button>
	)
}

export default Btn
