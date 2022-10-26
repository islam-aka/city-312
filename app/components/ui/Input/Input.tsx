import React, { FC } from 'react'

import { IInputProps } from './input.interface'

const Input: FC<IInputProps> = ({ placeholder, type, value }) => {
	return <input type={type} placeholder={placeholder} value={value} />
}

export default Input
