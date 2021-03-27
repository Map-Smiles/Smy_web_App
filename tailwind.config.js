module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			highlight: {
				DEFAULT: '#F3B13D',
				light: '#F9DF4B',
				menu: '#E4803A',
				secondary: '#439597',
			},
			gradient: {
				DEFAULT: 'linear-gradient(to right, #E3763A , #E8914A)',
			},
			gray: {
				DEFAULT: '#4A4A4A',
				light: '#F4F4F4',
				dark: '#B8B8B8',
				lightest: '#FFFFFF',
			},
			primary: '#FF5A00',
			primaryHover: 'rgb(255,90,0,.8)',
			secondary: '#663399',
			info: '#507EF6',
			sucess: '#53BF85',
			error: '#F65050',
			warn: '#F6C850',
		},
		fontFamily: {
			sans: ['Nunito', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		borderRadius: {
			none: '0',
			sm: '.125rem',
			DEFAULT: '.25rem',
			lg: '.5rem',
			full: '9999px',
		},
		extend: {
			spacing: {
				128: '32rem',
				144: '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
		},
	},
	variants: {
		fill: [],
		extend: {
			borderColor: ['focus-visible'],
			opacity: ['disabled'],
		},
	},
	plugins: [require('@tailwindcss/typography')],
}
