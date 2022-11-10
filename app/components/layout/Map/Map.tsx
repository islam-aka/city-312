import { GoogleMap } from '@react-google-maps/api'
import React, { FC, useRef } from 'react'

import styles from './Map.module.scss'
import { defaultTheme } from './Theme'
import { Icoordinates } from './map.interface'

const containerStyle = {
	width: '100%',
	height: '100%',
}

const defaultOptions = {
	panControl: true,
	zoomControl: true,
	mapControl: false,
	scaleControl: false,
	streetViewControl: false,
	rotateControl: false,
	clickableIcons: false,
	keyboardShortcuts: false,
	scrollwheel: false,
	disableDoudleClickZoom: false,
	fullscreenControl: false,
}

const Map: FC<Icoordinates> = ({ center }) => {
	console.log()

	const mapRef = useRef(undefined)

	const onLoad = React.useCallback(function callback(map: any) {
		mapRef.current = map
	}, [])

	const onUnmount = React.useCallback(function callback(map: any) {
		mapRef.current = undefined
	}, [])

	return (
		<div className={styles.container}>
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
				options={defaultOptions}
			>
				{/* Child components, such as markers, info windows, etc. */}
				<></>
			</GoogleMap>
		</div>
	)
}

export default Map
