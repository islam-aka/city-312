import React, { FC } from 'react'
import {
	GeolocationControl,
	Map,
	Placemark,
	TrafficControl,
	YMaps,
} from 'react-yandex-maps'

const API_KEY = process.env.REACT_APP_API_KEY
console.log(API_KEY)

const YandexMap: FC = () => {
	const test = async () => {}
	return (
		<>
			<YMaps>
				<Map
					width={'100%'}
					height={'100%'}
					defaultState={{
						center: [42.874985, 74.602102],
						zoom: 17,
					}}
				>
					<Placemark geometry={[42.874985, 74.602102]} />
					<GeolocationControl options={{ float: 'left' }} />
					<TrafficControl options={{ float: 'right' }} />
				</Map>
			</YMaps>
		</>
	)
}

export default YandexMap
