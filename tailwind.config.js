/** @type {import('tailwindcss').Config} */

// { Import dependencies}
const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')

// Default color
const primary = '#0F0F0F'
// const primary = '#fff'

module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./app/components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		// Colors
		colors: {
			// Default colors
			primary,
			black: colors.black,
			white: colors.white,
			transparent: colors.transparent,
			// Personal colors
			yellow: {
				300:'#EAA700',
				400: '#F5C521',
				700: '#F5C521',
				800: '#FFA852',
			},
			gray: {
				200: '#EBECF0',
				300: '#EEEEEE',
				400: '#252525',
				600: '#d5d5d5',
				700: '#2c2c2c',
				800: '#5C5C5C',
				900: '#202533',
			},
			red: {
				400: '#C82D2D',
			},
			darkBlue: {
				900: '#132836',
			},
			black: {
				400: '#1B1B1B',
				700: '#212121',
				900: '#000000',
			}
		},
		screens: {
			xl: '1440px',
			md: '1024px',
			lg: '768px',
			sm: '640px',
		},
		extend: {
			// Custom spacing m | p
			spacing: {
				0.5: '0.12rem',
				layout: '2.75rem',
			},
			// Custom fontSize
			fontFamily: {
				gilroy: 'Gilroy, cursive',
			},
			fontSize: {
				'2lg': '1.38rem',
			},
			borderRadius: {
				image: '0.5rem',
				layout: '0.8rem',
			},
			transitionTimingFunction: {
				DEFAULT: 'ease-in-out',
			},
			transitionDuration: {
				DEFAULT: '200ms',
			},
			zIndex: {
				1: '1',
				2: '2',
				3: '3',
			},
			keyframes: {
				fade: {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)',
					},
					'50%': {
						opacity: 0.3,
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)',
					},
				},
			},
			animation: {
				fade: 'fade .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out',
			},
		},
	},
	plugins: [
		plugin(({ addComponents, theme, addUtilities }) => {
			addComponents({
				'.btn-primary': {
					backgroundColor: theme('colors.yellow.700'),
					color: '#000000',
					borderRadius: '0.625rem',
					transition: 'background-color 3s ease-in-out',
					'&:hover': {
						backgroundColor: '#F5C550',
					},
				},
				// { ??????? }
				'.text-link': {},
				// '.text-colors-gray': {
				// 	color: theme('colors.gray.600'),
				// },
				// '.text-colors-yellow-700': {
				// 	color: theme('colors.yellow.700'),
				// },
			}),
				addUtilities({
					'.text-shadow': {
						textShadow: '1px 1px rgba(0, 0, 0, 0.4)',
					},
					'.outline-border-none': {
						outline: 'none',
						border: 'none',
					},
					'.flex-center-between': {
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
					},
					'.image-like-bg': {
						objectPosition: 'center',
						objectFit: 'cover',
						pointerEvents: 'none',
					},
				})
		}),
	],
}
