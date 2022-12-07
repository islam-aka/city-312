import React from 'react'
import { useJsApiLoader } from '@react-google-maps/api'

import Map from '../Map/Map'

// styles
import styles from './Location.module.scss'


const defaultCenter = {
	lat: 42.87,
	lng: 74.59,
}
type Libraries = (
	| 'drawing'
	| 'geometry'
	| 'localContext'
	| 'places'
	| 'visualization'
)[]

const libraries: Libraries = ['places']

const Location = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyBCKfxyxhPafyv0-c5x_kxO24aNijt0b6U',
        libraries,
    })
  return (
    <div className={styles.Location}>
        <h2>где приобрести карту?</h2>
        <div className={styles.Location_Wrapper}>
            <div className={styles.Wrapper_map}>
			    {isLoaded ? <Map center={defaultCenter} /> : <h2>loading</h2>}
            </div>
            <div className={styles.Wrapper_address}>
                <h4>Наш адрес </h4>
                <p>Бишкек</p>
                <div className={styles.Wrapper_item}>
                    <h4>Офис</h4>
                    <p>ул. Бишкек</p>
                    <p><a href="tel:">+996 558 999 000</a></p>
                </div>
                <div className={styles.Wrapper_item}>
                    <h4>Офис</h4>
                    <p>ул. Бишкек</p>
                    <p><a href="tel:">+996 558 999 000</a></p>
                </div>
                <div className={styles.Wrapper_item}>
                    <h4>Офис</h4>
                    <p>ул. Бишкек</p>
                    <p><a href="tel:">+996 558 999 000</a></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Location