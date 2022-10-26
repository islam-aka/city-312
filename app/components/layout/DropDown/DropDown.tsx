import React, { FC, useState } from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'

import styles from './DropDown.module.scss'
import { IDropDown } from './dropDown.interface'

const DropDown: FC<IDropDown> = ({ state, setState, arr: { items } }) => {
	const [hidden, setHidden] = useState(false)
	const test = (str?: string) => {
		setHidden(!hidden)
	}
	return (
		<div className={styles.dropdown}>
			<div
				onClick={() => setHidden(!hidden)}
				className={
					hidden ? styles.dropdown__select : styles.dropdown__select_none
				}
			>
				<span className={styles.select}>{state}</span>

				<div>
					<FaLongArrowAltRight color="#F5C521" size={'40px'} />
				</div>
			</div>

			<div
				className={hidden ? styles.dropdown__list_none : styles.dropdown__list}
			>
				{items.map((item, index) => (
					<div key={index} className={styles.dropdown__list__item}>
						<p onClick={() => test(item.day)}>{item.day}</p>
					</div>
				))}
			</div>
		</div>
	)
}

export default DropDown
