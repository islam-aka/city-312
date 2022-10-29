import React from 'react'

import YandexMap from '@/components/layout/YandexMaps/YandexMap'

import styles from './contacts.module.scss'

const contacts = () => {
	return (
		<div className={styles.contacts}>
			<div></div>
			<div></div>
			<div><YandexMap /></div>
			
		</div>
	)
}

export default contacts
