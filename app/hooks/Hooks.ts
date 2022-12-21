import { useState, useEffect } from 'react'

export function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(0)

	useEffect(() => {
		setTimeout(() => {
			setWindowWidth(window.innerWidth)
			if (typeof window !== 'undefined') {
				const handleResize = () => setWindowWidth(window.innerWidth)
				window.addEventListener('resize', handleResize)
				return () => {
					window.removeEventListener('resize', handleResize)
				}
			}
		}, 500)
	}, [])

	return windowWidth
}
