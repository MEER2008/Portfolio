/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'fuzzywuzzy': '#C1666B',
			'tan': '#D4B483',
			'timberwolf': '#E4DFDA',
			'verdigris': '#48A9A6',
			'liberty': '#4357AD',
			// 'silver': '#ecebff',
			// 'bubble-gum': '#ff77e9',
			// 'bermuda': '#78dcca',
		  },	  
		extend: {},
	},
	plugins: [
		// require('@tailwindcss/forms'),
	],
}
