/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			noto: ['Noto Sans', 'system-ui', 'sans-serif'],
		},
		extend: {},
	},
	plugins: [
		require('@catppuccin/tailwindcss'),
	],
};
