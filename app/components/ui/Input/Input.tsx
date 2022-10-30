import React, { FC } from 'react'

import { IInputProps } from './input.interface'

const Input: FC<IInputProps> = ({ placeholder, type, value, ...props }) => {
	return (
		<input {...props} type={type} placeholder={placeholder} value={value} />
	)
}

export default Input
