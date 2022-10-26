import React, { FC } from 'react'

import { ITextareaProps } from './textarea.interface'

const Input: FC<ITextareaProps> = ({ placeholder, value }) => {
	return <textarea placeholder={placeholder} value={value}></textarea>
}

export default Input
