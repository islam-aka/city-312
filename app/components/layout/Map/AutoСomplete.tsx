import React from 'react'

import styles from './AutoСomplete.module.scss'

const Autocomplete = () => {
	return (
		<div className={styles.container}>
			<input type="text" className={styles.inp} />
		</div>
	)
}

export default Autocomplete
