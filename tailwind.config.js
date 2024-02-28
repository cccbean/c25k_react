/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			noto: ['Noto Sans', 'system-ui', 'sans-serif'],
		},
		extend: {
			keyframes: {
				wavy: {
					'0%, 100%': {transform: 'translateY(0px)'},
					'50%': {transform: 'translateY(-15px)'},
				}
			},
			animation: {
				'wavy-walk': 'wavy 2.5s ease infinite',
				'wavy-run': 'wavy 1.5s ease infinite',
			}
		},
	},
	plugins: [
		require('@catppuccin/tailwindcss'),
	],
};
