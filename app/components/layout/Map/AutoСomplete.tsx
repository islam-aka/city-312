import React, { FC, useEffect } from 'react'
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete'
import useOnclickOutside from 'react-cool-onclickoutside'

import styles from './AutoСomplete.module.scss'
import { IAutocomplete, ICoordinates } from './autoСomplete.interface'

interface IDescription {
	description: string
}

const Autocomplete: FC<IAutocomplete> = ({ isLoaded, onSelect }) => {
	const {
		ready,
		value,
		suggestions: { status, data },
		init,
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		initOnMount: false,
		debounce: 300,
	})
	const ref = useOnclickOutside(() => {
		clearSuggestions()
	})

	const handleInput = (e: any) => {
		setValue(e.target.value)
		console.log(e)
	}

	const handleSelect = ({ description }: IDescription) => () => {
		setValue(description, false)
		clearSuggestions()

		getGeocode({ address: description }).then((results) => {
			const { lat, lng } = getLatLng(results[0])
			onSelect({ lat, lng })
		})
	}

	useEffect(() => {
		if (isLoaded) {
			init()
		}
	}, [isLoaded, init])

	const renderSuggestions = () =>
		data.map((suggestion) => {
			const {
				place_id,
				structured_formatting: { main_text, secondary_text },
			} = suggestion

			return (
				<li
					className={styles.listItem}
					key={place_id}
					onClick={handleSelect(suggestion)}
				>
					<strong>{main_text}</strong> <small>{secondary_text}</small>
				</li>
			)
		})

	return (
		<div className={styles.root} ref={ref}>
			<input
				type="text"
				className={styles.inp}
				value={value}
				onChange={handleInput}
				disabled={!ready}
				placeholder="Введите адрес вашего филиала"
			/>
			{status === 'OK' && (
				<ul className={styles.suggestion}>{renderSuggestions()}</ul>
			)}
		</div>
	)
}

export default Autocomplete
